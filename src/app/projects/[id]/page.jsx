import getData from "@/fetchHook/datafetch";
import React from "react";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import Link from "next/link";

const Plotdetails = async ({ params }) => {
  const Name = decodeURIComponent(params.id);
  const products = await getData();

  const propertyData = products.Properties.find((property) => {
    return Name === property.Name;
  });

  if (!propertyData)
    return <div className="Title w-full text-center py-4">Loading...</div>;

  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const {
    AskingPrice,
    Landmarks,
    Features: { Bedrooms, Bathrooms, Balconies, Kitchen },
    Amenities,
    CarpetArea,
    IsForRent,
    Furnished,
    SpecialFeatures,
    ExactLocation: { DistanceFromBusStop, DistanceFromSchool },
  } = propertyData;

  return (
    <main>
      <center className="w-full h-fit">
        <section className=" flex flex-col items-start mt-6 justify-center h-fit space-y-6 p-8 w-[80%] bg-cardHolderLight rounded-3xl ">
          <div className="flex flex-col text-left w-full">
            <h1 className="text-4xl font-medium">
              {formatter.format(AskingPrice)}
            </h1>
            <p className="text text-gray-500">Near {Landmarks.join(", ")}</p>
          </div>
          <div className="w-full flex justify-between space-x-6 h-fit border-b-2 border-gray-500">
            <ImageGallery />
            <div className="flex flex-col w-[50%] h-fit">
              <div className="w-full bg-gray-300 h-fit flex justify-start items-center rounded-xl py-10 px-4">
                {[
                  { label: "Bed", value: Bedrooms },
                  { label: "Bath", value: Bathrooms },
                  { label: "Balcony", value: Balconies },
                  { label: "Kitchen", value: Kitchen },
                ].map(({ label, value }, idx, arr) => (
                  <div
                    key={label}
                    className={`px-4 ${
                      idx < arr.length - 1 ? "border-r-2" : ""
                    } border-gray-600 flex text h-full items-center text-center`}
                  >
                    {value}
                    <span className="text-gray-500 mx-2">{label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-between py-12 px-2 w-full h-full gap-y-10">
                <div className="flex flex-col w-1/3 h-fit text-left">
                  <h1 className="text font-normal">Carpet Area</h1>
                  <h1 className="text font-bold">{CarpetArea} sq.ft</h1>
                </div>
                <div className="flex flex-col w-1/3 h-fit text-left">
                  <h1 className="text font-normal">Furnished</h1>
                  <h1 className="text font-bold">{`${
                    Furnished ? "Furnished" : "Unfurnished"
                  }`}</h1>
                </div>
                <div className="flex flex-col 1/3 h-fit text-left">
                  <h1 className="text font-normal">Rent/Sale</h1>
                  <h1 className="text font-bold">
                    {IsForRent ? "For Rent" : "For Sale"}
                  </h1>
                </div>
                <div className="flex flex-col w-1/3 h-fit text-left">
                  <h1 className="text font-normal">Carpet Area</h1>
                  <h1 className="text font-bold">{CarpetArea} sq.ft</h1>
                </div>
                <div className="flex flex-col w-1/3 h-fit text-left">
                  <h1 className="text font-normal">Furnished</h1>
                  <h1 className="text font-bold">{`${
                    Furnished ? "Furnished" : "Unfurnished"
                  }`}</h1>
                </div>
                <div className="flex flex-col 1/3 h-fit text-left">
                  <h1 className="text font-normal">Rent/Sale</h1>
                  <h1 className="text font-bold">
                    {IsForRent ? "For Rent" : "For Sale"}
                  </h1>
                </div>
                <div className="flex flex-col w-1/3 h-fit text-left">
                  <h1 className="text font-normal">Carpet Area</h1>
                  <h1 className="text font-bold">{CarpetArea} sq.ft</h1>
                </div>
                <div className="flex flex-col w-1/3 h-fit text-left">
                  <h1 className="text font-normal">Furnished</h1>
                  <h1 className="text font-bold">{`${
                    Furnished ? "Furnished" : "Unfurnished"
                  }`}</h1>
                </div>
                <div className="flex flex-col 1/3 h-fit text-left">
                  <h1 className="text font-normal">Rent/Sale</h1>
                  <h1 className="text font-bold">
                    {IsForRent ? "For Rent" : "For Sale"}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className=" bg-bluePrimary rounded-[30px] w-full md:w-fit  py-2 md:py-3 h-fit text-xl px-6 text-white"
          >
            Contact Owner
          </Link>
        </section>
      </center>
    </main>
  );
};

export default Plotdetails;
