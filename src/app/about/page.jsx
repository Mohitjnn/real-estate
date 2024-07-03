import DataCarousel from "@/components/Carousel/DataCarousel";
import HomeSearchFilter from "@/components/SearchFilter/HomeSearchFilter";
import { localData } from "@/fetchHook/datafetch";
import AutoScrollingImages from "@/components/Carousel/AutoScrollImages";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import Image from "next/image";
import DiamondGrid from "@/components/ImageGallery/DiamondGrid";

export default async function AboutUsPage() {
  const data = await localData();

  if (!data) {
    return <div className="Title w-full text-center py-4">Loading...</div>;
  }

  const { images, avatarImages, comments = [] } = data;

  return (
    <main>
      <center className="w-full h-fit">
        <section className="relative w-full h-[70vh] flex items-center">
          <div className="absolute w-full h-full">
            <ImageCarousel images={images} />
          </div>
          <div className="relative w-full h-full flex justify-center xl:justify-center items-center flex-col space-y-4 xl:py-40 px-4 xl:px-[10%]">
            <h1 className="text-pretty xl:text-center Title text-white xl:my-4">
              About Us
            </h1>
            <p className="text-m lg:text text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at
              voluptatum, corporis aliquam temporibus, molestiae eius mollitia
              totam, voluptas omnis dignissimos quod. Impedit alias velit modi
              omnis temporibus ex nam.
            </p>
          </div>
        </section>
        <section className="w-full flex flex-col justify-center py-20">
          <h1 className="Heading w-full flex flex-col text-center">
            <span className="Title font-extrabold text-bluePrimary">
              Trust Us
            </span>
            To Find you the Perfect Home
          </h1>
          <div className="flex px-16 py-6 w-full h-full space-x-8 items-center justify-between">
            <div className="relative w-[50%] h-[75vh]">
              <Image
                className="rounded-xl"
                src={images[0].Url}
                fill={true}
                alt="Image 0"
              />
            </div>
            <div className="flex flex-col h-full w-[50%] px-4 space-y-8">
              <div className="h-[35vh] w-full relative">
                <Image
                  className="object-cover rounded-xl"
                  fill={true}
                  src={images[1].Url}
                  alt="Image 1"
                />
              </div>
              <div className="h-[35vh] w-full relative">
                <Image
                  className="object-cover rounded-xl"
                  fill={true}
                  src={images[2].Url}
                  alt="Image 2"
                />
              </div>
            </div>
          </div>
          <div className="Heading w-full text-center mb-[15vh]">
            Where You
            <span className="text-blue-950 px-4">ALWAYS</span>
            Come First
          </div>
        </section>
        <section className="flex w-full justify-between items-center py-4">
          <DiamondGrid />
          <div className="w-full text-left flex flex-col px-16 space-y-4">
            <h1 className="Title text-bluePrimary ">The Founders</h1>
            <p className="text-gray-700 text w-fit ml-24">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown.Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknown.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown
            </p>
          </div>
        </section>
      </center>
    </main>
  );
}
