"use client";
import { useState, useEffect } from "react";

const comments = [
  "This platform helped me find my dream home!",
  "Great service and friendly staff.",
  "I highly recommend this to anyone looking for a new home.",
  "Amazing experience from start to finish!",
];

export default function TextCarousel() {
  const [currentComment, setCurrentComment] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentComment((prevComment) => (prevComment + 1) % comments.length);
        setAnimate(false);
      }, 1000); // Match this duration with the CSS animation duration
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className={`text-m text-gray-500 w-fit font-semibold transition-opacity duration-1000 ${
        animate ? "opacity-0" : "opacity-100"
      }`}
    >{`"${comments[currentComment]}"`}</p>
  );
}