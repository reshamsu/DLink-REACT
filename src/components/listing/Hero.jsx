import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../config/supabaseClient"; // adjust path if needed
import { LuShare } from "react-icons/lu";
import { RiGalleryView2 } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const { id } = useParams(); // property id from URL
  const [property, setProperty] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const MAX_VISIBLE = 5;

  useEffect(() => {
    const fetchProperty = async () => {
      const { data, error } = await supabase
        .from("listings") // change table name if different
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching property:", error);
      } else {
        setProperty(data);
        setMainImage(data.images?.[0] || null); // assuming images is an array
      }
    };

    fetchProperty();
  }, [id]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  if (!property) {
    return <p className="text-center py-10">Loading property...</p>;
  }

  const images = property.images?.length ? property.images : [];

  return (
    <>
      <div className="max-w-7xl mx-auto mt-22 xl:px-0 md:px-6 flex md:flex flex-col-reverse md:flex-col">
        <div className="pt-4 md:pt-10 mb-6 mx-5 md:mx-0 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex-1">
            <h1 className="text-lg md:text-2xl font-semibold">
              {property.title}
            </h1>
            <h2 className="block md:hidden pt-2 mb-1 text-gray-800 font-medium text-sm">
              {property.type} in {property.location}
            </h2>
            <p className="py-1 text-xs md:text-sm font-normal text-gray-400">
              Updated: {new Date(property.updated_at).toLocaleDateString()}
            </p>
          </div>

          <button className="self-start md:self-center">
            <a
              href="#"
              className="text-gray-700 bg-gray-100 hover:bg-gray-200 py-2 px-3 hover:text-gray-800 border border-gray-400 hover:border-gray-600 rounded-xl font-medium flex items-center gap-2 text-sm md:text-base"
            >
              <LuShare size={18} />
              <span>Share</span>
            </a>
          </button>
        </div>

        {/* Mobile Slider */}
        <div className="block md:hidden w-full">
          <Slider {...mobileSettings}>
            {images.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img}
                  alt={`mobile-slide-${index}`}
                  className="w-full h-[300px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop Gallery */}
        <div className="hidden md:flex rounded-2xl overflow-hidden">
          {mainImage && (
            <img
              src={mainImage}
              alt="listing"
              className="w-[49.2%] h-[500px] object-cover cursor-pointer rounded-l-2xl transition-transform hover:scale-[1.02] duration-300 shadow-md"
              onClick={() => !isMobile && setLightboxOpen(true)}
            />
          )}

          <div className="grid grid-cols-2 gap-3 w-full pl-3 p-0">
            {images.slice(1, MAX_VISIBLE).map((img, index) => {
              const isLastVisible =
                index === MAX_VISIBLE - 2 && images.length > MAX_VISIBLE;

              return (
                <div
                  key={index}
                  className={`relative h-[245px] cursor-pointer overflow-hidden ${
                    index === 1
                      ? "rounded-tr-2xl"
                      : index === 3
                      ? "rounded-br-2xl"
                      : ""
                  }`}
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
                      className="absolute bottom-4 right-4 bg-white bg-opacity-95 cursor-pointer text-black flex gap-2 items-center text-sm font-semibold px-3 py-2 rounded-lg shadow-lg hover:bg-opacity-100 transition"
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
          className="fixed inset-0 z-50 overflow-y-auto bg-white bg-opacity-95 backdrop-blur-sm flex justify-center p-6"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
        >
          <div
            className="relative max-w-[800px] w-full rounded-xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-0 text-black text-4xl cursor-pointer font-bold hover:text-orange-400 transition"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close gallery"
            >
              &times;
            </button>

            <div className="flex flex-col gap-6">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full rounded-xl shadow-lg object-cover max-h-[60vh]"
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

export default Hero;
