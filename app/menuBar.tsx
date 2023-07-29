import { Pencil } from "lucide-react";
import { Camera } from "lucide-react";
import { VideoIcon } from "lucide-react";
export default function menuBar() {
  return (
    <div className="bg-gray-400 ">
      <div className=" flex flex-row  justify-center mt-56 bg-gray-100 p-10 h-66  gap-14 w-[800px] ml-60 rounded-xl ">
        <div className=" border-2 border-white h-56 w-[250px] rounded-lg bg-white ">
          <div className="flex justify-center m-6">
            <VideoIcon className="bg-emerald-600 rounded-full p-2 w-10 h-10  " />
          </div>

          <h3 className="  text-center font-bold ">Photo Shoot</h3>

          <p className="mt-8  text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="  border-2 border-white h-56 w-[250px] rounded-lg bg-white">
          <div className="flex justify-center m-6">
            <Camera className="bg-emerald-600 rounded-full p-2 w-10 h-10 " />
          </div>
          <h3 className="  text-center  font-bold">Video Production</h3>
          <p className="mt-8  text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
        <div className=" border-2 border-white h-56 w-[250px] rounded-lg bg-white">
          <div className="flex justify-center m-6">
            <Pencil className="bg-emerald-600 rounded-full  p-2 w-10 h-10" />
          </div>

          <h3 className="  text-center font-bold">Digital Illustration</h3>
          <p className="mt-8  text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
