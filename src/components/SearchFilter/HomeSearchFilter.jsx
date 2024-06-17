"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

const HomeSearchFilter = () => {
  const [buyOrRent, setBuyOrRent] = useState(false);
  const locationRef = useRef("");
  const bedroomsRef = useRef("");
  const priceRangeRef = useRef("");

  const handleButtonClick = (value) => {
    setBuyOrRent(value);
  };

  const handleSelectChange = (ref, value) => {
    ref.current = value;
  };

  const constructQuery = () => {
    const [minPrice, maxPrice] = priceRangeRef.current.split(",").map(Number);

    return {
      location: locationRef.current || "Andheri",
      bedrooms: bedroomsRef.current || "3",
      minPrice: minPrice || 0,
      maxPrice: maxPrice || Infinity,
      isForRent: buyOrRent,
    };
  };

  return (
    <>
      <div className="w-[40%] lg:w-[20%] h-[10vh] z-20 flex justify-evenly items-center">
        <button
          className={`text content-center font-bold my-4 w-1/2 h-full ${
            !buyOrRent ? "bg-bluePrimary text-white" : "bg-white"
          } rounded-tl-xl`}
          onClick={() => handleButtonClick(false)}
        >
          BUY
        </button>
        <button
          className={`text content-center font-bold w-1/2 h-full ${
            buyOrRent ? "bg-bluePrimary text-white" : "bg-white"
          } rounded-tr-xl`}
          onClick={() => handleButtonClick(true)}
        >
          RENT
        </button>
      </div>
      <div
        className="w-[90%] lg:w-[60%] bg-white xl:h-[15vh] flex flex-col space-y-4 lg:space-y-0 lg:flex-row justify-between items-center rounded-xl lg:rounded-[20vh] p-4"
        style={{ boxShadow: "0px 2px 10px 0px" }}
      >
        <div className="flex flex-row">
          <div className="flex flex-col items-start justify-center lg:justify-between h-full lg:space-y-0 space-y-2 px-4 border-r-2">
            <h1 className="text-sm lg:text-lg font-bold">Locations</h1>
            <div className="text-xs md:text-sm text-gray-500 font-bold">
              <select
                name="location"
                className="rounded-lg h-fit outline-none w-[100%]"
                onChange={(e) =>
                  handleSelectChange(locationRef, e.target.value)
                }
              >
                <option value="">Show All</option>
                {["Andheri", "Jogeshwari", "Bandra", "Borivali", "Malad"].map(
                  (location) => (
                    <option value={location}>{location}</option>
                  )
                )}
              </select>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center lg:justify-between space-y-2 lg:space-y-0 h-full px-4 border-r-2">
            <h1 className="text-sm lg:text-lg font-bold">Bedrooms</h1>
            <div className="text-xs lg:text-sm text-gray-500 font-bold">
              <select
                name="bedrooms"
                className="rounded-lg h-fit outline-none w-[100%]"
                onChange={(e) =>
                  handleSelectChange(bedroomsRef, e.target.value)
                }
              >
                <option value="">Show All</option>
                {["1", "2", "3", "4"].map((rooms) => (
                  <option value={rooms}>{rooms} Bedroom</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center lg:justify-between space-y-2 lg:space-y-0 h-full px-4">
            <h1 className="text-sm lg:text-lg font-bold">Price Range</h1>
            <div className="text-xs lg:text-sm text-gray-500 font-bold">
              <select
                name="priceRange"
                className="rounded-lg h-fit outline-none w-[100%]"
                onChange={(e) =>
                  handleSelectChange(priceRangeRef, e.target.value)
                }
              >
                <option value="">Show All</option>
                <option value="0,5000000">Under 50 Lakhs</option>
                <option value="5000000,10000000">50 Lakhs - 1 Crore</option>
                <option value="10000000,20000000">1 - 2 Crores</option>
                <option value="20000000,99999999">Above 2 Crores</option>
              </select>
            </div>
          </div>
        </div>
        <button className="BtnPrimary text-white py-4">
          <Link
            href={{
              pathname: "/projects",
              query: constructQuery(),
            }}
          >
            Search
          </Link>
        </button>
      </div>
    </>
  );
};

export default HomeSearchFilter;
