import Image from "next/image";

const DiamondGrid = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <ul className="absolute left-0 w-full h-fit  ">
        <li className="diamond -top-5 left-[2vh] lg:-left-10 w-[8vh] h-[8vh] lg:w-[20vh] lg:h-[20vh] bg-gray-300" />
        <li className="diamond -top-[12vh] lg:-top-[20vh] left-[10vh] lg:left-[20vh] w-[18vh] h-[18vh] lg:w-[42vh] lg:h-[42vh]">
          <Image
            src="/static/images/founderImage.png"
            fill={true}
            className="object-contain -rotate-45 scale-[210%]"
          />
        </li>
        <li className="diamond top-[6vh] lg:top-[20vh] left-[7vh] lg:left-[5vh] h-[12vh] w-[12vh] lg:h-[32vh] lg:w-[32vh]">
          <Image
            src="/static/images/founderImage2.png"
            fill={true}
            className="object-contain -rotate-45 scale-[210%]"
          />
        </li>
        <li className="diamond top-[12vh] left-[20vh] lg:top-[35vh] lg:left-[40vh] h-[5vh] w-[5vh] lg:h-[12vh] lg:w-[12vh] bg-blue-500" />
        <li className="diamond top-5 lg:top-[15vh] left-[22vh] lg:left-[50vh] h-[12vh] lg:h-[28vh] w-[12vh] lg:w-[28vh]">
          <Image
            src="/static/images/founderImage.png"
            fill={true}
            className="object-contain -rotate-45 scale-[210%]"
          />
        </li>
        <li className="diamond -top-[14vh] lg:-top-[28vh] left-[30vh] lg:left-[68vh] h-[5vh] w-[5vh] lg:h-[12vh] lg:w-[12vh] bg-bluePrimary " />
        <li className="diamond -top-[8vh] lg:-top-[10vh] left-[33vh] lg:left-[75vh] h-[21vh] w-[21vh] lg:h-[38vh] lg:w-[38vh]">
          <Image
            src="/static/images/founderImage2.png"
            fill={true}
            className="object-contain -rotate-45 scale-[210%]"
          />
        </li>
        <li className="diamond top-[8vh] lg:top-[28vh] left-[35vh] lg:left-[80vh] h-[5vh] w-[5vh] lg:h-[12vh] lg:w-[12vh] bg-blue-800" />
      </ul>
    </div>
  );
};

export default DiamondGrid;
