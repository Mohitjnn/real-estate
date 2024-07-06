"use client";

import { useState } from "react";
import PersonalInformation from "@/components/FormSteps/PersonalInformation";
import Address from "@/components/FormSteps/Address";
import Complete from "@/components/FormSteps/Complete";

const steps = [
  {
    id: "Step 1",
    name: "Personal Information",
    component: PersonalInformation,
  },
  {
    id: "Step 2",
    name: "Address",
    component: Address,
  },
  { id: "Step 3", name: "Complete", component: Complete },
];

export default function Form() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    propertyType: "",
    location: "",
    expectedPrice: "",
    carpetArea: "",
    bedRooms: "",
    bathRooms: "",
    rentSell: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const next = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const StepComponent = steps[currentStep].component;

  return (
    <main>
      <center className="w-full h-fit space-y-8 mt-4">
        <h1 className="subHeading">
          List Your Property at <span className="font-semibold">RK ESTATE</span>
        </h1>
        <section className="w-[80vw]">
          <form
            className="bg-white py-8 w-full rounded-xl"
            style={{ boxShadow: "0px 0px 11px 0px lightgray" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <nav aria-label="Progress">
              <ol
                role="list"
                className="space-y-4 md:flex justify-between px-8 md:space-y-0 md:space-x-8"
              >
                <h1 className="text-gray-700 text">
                  Step {currentStep + 1} of {steps.length}
                </h1>
                <div className="flex space-x-4">
                  {steps.map((step, stepIdx) => (
                    <li
                      className={`block h-[0.5vh] w-[7vh] ${
                        stepIdx === currentStep
                          ? "bg-sky-600"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </ol>
            </nav>

            <div className="mt-10">
              <StepComponent
                formData={formData}
                handleInputChange={handleInputChange}
              />
            </div>
          </form>
          <div className="mt-10 flex justify-end gap-x-6">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={prev}
                className="rounded-md bg-white px-12 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Back
              </button>
            )}
            {currentStep < steps.length - 1 && (
              <button
                type="button"
                onClick={next}
                className="rounded-md bg-sky-900 px-12 py-2 text-sm text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-60"
              >
                Next
              </button>
            )}
            {currentStep === steps.length - 1 && (
              <button
                type="submit"
                className="rounded-md bg-sky-900 px-12 py-2 text-sm text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Submit
              </button>
            )}
          </div>
        </section>
      </center>
    </main>
  );
}
