import React, { useState, useEffect } from "react";
import Property from "../../assets/property.jpg";
import { LuShare } from "react-icons/lu";
import { RiGalleryView2 } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const images = [
    Property,
    Property,
    Property,
    Property,
    Property,
    Property,
    Property,
  ];
  const [mainImage, setMainImage] = useState(images[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const MAX_VISIBLE = 5;

  // Track if mobile view to disable popup on mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // md breakpoint in Tailwind (768px)
    }
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

  return (
    <>
      <div className="max-w-[1200px] mx-auto mt-22 xl:px-0 md:px-6 flex md:flex flex-col-reverse md:flex-col">
        <div className="pt-4 md:pt-10 mb-6 mx-5 md:mx-0 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex-1">
            <h1 className="text-lg md:text-2xl font-semibold">
              Modern Apartment in Dehiwela, Colombo
            </h1>
            <h2 className="block md:hidden pt-2 mb-1 text-gray-800 font-medium text-sm">
              Entire Serviced Apartment in Colombo, Sri Lanka
            </h2>
            <p className="py-1 text-xs md:text-sm font-normal text-gray-400">
              Updated: 9th Aug 2025
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

        <div className="hidden md:flex rounded-2xl overflow-hidden">
          <img
            src={mainImage}
            alt="listing"
            className="w-[49.2%] h-[500px] object-cover cursor-pointer rounded-l-2xl transition-transform hover:scale-[1.02] duration-300 shadow-md"
            onClick={() => !isMobile && setLightboxOpen(true)} 
          />

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
              {(() => {
                const blocks = [];
                const imgs = images;
                let i = 0;

                while (i < imgs.length) {
  
                  blocks.push(
                    <img
                      key={`big-${i}`}
                      src={imgs[i]}
                      alt={`Gallery big image ${i + 1}`}
                      className="w-full rounded-xl max-h-[60vh]"
                      loading="lazy"
                    />
                  );
                  i++;

                  if (i < imgs.length) {
                    const twoImages = imgs.slice(i, i + 2);
                    blocks.push(
                      <div key={`two-${i}`} className="grid grid-cols-2 gap-4">
                        {twoImages.map((img, idx) => (
                          <img
                            key={`small-${i + idx}`}
                            src={img}
                            alt={`Gallery image ${i + idx + 1}`}
                            className="w-full rounded-xl shadow-lg object-cover h-[300px]"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    );
                    i += 2;
                  }
                }
                return blocks;
              })()}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
