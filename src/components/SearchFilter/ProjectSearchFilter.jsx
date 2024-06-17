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
        <option value="Andheri" style={{ color: "black" }}>
          Andheri
        </option>
        <option value="Borivali" style={{ color: "black" }}>
          Borivali
        </option>
        <option value="Jogeshwari" style={{ color: "black" }}>
          Jogeshwari
        </option>
        <option value="Malad" style={{ color: "black" }}>
          Malad
        </option>
        <option value="Bandra" style={{ color: "black" }}>
          Bandra
        </option>
        {/* Add more locations as needed */}
      </select>
      <div className="flex flex-col items-center justify-center h-fit space-y-4 py-8 px-8 w-full bg-cardHolderLight rounded-t-3xl">
        <div className="flex w-full h-fit justify-between">
          <select
            name="isForRent"
            className="text font-semibold rounded-lg h-fit p-3 outline-none w-fit"
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
            className="text font-semibold rounded-lg h-fit p-3 outline-none w-fit"
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
            className="text font-semibold rounded-lg h-fit p-3 outline-none w-fit"
            value={filters.maxPrice} // Set the initial value
            onChange={(e) =>
              handleFilterChange("maxPrice", parseInt(e.target.value))
            }
            style={{ boxShadow: "0px 0px 10px 0px #cdcbcb" }}
          >
            <option value="999999999">Max Price: -</option>
            <option value="5000000">Max Price: 50L</option>
            <option value="10000000">Max Price: 1CR</option>
            <option value="20000000">Max Price: 2CR</option>
          </select>
          <div
            className="flex items-center space-x-2 w-fit px-4 rounded-xl bg-white"
            style={{ boxShadow: "0px 0px 10px 0px #cdcbcb " }}
          >
            <span className="text font-semibold">Rooms:</span>
            {[1, 2, 3, 4].map((rooms) => (
              <button
                key={rooms}
                type="button"
                className={`px-4 py-2 rounded-lg text font-semibold ${
                  filters.bedrooms === rooms ? "bg-blue-300" : ""
                }`}
                onClick={() => handleFilterChange("bedrooms", rooms)}
              >
                {rooms === 4 ? "4+" : rooms}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSearchFilter;
