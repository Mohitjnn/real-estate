import ImageCarousel from "@/components/Carousel/ImageCarousel";
import TextCarousel from "@/components/Carousel/TextCarousel";
import Image from "next/image";
import DataCarousel from "@/components/Carousel/DataCarousel";
import HomeSearchFilter from "@/components/SearchFilter/HomeSearchFilter";
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

const avatarImages = [
  {
    title: "avatarImage Image 1",
    Url: "/static/images/avatarImage1.png",
  },
  {
    title: "avatarImage Image 2",
    Url: "/static/images/avatarImage2.png",
  },
  {
    title: "avatarImage Image 3",
    Url: "/static/images/avatarImage3.png",
  },
  {
    title: "avatarImage Image 4",
    Url: "/static/images/avatarImage4.png",
  },
];

export default function Home() {
  return (
    <main>
      <center className="w-full h-fit">
        <section className="relative w-full h-[95vh] flex items-center">
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
            <HomeSearchFilter />
          </div>
        </section>
        <section className="relative w-full h-fit flex flex-col mt-32 mb-20 px-8 space-y-8">
          <h1 className="Title text-bluePrimary">Worked With</h1>
          <div className="flex flex-row w-full justify-center h-full">
            {images.map((image) => (
              <div
                key={image.title}
                className="group relative w-[20vh] h-[60vh] mx-3 transition-all duration-500 ease-in-out hover:w-[70vh]"
              >
                <Image
                  src={image.Url}
                  fill={true}
                  alt={image.title}
                  className="object-cover rounded-3xl"
                />
              </div>
            ))}
          </div>
          <p className="w-fit text-2xl font-extralight text-justify mx-8 py-10 border-b-2 border-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In ducimus,
            ab aut corrupti non atque explicabo optio! Error labore ad quos
            maiores accusantium eius vero magni? Sequi nihil consectetur eius
            numquam, modi quidem odio quod beatae! Odio distinctio nisi quae
            nostrum aliquam. Laboriosam itaque perferendis ab quos fugiat aut
            commodi!
          </p>
          <div className="flex flex-row justify-between px-10">
            <div className="flex flex-row space-x-8 items-center">
              <div className="flex flex-row -space-x-6">
                {avatarImages.map((avatarImage, index) => (
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
              <TextCarousel />
            </div>
            <div className="flex items-center w-[25%] text-left space-x-3">
              <div className="flex w-fit h-fit items-center space-x-3">
                <div className="subHeading font-extrabold">100+</div>
                <div className="text-m text-gray-500 font-bold ">
                  Happy Customers
                </div>
              </div>
              <div className="flex w-fit h-fit items-center space-x-3">
                <div className="subHeading font-extrabold">50+</div>
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
