"use client";
import React, { useState, useRef } from "react";

const SearchFilter = () => {
  const [buyOrRent, setBuyOrRent] = useState("buy");
  const propertyTypeRef = useRef("");
  const bedroomsRef = useRef("");
  const priceRangeRef = useRef("");

  const handleButtonClick = (value) => {
    setBuyOrRent(value);
  };

  const handleSelectChange = (ref, value) => {
    ref.current = value;
  };

  const handleSearchClick = () => {
    const filter = {
      buyOrRent,
      propertyType: propertyTypeRef.current,
      bedrooms: bedroomsRef.current,
      priceRange: priceRangeRef.current,
    };
    console.log(filter);
  };

  return (
    <>
      <div className="w-[40%] lg:w-[20%] h-[10vh] z-20 flex justify-evenly items-center">
        <button
          className={`text content-center font-bold my-4 w-1/2 h-full ${
            buyOrRent === "buy" ? "bg-bluePrimary text-white" : "bg-white"
          } rounded-tl-xl`}
          onClick={() => handleButtonClick("buy")}
        >
          BUY
        </button>
        <button
          className={`text content-center font-bold w-1/2 h-full ${
            buyOrRent === "rent" ? "bg-bluePrimary text-white" : "bg-white"
          } rounded-tr-xl`}
          onClick={() => handleButtonClick("rent")}
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
            <h1 className="text-sm lg:text-lg font-bold">Property Type</h1>
            <div className="text-xs md:text-sm text-gray-500 font-bold">
              <select
                name="propertyType"
                className="w-full"
                onChange={(e) =>
                  handleSelectChange(propertyTypeRef, e.target.value)
                }
              >
                <option value="">Show All</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="studio">Studio</option>
                <option value="penthouse">Penthouse</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center lg:justify-between space-y-2 lg:space-y-0 h-full px-4 border-r-2">
            <h1 className="text-sm lg:text-lg font-bold">Bedrooms</h1>
            <div className="text-xs lg:text-sm text-gray-500 font-bold">
              <select
                name="bedrooms"
                className="w-full"
                onChange={(e) =>
                  handleSelectChange(bedroomsRef, e.target.value)
                }
              >
                <option value="">Show All</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center lg:justify-between space-y-2 lg:space-y-0 h-full px-4">
            <h1 className="text-sm lg:text-lg font-bold">Price Range</h1>
            <div className="text-xs lg:text-sm text-gray-500 font-bold">
              <select
                name="priceRange"
                className="w-full"
                onChange={(e) =>
                  handleSelectChange(priceRangeRef, e.target.value)
                }
              >
                <option value="">Show All</option>
                <option value="under-50">Under 50 Lakhs</option>
                <option value="50-100">50 Lakhs - 1 Crore</option>
                <option value="1-2">1 - 2 Crores</option>
                <option value="above-2">Above 2 Crores</option>
              </select>
            </div>
          </div>
        </div>
        <button
          className="BtnPrimary text-white py-4"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchFilter;
