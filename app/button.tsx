import { VideoIcon } from "lucide-react";
export default function button() {
  return (
    <div className="flex justify-center mt-56 bg-gray-200 p-10 ">
      <div className="flex items-center border-2 border-white w-66 h-18 rounded-lg bg-white  shadow-2xl">
        <VideoIcon className="bg-pink-600 ml-3 w-10 h-8  " />
        <h3 className=" text-center font-bold  mt-3 ml-4 p-4">
          Video Confrence
        </h3>
      </div>
    </div>
  );
}
