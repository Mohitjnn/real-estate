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
              className="flex-none h-fit w-[90vw] lg:w-[65vh] mx-6  rounded-xl  lg:mx-20 m-4 min-w-0 bg-white p-6 border-[2px] border-gray-500 "
              key={index}
            >
              <div className="w-full h-fit relative ">
                <div className="flex justify-start items-start space-x-4">
                  <div
                    key={index}
                    className="relative w-[50px] h-[50px] rounded-full overflow-hidden"
                  >
                    <Image
                      src={`/static/images/avatarImage${
                        ((index + 1) % 2) + 1
                      }.png`}
                      alt={Reason.title}
                      className="object-cover rounded-3xl"
                      fill={true}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="text-xl font-bold">Mr Francis</h2>
                    <p className="text-m font-light">Kandivali,Mumbai</p>
                  </div>
                </div>
                <p className="text-m py-4 h-full w-full text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  harum nemo qui corrupti quasi culpa officiis, provident
                  commodi vero hic.
                </p>
              </div>
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
