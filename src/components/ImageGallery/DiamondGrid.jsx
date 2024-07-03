import Image from "next/image";

const DiamondGrid = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <ul className="absolute left-0 w-full h-fit ">
        <li className="diamond -top-5 -left-10 w-[20vh] h-[20vh] bg-gray-300" />
        <li className="diamond -top-[20vh] left-[20vh] w-[42vh] h-[42vh]">
          <Image
            src="/static/images/founderImage.png"
            fill={true}
            className="object-contain -rotate-45 scale-[210%]"
          />
        </li>
        <li className="diamond top-[20vh] left-[5vh] h-[32vh] w-[32vh]">
          <Image
            src="/static/images/founderImage2.png"
            fill={true}
            className="object-contain -rotate-45 scale-[210%]"
          />
        </li>
        <li className="diamond top-[35vh] left-[40vh] h-[12vh] w-[12vh] bg-blue-500" />
        <li className="diamond top-[15vh] left-[50vh] h-[28vh] w-[28vh]">
          <Image
            src="/static/images/founderImage.png"
            fill={true}
            className="object-contain -rotate-45 scale-[210%]"
          />
        </li>
        <li className="diamond -top-[28vh] left-[68vh] h-[12vh] w-[12vh] bg-bluePrimary " />
        <li className="diamond -top-[10vh] left-[75vh] h-[38vh] w-[38vh]">
          <Image
            src="/static/images/founderImage2.png"
            fill={true}
            className="object-contain -rotate-45 scale-[210%]"
          />
        </li>
        <li className="diamond top-[28vh] left-[80vh] h-[12vh] w-[12vh] bg-blue-800" />
      </ul>
    </div>
  );
};

export default DiamondGrid;
