import React from "react";

const PersonalInformation = ({ formData, handleInputChange }) => (
  <>
    <h2 className="w-full text-3xl py-6 px-8 block bg-gray-200 text-left font-semibold text-gray-900">
      Personal Information
    </h2>
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 px-8">
      <div className="sm:col-span-3">
        <label
          htmlFor="firstName"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
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

      <div className="sm:col-span-3">
        <label
          htmlFor="lastName"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
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

      <div className="sm:col-span-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
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
