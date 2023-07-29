export default function loginBox() {
  return (
    <div className="bg-gray-200 h-screen flex items-center  ">
      <div className="  border-2 border-white w-72 h-[400px] mt-44 ml-96 bg-white rounded-lg shadow-xl">
        <div className="flex justify-center mt-40">
          <button className="border-2 border-white w-56 h-11 bg-blue-600 text-white rounded-md hover:bg-white hover:text-blue-500">
            {" "}
            Login
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <button className="border-2 border-blue-400 w-56 h-11 text-blue-600 rounded-md  hover:bg-blue-600 hover:text-white">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}
