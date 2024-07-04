import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ item }) => {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <Link
      href={`/projects/${item.Name}`}
      className="flex lg:flex-row flex-col h-fit justify-between items-center w-full rounded-xl bg-white p-6"
    >
      <div className="flex flex-col lg:flex-row w-full lg:space-x-8">
        <div className="w-full lg:w-[25%] h-[25vh] relative">
          <Image
            src={
              item.images ? item.images[0].url : "/static/images/homePage4.png"
            }
            fill={true}
            alt="images"
            className="object-cover rounded-xl"
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-xl lg:text-3xl w-full font-medium mt-4">
            {item.Name}
          </h2>
          <p className="text  text-gray-500">
            {item.SpecialFeatures?.join(", ")}
          </p>
        </div>
      </div>
      <p className="text py-4 font-bold text-start h-full content-start">
        {formatter.format(item.AskingPrice)}
      </p>
    </Link>
  );
};

export default ProjectCard;
