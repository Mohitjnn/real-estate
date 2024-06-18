"use client";
import ProjectSearchFilter from "@/components/SearchFilter/ProjectSearchFilter";
import Image from "next/image";
import Link from "next/link";
import { useFilteredData } from "@/functions/Filter";
import { useEffect, useState } from "react";

const Page = (context) => {
  const { location, bedrooms, minPrice, maxPrice, isForRent } =
    context.searchParams;

  const initialFilters = {
    location: location || "Andheri",
    bedrooms: bedrooms ? parseInt(bedrooms) : 1,
    minPrice: minPrice ? parseInt(minPrice) : 0,
    maxPrice: maxPrice ? parseInt(maxPrice) : 99999999,
    isForRent: isForRent === "true",
  };

  const { filters, setFilters, handleFilterChange, filteredData } =
    useFilteredData(initialFilters);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (filteredData.length > 0) {
      setDataLoaded(true);
    }
  }, [filteredData]);

  return (
    <main>
      <center className="w-full h-fit">
        <section className="relative w-full h-[50vh] flex flex-col justify-start text-left bg-bluePrimary rounded-b-[8vh] p-8">
          <div className="flex flex-col py-16 px-4 w-full h-full">
            <h1 className="Heading text-white my-4">Search In</h1>
            <ProjectSearchFilter
              filters={filters}
              setFilters={setFilters}
              handleFilterChange={handleFilterChange}
            />
            {dataLoaded && (
              <>
                <div className="flex flex-col items-center justify-center h-fit space-y-6 p-8 w-full bg-cardHolderLight rounded-b-3xl">
                  <h1 className="subHeading text-left w-full">Best Options</h1>
                  {filteredData.slice(0, 3).map((item, i) => (
                    <Link
                      href={`/projects/${item.Name}`}
                      className="flex h-fit justify-between items-center w-full rounded-xl bg-white p-6"
                      key={i}
                    >
                      <div className="w-[30%] h-[20vh] relative">
                        <Image
                          src={item.image || "/static/images/homePage4.png"}
                          fill={true}
                          alt="images"
                          className="object-cover rounded-xl border-2 border-gray-500"
                        />
                      </div>
                      <div className="text-content">
                        <h2 className="text-xl text-center w-full font-bold mt-4">
                          {item.Name}
                        </h2>
                        <p className="text-m text-center">
                          {item.SpecialFeatures?.join(", ")}
                        </p>
                        <p className="text-m text-center">{item.AskingPrice}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                {filteredData.length > 3 && (
                  <div className="flex flex-col items-center justify-center h-fit space-y-6 p-8 w-full bg-cardHolderLight rounded-3xl">
                    {filteredData.slice(3).map((item, i) => (
                      <Link
                        href={`/projects/${item.Name}`}
                        className="flex h-fit items-center w-full rounded-xl bg-white p-6"
                        key={i}
                      >
                        <div className="w-[60%] h-[20vh] relative">
                          <Image
                            src={item.image || "/static/images/homePage4.png"}
                            fill={true}
                            alt="images"
                            className="object-cover rounded-xl border-2 border-gray-500"
                          />
                        </div>
                        <div className="text-content">
                          <h2 className="text-xl text-center w-full font-bold mt-4">
                            {item.Name}
                          </h2>
                          <p className="text-m text-center">
                            {item.SpecialFeatures?.join(", ")}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </center>
    </main>
  );
};

export default Page;
