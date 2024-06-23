"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";

const DataCarousel = ({ Reasons = [] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.slideNodes(); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="w-full h-full ">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {Reasons.map((Reason, index) => (
            <div
              className="flex-none h-fit w-[90vw] lg:w-[65vh] mx-6  rounded-xl  lg:mx-20 m-4 min-w-0 "
              key={index}
            >
              <div className="w-full h-[30vh] relative ">
                <Image
                  src={`${Reason.Url}`}
                  fill={true}
                  alt={Reason.title}
                  className="object-cover rounded-xl border-2 border-gray-500"
                />
              </div>
              <h2 className="text-xl text-center w-full font-bold mt-4 ">
                {Reason.title}
              </h2>
              <p className="text-m mt-2 pb-6 px-3 h-full w-full text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                harum nemo qui corrupti quasi culpa officiis, provident commodi
                vero hic.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-start py-4">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`embla__dot ${
              index === selectedIndex ? "border-2 border-bluePrimary" : ""
            }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default DataCarousel;
