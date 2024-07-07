import React from "react";

const Address = ({
  formData,
  handleInputChange,
  handleBlur,
  errors,
  touched,
}) => (
  <>
    <h2 className="w-full text-3xl py-6 px-8 block bg-gray-200 text-left font-semibold text-gray-900">
      Property Details
    </h2>
    <div className="gap-y-8 flex justify-evenly flex-wrap px-8 py-4 text-left">
      <div className="w-[20%]">
        <label
          htmlFor="propertyType"
          className={`font-semibold ${
            errors.propertyType && touched.propertyType
              ? "text-red-500"
              : "text-m"
          }`}
        >
          {errors.propertyType && touched.propertyType
            ? errors.propertyType
            : "Property Type"}
        </label>
        <div className="mt-2">
          <select
            type="text"
            id="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`input ${
              errors.propertyType && touched.propertyType
                ? "border-red-600 focus:ring-red-500"
                : "focus:ring-sky-600"
            } sm:text-sm sm:leading-6`}
          >
            <option value="">Property Type</option>
            <option value="Villa">Villa</option>
            <option value="Flat">Flat</option>
            <option value="Studio">Studio</option>
            <option value="Residential">Residential</option>
            <option value="Business">Business</option>
          </select>
        </div>
      </div>
      <div className="w-[20%]">
        <label
          htmlFor="rentSell"
          className={`font-semibold ${
            errors.rentSell && touched.rentSell ? "text-red-500" : "text-m"
          }`}
        >
          {errors.rentSell && touched.rentSell
            ? errors.rentSell
            : "Rent or Sell"}
        </label>
        <div className="mt-2">
          <select
            id="rentSell"
            value={formData.rentSell}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`input  ${
              errors.rentSell && touched.rentSell
                ? "border-red-600 focus:ring-red-500"
                : "focus:ring-sky-600"
            } sm:text-sm sm:leading-6`}
          >
            <option value="">Rent or Sell</option>
            <option value="Rent">Rent</option>
            <option value="Sell">Sell</option>
          </select>
        </div>
      </div>

      <div className="w-[45%]">
        <label
          htmlFor="location"
          className={`font-semibold ${
            errors.location && touched.location ? "text-red-500" : "text-m"
          }`}
        >
          {errors.location && touched.location ? errors.location : "Location"}
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`input  ${
              errors.location && touched.location
                ? "border-red-600 focus:ring-red-500"
                : "focus:ring-sky-600"
            } sm:text-sm sm:leading-6`}
          />
        </div>
      </div>

      <div className="w-[30%]">
        <label
          htmlFor="expectedPrice"
          className={`font-semibold ${
            errors.expectedPrice && touched.expectedPrice
              ? "text-red-500"
              : "text-m"
          }`}
        >
          {errors.expectedPrice && touched.expectedPrice
            ? errors.expectedPrice
            : "Expected Price"}
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="expectedPrice"
            value={formData.expectedPrice}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`input  ${
              errors.expectedPrice && touched.expectedPrice
                ? "border-red-600 focus:ring-red-500"
                : "focus:ring-sky-600"
            } sm:text-sm sm:leading-6`}
          />
        </div>
      </div>

      <div className="w-[30%]">
        <label
          htmlFor="carpetArea"
          className={`font-semibold ${
            errors.carpetArea && touched.carpetArea ? "text-red-500" : "text-m"
          }`}
        >
          {errors.carpetArea && touched.carpetArea
            ? errors.carpetArea
            : "Carpet Area"}
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="carpetArea"
            value={formData.carpetArea}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`input  ${
              errors.carpetArea && touched.carpetArea
                ? "border-red-600 focus:ring-red-500"
                : "focus:ring-sky-600"
            } sm:text-sm sm:leading-6`}
          />
        </div>
      </div>

      <div className="w-[15%]">
        <label
          htmlFor="bedRooms"
          className={`font-semibold ${
            errors.bedRooms && touched.bedRooms ? "text-red-500" : "text-m"
          }`}
        >
          {errors.bedRooms && touched.bedRooms ? errors.bedRooms : "Bedrooms"}
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="bedRooms"
            value={formData.bedRooms}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`input  ${
              errors.bedRooms && touched.bedRooms
                ? "border-red-600 focus:ring-red-500"
                : "focus:ring-sky-600"
            } sm:text-sm sm:leading-6`}
          />
        </div>
      </div>

      <div className="w-[15%]">
        <label
          htmlFor="bathRooms"
          className={`font-semibold ${
            errors.bathRooms && touched.bathRooms ? "text-red-500" : "text-m"
          }`}
        >
          {errors.bathRooms && touched.bathRooms
            ? errors.bathRooms
            : "Bathrooms"}
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="bathRooms"
            value={formData.bathRooms}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`input  ${
              errors.bathRooms && touched.bathRooms
                ? "border-red-600 focus:ring-red-500"
                : "focus:ring-sky-600"
            } sm:text-sm sm:leading-6`}
          />
        </div>
      </div>
    </div>
  </>
);

export default Address;
