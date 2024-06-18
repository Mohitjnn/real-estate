import getData from "@/fetchHook/datafetch";
import React from "react";
import ImageGallery from "@/components/ImageGallery/ImageGallery";

const Plotdetails = async ({ params }) => {
  const Name = decodeURIComponent(params.id);
  const products = await getData();

  const propertyData = products.Properties.find((property) => {
    return Name === property.Name;
  });

  if (!propertyData)
    return <div className="Title w-full text-center py-4">Loading...</div>;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  return (
    <main>
      <center className="w-full h-fit">
        <section className=" flex flex-col items-center mt-6 justify-center h-fit space-y-6 p-8 w-[80%] bg-cardHolderLight rounded-3xl">
          <div className="flex flex-col text-left w-full">
            <h1 className="text-4xl font-medium">
              {formatter.format(propertyData.AskingPrice)}
            </h1>
            <p className="text text-gray-500">
              Near {propertyData.Landmarks.join(", ")}
            </p>
          </div>
          <div className="w-full flex h-fit">
            <ImageGallery />
          </div>
        </section>
      </center>
    </main>
  );
};

export default Plotdetails;
