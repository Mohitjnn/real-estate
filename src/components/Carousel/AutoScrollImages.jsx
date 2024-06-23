"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";

const AutoScrollingImages = ({ images = [] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // 1024px corresponds to Tailwind's lg breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="w-full h-full">
      <div
        className={`overflow-hidden ${
          isMobile ? "" : "flex w-full justify-center"
        }`}
        ref={emblaRef}
      >
        <div className={`flex ${isMobile ? "" : "w-full justify-center"}`}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative ${
                isMobile
                  ? "flex-none w-[80vw] h-[60vh] mx-3"
                  : " w-[20vh]  h-[60vh]  mx-3 transition-all duration-500 ease-in-out hover:w-[70vh]"
              }`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={image.Url}
                  fill={true}
                  alt={image.title}
                  className="object-cover rounded-xl "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {isMobile && (
        <div className="flex justify-center items-center py-4">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${
                index === selectedIndex ? "border-2 border-bluePrimary" : ""
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoScrollingImages;
