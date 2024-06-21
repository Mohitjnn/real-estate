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
    type: "multifetch",
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
                          src={
                            item.images
                              ? item.images[0].url
                              : "/static/images/homePage4.png"
                          }
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
                <div className="relative w-full py-4">
                  <div className="w-full flex justify-between items-start">
                    <h1 className="subHeading">New Buildings</h1>
                    <Link
                      href="/upcomingprojects"
                      className="text-2xl font-semibold text-blue-600"
                    >
                      View All &gt;
                    </Link>
                  </div>
                  <div className="flex items-center justify-between h-fit space-x-6 py-6 w-full rounded-b-3xl">
                    {[...Array(4)].slice(0, 3).map((item, i) => (
                      <div
                        className="flex flex-col h-fit items-center w-[25vw] rounded-xl bg-cardHolderLight"
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
                          <h2 className="text-xl text-center w-full font-bold mt-4">
                            Card{i}
                          </h2>
                          <p className="text-m text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nemo sint obcaecati dolorem voluptates
                            quibusdam aspernatur, facilis quo provident aliquam
                            pariatur reprehenderit omnis molestiae ipsum et
                            voluptatem possimus, eius cupiditate ipsa.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
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
