import Image from "next/image";
import pt1 from "../public/pt1.avif";
import pt2 from "../public/pt2.avif";

export default function page() {
  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <div className="  border-2 border-white bg-white  h-60 w-[460px] mt-40 rounded-lg flex flex-row shadow-xl ">
        <Image src={pt1} alt="" className=" w-20 h-14 m-4 "></Image>
        <div className="  w-[350px] h-28 mt-4 ">
          <h3 className=" font-bold text-md">Alexa Kardi</h3>
          <h3 className="text-gray-400  text-xs"> FOUNDER and CEO</h3>
          <p className="text-xs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Modi sit nihil eius
            optio iure nisi cum
          </p>


          <div className="flex items-center even:flex-row-reverse even:text-right ">
            <Image src={pt2} alt="" className="w-20 h-16 mt-10 m-4"></Image>

            <div className="  w-[350px] h-28 mt-4 ">
              <h3 className=" font-bold text-md">Bill Gates</h3>
              <h3 className="text-gray-400  text-xs"> FOUNDER and CEO</h3>
              <p className="text-xs text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Modi sit
                nihil eius optio iure nisi cum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
