"use client";
import React from "react";

const ProjectSearchFilter = ({ filters, handleFilterChange }) => {
  return (
    <>
      <select
        name="location"
        className="rounded-lg text-2xl font-normal w-fit h-fit outline-none bg-transparent text-white mb-4"
        value={filters.location} // Set the initial value
        onChange={(e) => handleFilterChange("location", e.target.value)}
      >
        {["Andheri", "Borivali", "Jogeshwari", "Malad", "Bandra"].map(
          (location) => (
            <option key={location} value={location} style={{ color: "black" }}>
              {location}
            </option>
          )
        )}
      </select>
      <div className="flex flex-col-reverse lg:flex-row space-y-4 lg:space-y-0 items-center justify-between p-8 w-full h-fit  bg-cardHolderLight rounded-t-3xl">
        <select
          name="isForRent"
          className="text font-semibold rounded-lg my-3 px-3 outline-none w-full lg:w-fit h-full"
          value={filters.isForRent ? "Rent" : "Buy"} // Set the initial value
          onChange={(e) =>
            handleFilterChange("isForRent", e.target.value === "Rent")
          }
          style={{ boxShadow: "0px 0px 10px 0px #cdcbcb" }}
        >
          <option value="Buy">For Sale</option>
          <option value="Rent">Rent</option>
        </select>
        <select
          name="minPrice"
          className="text font-semibold rounded-lg my-3 px-3 outline-none w-full lg:w-fit h-full"
          value={filters.minPrice} // Set the initial value
          onChange={(e) =>
            handleFilterChange("minPrice", parseInt(e.target.value))
          }
          style={{ boxShadow: "0px 0px 10px 0px #cdcbcb" }}
        >
          <option value="0">Min Price: 0</option>
          <option value="5000000">Min Price: 50L</option>
          <option value="10000000">Min Price: 1CR</option>
          <option value="20000000">Min Price: 2CR</option>
        </select>
        <select
          name="maxPrice"
          className="text font-semibold rounded-lg my-3 px-3 outline-none w-full lg:w-fit h-full"
          value={filters.maxPrice} // Set the initial value
          onChange={(e) =>
            handleFilterChange("maxPrice", parseInt(e.target.value))
          }
          style={{ boxShadow: "0px 0px 10px 0px #cdcbcb" }}
        >
          <option value="99999999">Max Price: -</option>
          <option value="5000000">Max Price: 50L</option>
          <option value="10000000">Max Price: 1CR</option>
          <option value="20000000">Max Price: 2CR</option>
        </select>
        <div
          className="flex items-center justify-center space-x-2 w-fit px-3 py-2 rounded-xl bg-white"
          style={{ boxShadow: "0px 0px 10px 0px #cdcbcb " }}
        >
          <span className="text font-semibold">Rooms:</span>
          {[1, 2, 3, 4].map((rooms) => (
            <button
              key={rooms}
              type="button"
              className={`px-4 xl:py-2 rounded-lg text font-semibold ${
                filters.bedrooms === rooms ? "bg-blue-300" : ""
              }`}
              onClick={() => handleFilterChange("bedrooms", rooms)}
            >
              {rooms === 4 ? "4+" : rooms}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectSearchFilter;
