"use client";
import React, { useState } from "react";

const ShowMoreShowLess = ({ items }) => {
  const [showMore, setShowMore] = useState(false);

  const renderGridItem = (item, index) => (
    <div key={index} className="py-2 flex w-full">
      <p className={`text text-left w-full`}>{item.title}</p>
      <p className="text font-bold text-left w-full">{item.data}</p>
    </div>
  );

  const renderGridItems = () =>
    showMore
      ? items.map(renderGridItem)
      : items.slice(0, 2).map(renderGridItem);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-center w-2/3">
        {renderGridItems()}
      </div>
      <div
        onClick={() => setShowMore(!showMore)}
        className="text-left text-bluePrimary mt-6 text font-bold underline cursor-pointer"
      >
        {showMore ? "Show Less...." : "Show More...."}
      </div>
    </div>
  );
};

export default ShowMoreShowLess;
