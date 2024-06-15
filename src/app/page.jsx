import ImageCarousel from "@/components/Carousel/ImageCarousel";
import SearchFilter from "@/components/SearchFilter/SearchFilter";

const images = [
  {
    title: "HomePage Image 1",
    Url: "/static/images/homePage1.png",
  },
  {
    title: "HomePage Image 2",
    Url: "/static/images/homePage2.png",
  },
  {
    title: "HomePage Image 3",
    Url: "/static/images/homePage3.png",
  },
  {
    title: "HomePage Image 4",
    Url: "/static/images/homePage4.png",
  },
  {
    title: "HomePage Image 5",
    Url: "/static/images/homePage5.png",
  },
];

export default function Home() {
  return (
    <main>
      <center className="w-full h-fit ">
        {" "}
        <section className="relative w-full h-[95vh] flex items-center ">
          <div className="absolute w-full h-full">
            <ImageCarousel images={images} />
          </div>
          <div className="relative w-full h-full flex justify-center xl:justify-center items-center flex-col xl:space-y-4 py-10 xl:py-40 px-4 xl:px-[10%]">
            <h1 className="text-pretty xl:text-center Title text-white xl:my-4">
              Discover Your Dream Home Today
            </h1>
            <p className="text text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at
              voluptatum, corporis aliquam temporibus, molestiae eius mollitia
              totam, voluptas omnis dignissimos quod. Impedit alias velit modi
              omnis temporibus ex nam.
            </p>
          </div>
          <div className="absolute left-0 top-[78vh] xl:top-[80vh] flex flex-col items-center justify-center h-fit space-y-0 w-full">
            <SearchFilter />
          </div>
        </section>
      </center>
    </main>
  );
}
