import React, { useState, useEffect } from "react";
import { LuShare } from "react-icons/lu";
import { RiGalleryView2 } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import supabase from "../config/supabaseClient";
import { useParams } from "react-router-dom";
import Property from "../assets/property.jpg"; // fallback image

const Listing = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [images, setImages] = useState([Property]);
  const [mainImage, setMainImage] = useState(Property);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const MAX_VISIBLE = 5;

  const fetchListing = async () => {
    if (!id) return;

    const { data, error } = await supabase
      .from("listings")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("❌ Error fetching listing:", error.message);
      setListing(null);
      setImages([Property]);
      setMainImage(Property);
    } else if (data) {
      let imgs = [];
      try {
        if (Array.isArray(data.image_urls)) {
          imgs = data.image_urls;
        } else if (typeof data.image_urls === "string") {
          imgs = JSON.parse(data.image_urls);
        }
      } catch (err) {
        console.warn("⚠️ Could not parse image_urls:", err);
      }

      if (!imgs || imgs.length === 0) imgs = [Property];

      setListing({
        title: data.property_title || "Property Title",
        date: data.updated_at
          ? new Date(data.updated_at).toLocaleDateString()
          : "N/A",
      });
      setImages(imgs);
      setMainImage(imgs[0]);
    }
  };

  useEffect(() => {
    fetchListing();

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [id]);

  const mobileSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  if (!listing) {
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  }

  return (
    <>
      <div className="max-w-[1200px] mx-auto mt-20 px-4 md:px-6 flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h1 className="text-lg md:text-2xl font-semibold">
              {listing.title}
            </h1>
            <h2 className="block md:hidden pt-2 mb-1 text-gray-800 font-medium text-sm">
              Entire Serviced Apartment in Colombo, Sri Lanka
            </h2>
            <p className="py-1 text-xs md:text-sm font-normal text-gray-400">
              Updated: {listing.date}
            </p>
          </div>

          {/* Share Button */}
          <button className="self-start md:self-center">
            <span className="text-gray-700 bg-gray-100 hover:bg-gray-200 py-2 px-3 border border-gray-300 hover:border-gray-500 rounded-xl font-medium flex items-center gap-2 text-sm md:text-base transition">
              <LuShare size={18} />
              Share
            </span>
          </button>
        </div>

        {/* Mobile Slider */}
        <div className="block md:hidden w-full">
          <Slider {...mobileSettings}>
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`mobile-slide-${index}`}
                  className="w-full h-[300px] object-cover rounded-xl"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-2 gap-3 rounded-2xl overflow-hidden">
          {/* Main Image */}
          <img
            src={mainImage}
            alt="listing"
            className="w-full h-[500px] object-cover cursor-pointer rounded-l-2xl transition-transform hover:scale-[1.02] duration-300 shadow-md"
            onClick={() => !isMobile && setLightboxOpen(true)}
          />

          {/* Thumbnails */}
          <div className="grid grid-cols-2 gap-3">
            {images.slice(1, MAX_VISIBLE).map((img, index) => {
              const isLastVisible =
                index === MAX_VISIBLE - 2 && images.length > MAX_VISIBLE;

              return (
                <div
                  key={index}
                  className={`relative h-[245px] cursor-pointer overflow-hidden ${
                    index === 0 ? "rounded-tr-2xl" : ""
                  } ${index === 3 ? "rounded-br-2xl" : ""}`}
                >
                  <img
                    src={img}
                    alt={`thumbnail-${index}`}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    onClick={() => !isLastVisible && setMainImage(img)}
                  />

                  {isLastVisible && (
                    <button
                      onClick={() => !isMobile && setLightboxOpen(true)}
                      className="absolute bottom-4 right-4 bg-white bg-opacity-95 text-black flex gap-2 items-center text-sm font-semibold px-3 py-2 rounded-lg shadow-lg hover:bg-opacity-100 transition"
                    >
                      <RiGalleryView2 size={20} /> Show all photos
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && !isMobile && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-[1000px] w-full max-h-[90vh] overflow-y-auto rounded-xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-black text-3xl cursor-pointer font-bold hover:text-orange-400 transition"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close gallery"
            >
              &times;
            </button>

            <div className="flex flex-col gap-6">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full rounded-xl object-cover shadow-lg"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Listing;
