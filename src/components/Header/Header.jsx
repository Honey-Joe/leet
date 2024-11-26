import React from "react";
import { headerimg, headerimg2, headerimg3 } from "../../assets/image";

const Header = () => {
  return (
    <>
      <style></style>
      <div className="max-w-[100%]">
        <div className="w-[95%] lg:w-[90%]  grid grid-cols-1 lg:grid-cols-2 mx-auto mt-[100px] mb-12 rounded-lg p-10 gap-6 bg-gradient-to-t to-[#F4F9FF] from-[#A4CBFF] ">
          <div className="border-[15px] border-white rounded- rounded-lg shadow-[0px_1px_4px_0px_#00000040] order-2 lg:order-1">
            <div className="p-5 rounded-lg">
              <img src={headerimg} alt="" className="w-[90%]" />
            </div>
          </div>
          <div className="flex flex-col justify-evenly lg:gap-0 gap-5 items-center order-1 lg:order-2">
            <p className="font-[Poppins] text-[20px] lg:text-[26px] font-bold text-center">
              Embark On A <br className="hidden lg:block" /> Transformative
              Learning Journey <br className="hidden lg:block" /> At CODE
              GALATTA
            </p>
            <p className="font-[Poppins] text-[14px] lg:text-[16px] text-center">
              Discover a world of knowledge and opportunities with our online
              education platform pursue a new career
            </p>
            <button className="bg-[#014BAE] font-[Poppins] text-white px-5 py-2 rounded-lg">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
