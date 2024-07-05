"use client";
import ProjectSearchFilter from "@/components/SearchFilter/ProjectSearchFilter";
import { useFilteredData } from "@/functions/Filter";
import ProjectCard from "@/components/cards/ProjectCard";
import { useState } from "react";
import ProjectCard2 from "@/components/cards/ProjectCard2";

const Page = (context) => {
  const { location, bedrooms, minPrice, maxPrice, isForRent } =
    context.searchParams;

  const initialFilters = {
    location: location || "Malad",
    bedrooms: bedrooms ? parseInt(bedrooms) : 1,
    minPrice: minPrice ? parseInt(minPrice) : 0,
    maxPrice: maxPrice ? parseInt(maxPrice) : 99999999,
    isForRent: isForRent === "true",
    type: "multifetch",
  };

  const { filters, setFilters, handleFilterChange, filteredData, error } =
    useFilteredData(initialFilters);

  const [isUpcoming, setIsUpcoming] = useState(true);

  const handleViewAllClick = () => {
    setIsUpcoming((prevState) => !prevState);
  };

  const filteredUpcomingData = filteredData.filter(
    (item) => item.upcoming === isUpcoming
  );

  const filteredNonUpcomingData = filteredData.filter(
    (item) => item.upcoming !== isUpcoming
  );

  return (
    <main>
      <center className="w-full h-fit">
        <section className="absolute top-0 w-full h-[50vh] flex flex-col justify-start text-left bg-bluePrimary rounded-b-[8vh] p-4 lg:p-8">
          <div className="flex flex-col py-16 lg:px-4 w-full h-full">
            <h1 className="Heading text-white my-4">Search In</h1>
            <ProjectSearchFilter
              filters={filters}
              setFilters={setFilters}
              handleFilterChange={handleFilterChange}
            />
            {filteredData ? (
              <>
                <div className="flex flex-col items-center justify-center h-fit space-y-6 pb-16 px-4 lg:px-16 w-full bg-cardHolderLight rounded-b-3xl">
                  <h1 className="Title lg:subHeading text-center lg:text-left w-full">
                    Best Options
                  </h1>
                  {filteredNonUpcomingData.slice(0, 3).map((item, i) => (
                    <ProjectCard item={item} key={i} />
                  ))}
                </div>
                <div className="relative w-full py-4">
                  <div className="w-full flex flex-col md:flex-row justify-between items-start">
                    <h1 className="Heading">
                      {isUpcoming
                        ? "View Upcoming Projects"
                        : "View Current Projects"}
                    </h1>
                    <button
                      onClick={handleViewAllClick}
                      className="text-2xl font-semibold text-blue-600"
                    >
                      View All &gt;
                    </button>
                  </div>
                  <div className="flex items-center flex-col lg:flex-row justify-start h-fit space-y-6 lg:space-y-0 lg:space-x-20 py-6 w-full rounded-b-3xl">
                    {filteredUpcomingData.slice(0, 3).map((item, i) => (
                      <ProjectCard2 item={item} key={i} />
                    ))}
                  </div>
                </div>
                {filteredNonUpcomingData.length > 3 && (
                  <div className="flex flex-col items-center justify-center h-fit space-y-6 p-8 w-full bg-cardHolderLight rounded-3xl">
                    {filteredNonUpcomingData.slice(3).map((item, i) => (
                      <ProjectCard item={item} key={i} />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <p className="text-white mt-4">{error}</p>
            )}
          </div>
        </section>
      </center>
    </main>
  );
};

export default Page;
