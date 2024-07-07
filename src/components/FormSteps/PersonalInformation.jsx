import React from "react";

const PersonalInformation = ({
  formData,
  handleInputChange,
  handleBlur,
  errors,
  touched,
}) => (
  <>
    <h2 className="w-full text-3xl py-6 px-8 block bg-gray-200 text-left font-semibold text-gray-900">
      Personal Information
    </h2>
    <div className="gap-y-8 flex justify-evenly flex-wrap px-8 py-4 text-left">
      <div className="w-[45%]">
        <label
          htmlFor="firstName"
          className={`font-semibold ${
            errors.firstName && touched.firstName ? "text-red-500" : "text-m"
          }`}
        >
          {errors.firstName && touched.firstName
            ? errors.firstName
            : "First name"}
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            onBlur={handleBlur}
            autoComplete="given-name"
            className={`input  ${
              errors.firstName && touched.firstName
                ? "border-red-600 focus:ring-red-500"
                : "focus:ring-sky-600"
            } sm:text-sm sm:leading-6`}
          />
        </div>
      </div>

      <div className="w-[45%]">
        <label
          htmlFor="lastName"
          className={`font-semibold ${
            errors.lastName && touched.lastName ? "text-red-500" : "text-m"
          }`}
        >
          {errors.lastName && touched.lastName ? errors.lastName : "Last name"}
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            onBlur={handleBlur}
            autoComplete="family-name"
            className={`input  ${
              errors.lastName && touched.lastName
                ? "border-red-600 focus:ring-red-500"
                : "focus:ring-sky-600"
            } sm:text-sm sm:leading-6`}
          />
        </div>
      </div>

      <div className="w-[45%]">
        <label
          htmlFor="phoneNumber"
          className={`font-semibold ${
            errors.phoneNumber && touched.phoneNumber
              ? "text-red-500"
              : "text-m"
          }`}
        >
          {errors.phoneNumber && touched.phoneNumber
            ? errors.phoneNumber
            : "Phone Number"}
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`input  ${
              errors.phoneNumber && touched.phoneNumber
                ? "border-red-600 focus:ring-red-500"
                : "focus:ring-sky-600"
            } sm:text-sm sm:leading-6`}
          />
        </div>
      </div>

      <div className="w-[45%]">
        <label
          htmlFor="email"
          className={`font-semibold ${
            errors.email && touched.email ? "text-red-500" : "text-m"
          }`}
        >
          {errors.email && touched.email ? errors.email : "Email address"}
        </label>
        <div className="mt-2">
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            autoComplete="email"
            className={`input  ${
              errors.email && touched.email
                ? "border-red-600 focus:ring-red-500"
                : "focus:ring-sky-600"
            } sm:text-sm sm:leading-6`}
          />
        </div>
      </div>
    </div>
  </>
);

export default PersonalInformation;
