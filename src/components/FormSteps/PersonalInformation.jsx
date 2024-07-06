import React from "react";

const PersonalInformation = ({ formData, handleInputChange }) => (
  <>
    <h2 className="w-full text-3xl py-6 px-8 block bg-gray-200 text-left font-semibold text-gray-900">
      Personal Information
    </h2>
    <div className=" gap-y-8 flex justify-evenly flex-wrap px-8 py-4 text-left">
      <div className="w-[45%]">
        <label htmlFor="firstName" className="text-m font-semibold">
          First name
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            autoComplete="given-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="w-[45%]">
        <label htmlFor="lastName" className="text-m font-semibold">
          Last name
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            autoComplete="family-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="w-[45%]">
        <label htmlFor="PhoneNumber" className="text-m font-semibold">
          Phone Number
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="w-[45%]">
        <label htmlFor="email" className="text-m font-semibold">
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  </>
);

export default PersonalInformation;
