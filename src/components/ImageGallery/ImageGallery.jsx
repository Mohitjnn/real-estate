"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "../cards/Modal";

const data = [
  {
    text: "Description of image is here image1",
    link: "/static/images/homePage1.png",
  },
  {
    text: "Description of image is here image2",
    link: "/static/images/homePage2.png",
  },
  {
    text: "Description of image is here image3",
    link: "/static/images/homePage3.png",
  },
  {
    text: "Description of image is here image4",
    link: "/static/images/homePage4.png",
  },
  {
    text: "Description of image is here image5",
    link: "/static/images/homePage5.png",
  },
  {
    text: "Description of image is here image6",
    link: "/static/images/homePage6.png",
  },
];

const ImageGallery = () => {
  const n = 6;

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-[50%] h-full flex flex-col space-y-2">
      <div className=" w-full h-[45vh] relative">
        <Image
          src={data[0].link}
          fill={true}
          priority={true}
          alt={data[0].text}
          className="object-cover rounded-t-xl"
        />
      </div>
      <div className="flex justify-between w-full h-fit">
        {data.slice(1, 3).map((item, i) => (
          <div key={i} className="w-[33%] h-[15vh] relative cursor-pointer">
            <Image
              src={item.link}
              fill={true}
              alt={item.text}
              className="object-cover"
            />
          </div>
        ))}
        <div
          className="w-[33%] h-[15vh] relative cursor-pointer z-0"
          onClick={() => handleClick(data[3], 4)}
        >
          <Image
            src={data[3].link}
            fill={true}
            alt={data[3].text}
            className="object-cover"
          />
          <p className="text text-white absolute w-full h-full flex justify-center items-center bg-black/80">
            {`+${data.length - 3} images`}
          </p>
        </div>
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
