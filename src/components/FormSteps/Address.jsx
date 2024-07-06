import React from "react";

const Address = ({ formData, handleInputChange }) => (
  <>
    <h2 className="w-full text-3xl py-6 px-8 block bg-gray-200 text-left font-semibold text-gray-900">
      Property Details
    </h2>

    <div className=" gap-y-8 flex justify-evenly flex-wrap px-8 py-4 text-left">
      <div className="w-[20%]">
        <label htmlFor="PropertyType" className="text-m font-semibold">
          Property Type
        </label>
        <div className="mt-2">
          <select
            id="PropertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          >
            <option>Villa</option>
            <option>Apartment</option>
            <option>Studio</option>
            <option>Commercial Space</option>
            <option>House</option>
          </select>
        </div>
      </div>

      <div className="w-[20%]">
        <label htmlFor="rent/Sell" className="text-m font-semibold">
          Rent/sell
        </label>
        <div className="mt-2">
          <select
            id="PropertyType"
            value={formData.rentSell}
            onChange={handleInputChange}
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          >
            <option>Rent</option>
            <option>Sell</option>
          </select>
        </div>
      </div>

      <div className="w-[45%]">
        <label htmlFor="Location" className="text-m font-semibold">
          Location
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="Location"
            value={formData.location}
            onChange={handleInputChange}
            autoComplete="street-address"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="w-[30%]">
        <label htmlFor="expectedPrice" className="text-m font-semibold">
          Expected Price
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="expectedPrice"
            value={formData.expectedPrice}
            onChange={handleInputChange}
            autoComplete="price-range"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="w-[30%]">
        <label htmlFor="carpetArea" className="text-m font-semibold">
          Carpet Area
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="carpetArea"
            value={formData.carpetArea}
            onChange={handleInputChange}
            autoComplete="carpet-Area"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="w-[10%]">
        <label htmlFor="bedRooms" className="text-m font-semibold">
          Bedrooms
        </label>
        <div className="mt-2">
          <input
            type="number"
            id="bedRooms"
            value={formData.bedRooms}
            onChange={handleInputChange}
            autoComplete="carpet-Area"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="w-[10%]">
        <label htmlFor="bathRooms" className="text-m font-semibold">
          Bathrooms
        </label>
        <div className="mt-2">
          <input
            type="number"
            id="bathRooms"
            value={formData.bathRooms}
            onChange={handleInputChange}
            autoComplete="carpet-Area"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  </>
);

export default Address;
