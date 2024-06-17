"use client";

import React from "react";

const ProjectSearchFilter = () => {
  return (
    <>
      <select
        name="propertyType"
        className="rounded-lg text-2xl font-normal w-fit h-fit outline-none bg-transparent text-white "
      >
        <option value="" style={{ color: "black" }}>
          Show All
        </option>
        <option value="apartment" style={{ color: "black" }}>
          Apartment
        </option>
        <option value="villa" style={{ color: "black" }}>
          Villa
        </option>
        <option value="studio" style={{ color: "black" }}>
          Studio
        </option>
        <option value="penthouse" style={{ color: "black" }}>
          Penthouse
        </option>
      </select>
      <div className="top-[30vh] flex flex-col items-center justify-center h-fit space-y-4 p-4 w-full bg-cardHolderLight rounded-3xl">
        <div className="flex w-full h-fit justify-between p-4 space-x-4 ">
          <select
            name="propertyType"
            className="text font-semibold rounded-lg h-fit p-3 outline-none w-fit"
            onChange={(e) =>
              handleSelectChange(propertyTypeRef, e.target.value)
            }
            style={{ boxShadow: "0px 0px 10px 0px #cdcbcb" }}
          >
            <option value="Buy">For Sale</option>
            <option value="Rent">Rent</option>
          </select>
          <select
            name="min Price"
            className="text font-semibold rounded-lg h-fit p-3 outline-none w-fit"
            onChange={(e) =>
              handleSelectChange(propertyTypeRef, e.target.value)
            }
            style={{ boxShadow: "0px 0px 10px 0px #cdcbcb" }}
          >
            <option value="Min">Min Price: 0</option>
            <option value="0.5">Min Price: 50L</option>
            <option value="1">Min Price: 1CR</option>
            <option value="2">Min Price: 2CR</option>
          </select>
          <select
            name="max Price"
            className="text font-semibold rounded-lg h-fit p-3 outline-none w-fit"
            onChange={(e) =>
              handleSelectChange(propertyTypeRef, e.target.value)
            }
            style={{ boxShadow: "0px 0px 10px 0px #cdcbcb" }}
          >
            <option value="Max">Max Price: -</option>
            <option value="0.5">Max Price: 50L</option>
            <option value="1">Max Price: 1CR</option>
            <option value="2">Min Price: 2CR</option>
          </select>
          <div
            className="flex items-center space-x-2 w-fit  px-4 rounded-xl bg-white"
            style={{ boxShadow: "0px 0px 10px 0px #cdcbcb " }}
          >
            <span className="text font-semibold">Rooms:</span>
            <button
              type="button"
              className="px-4 py-2 rounded-lg text font-semibold bg-transparent  hover:bg-blue-300" // Button styles with hover effect
              onClick={() => handleRoomsSelection(1)} // Implement functionality for room selection
            >
              1
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-lg text font-semibold bg-transparent  hover:bg-blue-300"
              onClick={() => handleRoomsSelection(2)}
            >
              2
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-lg text font-semibold bg-transparent  hover:bg-blue-300"
              onClick={() => handleRoomsSelection(3)}
            >
              3
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-lg text font-semibold bg-transparent  hover:bg-blue-300"
              onClick={() => handleRoomsSelection(4)}
            >
              4+
            </button>
          </div>
        </div>
        <h1 className=" Heading  text-left w-full px-4">Best Options</h1>
      </div>
    </>
  );
};

export default ProjectSearchFilter;
