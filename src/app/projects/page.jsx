import ProjectSearchFilter from "@/components/SearchFilter/ProjectSearchFilter";
import React from "react";

const page = () => {
  return (
    <main>
      <center className="w-full h-fit ">
        <section className="relative w-full h-[50vh] flex flex-col justify-start text-left bg-bluePrimary rounded-b-[8vh] p-8">
          <div className="flex flex-col py-16 px-4 space-y-3 w-full h-full">
            <h1 className="Heading text-white">Search In</h1>
            <ProjectSearchFilter />
          </div>
        </section>
      </center>
    </main>
  );
};

export default page;
