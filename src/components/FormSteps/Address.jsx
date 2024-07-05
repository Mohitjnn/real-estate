import React from "react";

const Address = ({ formData, handleInputChange }) => (
  <div>
    <h2 className="w-full text-3xl py-6 px-8 block bg-gray-200 text-left font-semibold text-gray-900">
      Property Details
    </h2>

    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 px-8">
      <div className="sm:col-span-3">
        <label
          htmlFor="country"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Country
        </label>
        <div className="mt-2">
          <select
            id="country"
            value={formData.country}
            onChange={handleInputChange}
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="street"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Street address
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="street"
            value={formData.street}
            onChange={handleInputChange}
            autoComplete="street-address"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-2 sm:col-start-1">
        <label
          htmlFor="city"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          City
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="city"
            value={formData.city}
            onChange={handleInputChange}
            autoComplete="address-level2"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="state"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          State / Province
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="state"
            value={formData.state}
            onChange={handleInputChange}
            autoComplete="address-level1"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="zip"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          ZIP / Postal code
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="zip"
            value={formData.zip}
            onChange={handleInputChange}
            autoComplete="postal-code"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Address;
