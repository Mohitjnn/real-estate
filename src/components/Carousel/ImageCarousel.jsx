"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const ImageCarousel = ({ images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [images]);

  return (
    <div
      className={`relative w-full ${
        pathname === "/" ? "h-[100vh] xl:h-[97vh]" : "h-[50vh] lg:h-[70vh]"
      } overflow-hidden`}
    >
      {/* Background element */}
      <div className={`absolute inset-0 bg-black/40 z-0`} />
      {images.map((image, index) => (
        <div
          key={index}
          className={`transition-opacity duration-1000 absolute inset-0 -z-10 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.Url}
            alt={image.title}
            priority={true}
            fill={true}
            className="w-full h-full mix-blend-overlay object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
