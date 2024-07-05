import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard2 = ({ item, i }) => {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <Link
      className="flex flex-col h-[57vh] items-center w-full md:w-1/2 lg:w-[27vw] rounded-xl bg-cardHolderLight"
      href={`/projects/${item.Name}`}
    >
      <div className="w-full h-[40vh] relative">
        <Image
          src="/static/images/homePage4.png"
          fill={true}
          alt="images"
          className="object-cover rounded-xl"
        />
      </div>
      <div className="py-4 px-3 w-full">
        <h1 className="text-3xl text-left w-full font-semibold">
          {formatter.format(item.AskingPrice)}
        </h1>
        <h1 className="text-xl text-left text-gray-500 w-full ">
          {item.Landmarks.join(", ")}
        </h1>
      </div>
    </Link>
  );
};

export default ProjectCard2;
