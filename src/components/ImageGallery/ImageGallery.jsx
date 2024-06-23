"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "../cards/Modal";

const staticImages = [
  {
    text: "Description of image is here image1",
    url: "/static/images/homePage1.png",
  },
  {
    text: "Description of image is here image2",
    url: "/static/images/homePage2.png",
  },
  {
    text: "Description of image is here image3",
    url: "/static/images/homePage3.png",
  },
  {
    text: "Description of image is here image4",
    url: "/static/images/homePage4.png",
  },
  {
    text: "Description of image is here image5",
    url: "/static/images/homePage5.png",
  },
  {
    text: "Description of image is here image6",
    url: "/static/images/homePage6.png",
  },
];

const ImageGallery = ({ images }) => {
  const data = images?.length > 0 ? images : staticImages;
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.url); // Ensure the correct property name
  };

  const handelRotationRight = () => {
    const totalLength = data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      setClickedImg(data[0].url);
      return;
    }
    const newIndex = currentIndex + 1;
    setClickedImg(data[newIndex].url);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      setClickedImg(data[totalLength - 1].url);
      return;
    }
    const newIndex = currentIndex - 1;
    setClickedImg(data[newIndex].url);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full lg:w-[50%] h-full flex flex-col space-y-2">
      <div className="w-full h-[45vh] relative cursor-pointer">
        <Image
          src={data[0].url}
          fill={true}
          priority={true}
          alt={`image1`}
          className="object-cover rounded-t-xl"
        />
      </div>
      <div className="flex justify-between w-full h-fit">
        {data.slice(1, 3).map((item, i) => (
          <div key={i} className="w-[33%] h-[15vh] relative cursor-pointer">
            <Image
              src={item.url}
              fill={true}
              alt={`image${i + 2}`}
              className="object-cover"
            />
          </div>
        ))}
        {data.length > 4 && (
          <div
            className="w-[33%] h-[15vh] relative cursor-pointer"
            onClick={() => handleClick(data[4], 4)}
          >
            <Image
              src={data[4].url}
              fill={true}
              alt={`image5`}
              className="object-cover"
            />
            <p className="text text-white absolute w-full h-full flex justify-center items-center bg-black/80">
              {`+${data.length - 3} images`}
            </p>
          </div>
        )}
      </div>
      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          handelRotationRight={handelRotationRight}
          setClickedImg={setClickedImg}
          handelRotationLeft={handelRotationLeft}
        />
      )}
    </div>
  );
};

export default ImageGallery;
