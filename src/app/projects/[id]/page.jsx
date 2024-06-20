import getData from "@/fetchHook/datafetch";
import React from "react";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import Link from "next/link";
import Image from "next/image";
import ShowMoreShowLess from "@/components/cards/PersonalStats";

const Plotdetails = async ({ params }) => {
  const Name = decodeURIComponent(params.id);
  const singlepropertyData = {
    Name,
    type: "singleFetch",
  };
  const propertyData = await getData(singlepropertyData);

  if (!propertyData)
    return <div className="Title w-full text-center py-4">Loading...</div>;

  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const {
    AskingPrice,
    Location,
    Landmarks,
    Features: { Bedrooms, Bathrooms, Balconies, Kitchen },
    Amenities,
    CarpetArea,
    IsForRent,
    Furnished,
    SpecialFeatures,
    ExactLocation: { DistanceFromBusStop, DistanceFromSchool },
  } = propertyData;

  const similarProperty = {
    type: "similarFetch",
    Name,
    Location,
    AskingPrice,
    CarpetArea,
  };

  const similarProperties = await getData(similarProperty);

  const data = [
    { id: "1", title: "Price", data: formatter.format(AskingPrice) },
    { id: "2", title: "Carpet Area", data: `${CarpetArea} sq.Ft` },
    { id: "3", title: "Address", data: Landmarks.join(", ") },
    { id: "4", title: "Bedrooms", data: Bedrooms },
    { id: "5", title: "Bathrooms", data: Bathrooms },
    { id: "6", title: "Balconies", data: Balconies },
    { id: "7", title: "Rent or Buy", data: IsForRent ? "Rent" : "Buy" },
    {
      id: "8",
      title: "Furnished",
      data: Furnished ? "Furnished" : "Unfurnished",
    },
    { id: "9", title: "Distance from Bus-stop", data: DistanceFromBusStop },
    { id: "10", title: "Distance from School", data: DistanceFromSchool },
  ];

  const renderInfoBlocks = (items) =>
    items.map(({ label, value }) => (
      <div key={label} className="flex flex-col w-1/3 h-fit text-left">
        <h1 className="text font-normal">{label}</h1>
        <h1 className="text font-bold">{value}</h1>
      </div>
    ));

  const infoItems = [
    { label: "Carpet Area", value: `${CarpetArea} sq.ft` },
    { label: "Furnished", value: Furnished ? "Furnished" : "Unfurnished" },
    { label: "Rent/Sale", value: IsForRent ? "For Rent" : "For Sale" },
  ];

  return (
    <main>
      <center className="w-full h-fit">
        <section className="flex flex-col items-start mt-6 justify-center h-fit space-y-6 p-8 w-[90%] bg-cardHolderLight rounded-3xl">
          <div className="flex flex-col text-left w-full">
            <h1 className="text-4xl font-medium">
              {formatter.format(AskingPrice)}
            </h1>
            <p className="text text-gray-500">Near {Landmarks.join(", ")}</p>
          </div>
          <div className="w-full flex justify-between space-x-6 h-fit pb-12 border-b-2 border-gray-500">
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
                {renderInfoBlocks(infoItems)}
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="bg-bluePrimary rounded-[30px] w-full md:w-fit py-2 md:py-3 h-fit text-xl px-6 text-white"
          >
            Contact Owner
          </Link>
        </section>
        <section className="flex flex-col items-start mt-6 justify-center h-fit space-y-6 p-8 w-[90%] bg-cardHolderLight rounded-3xl">
          <h1 className="w-full subHeading font-medium text-left">
            More Details
          </h1>
          <ShowMoreShowLess items={data} />
        </section>
        <section className="flex flex-col items-start mt-6 justify-center h-fit space-y-6 p-8 w-[90%] bg-cardHolderLight rounded-3xl">
          <h1 className="w-full subHeading font-medium text-left">Amenities</h1>
          <div className="flex flex-col space-y-4">
            {Amenities.map((Amenity, index) => (
              <p className="text font-semibold text-left w-full" key={index}>
                • {Amenity}
              </p>
            ))}
          </div>
        </section>
        <section className="flex flex-col items-start mt-6 justify-center h-fit space-y-6 p-8 w-[90%] bg-cardHolderLight rounded-3xl">
          <h1 className="w-full subHeading font-medium text-left">
            Special Features
          </h1>
          {SpecialFeatures.map((Amenity, index) => (
            <p className="text font-semibold text-left w-full" key={index}>
              • {Amenity}
            </p>
          ))}
        </section>
        <section className="flex items-center justify-between h-fit space-x-6 py-6 w-[90%] rounded-b-3xl">
          {similarProperties.map((item, i) => (
            <Link
              className="flex flex-col h-fit items-center w-[25vw] rounded-xl bg-cardHolderLight"
              href={`/projects/${item.Name}`}
              key={i}
            >
              <div className="w-full h-[40vh] relative">
                <Image
                  src="/static/images/homePage4.png"
                  fill={true}
                  alt="images"
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="p-4">
                <h1 className="text-xl text-center w-full font-bold mt-4">
                  {formatter.format(item.AskingPrice)}
                </h1>
                <h1 className="text-lg text-center text-gray-500 w-full font-semibold mt-4">
                  {item.Landmarks.join(", ")}
                </h1>
              </div>
            </Link>
          ))}
        </section>
      </center>
    </main>
  );
};

export default Plotdetails;
