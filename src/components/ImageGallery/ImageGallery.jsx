"use client";
import React, { useState } from "react";
import Image from "next/image";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(
    "/static/images/homePage1.png"
  );

  return (
    <div className="w-[50%] h-full flex flex-col space-y-2">
      <div className=" w-full h-[45vh] relative">
        <Image
          src={selectedImage}
          fill
          alt="image1"
          className="object-cover rounded-t-xl"
        />
      </div>
      <div className="flex justify-between w-full h-fit">
        {[...Array(5)].slice(1, 4).map((item, i) => (
          <div
            key={i}
            className="w-[33%] h-[15vh] relative cursor-pointer"
            onClick={() =>
              setSelectedImage(`/static/images/homePage${i + 1}.png`)
            }
          >
            <Image
              src={`/static/images/homePage${i + 1}.png`}
              fill
              alt={`image${i + 1}`}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
