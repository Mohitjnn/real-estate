import ImageCarousel from "@/components/Carousel/ImageCarousel";
import TextCarousel from "@/components/Carousel/TextCarousel";
import Image from "next/image";
import DataCarousel from "@/components/Carousel/DataCarousel";
import HomeSearchFilter from "@/components/SearchFilter/HomeSearchFilter";
import { localData } from "@/fetchHook/datafetch";
import AutoScrollingImages from "@/components/Carousel/AutoScrollImages";

export default async function Home() {
  const data = await localData();

  if (!data) {
    return <div className="Title w-full text-center py-4">Loading...</div>;
  }

  const { images, avatarImages, comments = [] } = data;

  return (
    <main>
      <center className="w-full h-fit">
        <section className="relative w-full h-[95vh] flex items-center">
          <div className="absolute w-full h-full">
            <ImageCarousel images={images} />
          </div>
          <div className="relative w-full h-full flex justify-center xl:justify-center items-center flex-col space-y-4 xl:py-40 px-4 xl:px-[10%]">
            <h1 className="text-pretty xl:text-center Title text-white xl:my-4">
              Discover Your Dream Home Today
            </h1>
            <p className="text-m lg:text text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at
              voluptatum, corporis aliquam temporibus, molestiae eius mollitia
              totam, voluptas omnis dignissimos quod. Impedit alias velit modi
              omnis temporibus ex nam.
            </p>
          </div>
          <div className="absolute left-0 top-[78vh] md:top-[76vh] lg:top-[84vh] xl:top-[80vh] flex flex-col items-center justify-center h-fit space-y-0 w-full">
            <HomeSearchFilter />
          </div>
        </section>
        <section className="relative w-full h-fit flex flex-col mt-32 mb-20 px-6 lg:px-8 lg:space-y-8">
          <AutoScrollingImages images={images} />
          <p className="w-fit text-m lg:text-2xl font-extralight text-justify lg:mx-8 py-10 border-b-2 border-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In ducimus,
            ab aut corrupti non atque explicabo optio! Error labore ad quos
            maiores accusantium eius vero magni? Sequi nihil consectetur eius
            numquam, modi quidem odio quod beatae! Odio distinctio nisi quae
            nostrum aliquam. Laboriosam itaque perferendis ab quos fugiat aut
            commodi!
          </p>
          <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 justify-center lg:justify-between lg:px-10">
            <div className="flex flex-col lg:flex-row  space-y-4 lg:space-y-0 my-8 lg:my-0 lg:space-x-8 items-center">
              <div className="flex flex-row -space-x-6">
                {avatarImages &&
                  avatarImages.map((avatarImage, index) => (
                    <div
                      key={index}
                      className="relative w-[50px] h-[50px] rounded-full overflow-hidden"
                    >
                      <Image
                        src={avatarImage.Url}
                        fill={true}
                        className="object-cover"
                        alt={avatarImage.title}
                      />
                    </div>
                  ))}
              </div>
              <TextCarousel comments={comments} />
            </div>
            <div className="flex items-center justify-between w-full lg:w-[25%] text-center lg:text-left space-x-3">
              <div className="flex flex-col lg:flex-row w-full h-fit items-center space-x-3 ">
                <div className="xl:subHeading font-extrabold text ">100+</div>
                <div className="text-m text-gray-500 font-bold ">
                  Happy Customers
                </div>
              </div>
              <div className="flex flex-col lg:flex-row w-full h-fit items-center space-x-3">
                <div className="xl:subHeading text font-extrabold">50+</div>
                <div className="text-m text-gray-500 font-bold">
                  5 Star Reviews
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-fit px-4 lg:px-8  flex flex-col items-center  space-y-8 ">
          <h1 className="Title text-bluePrimary">Testimonials</h1>
          <DataCarousel Reasons={images} />
        </section>
      </center>
    </main>
  );
}
