import React from "react";
import { headerimg, headerimg2, headerimg3 } from "../../assets/image";

const Header = () => {
  return (
    <>
      <div className="max-w-[100%]">
        <div className="w-[90%] lg:w-[80] grid grid-cols-1 lg:grid-cols-2 mx-auto pt-[100px] pb-12 gap-6">
          <div className="flex justify-center items-center order-2 lg:order-1 relative">
            <div className="p-4 rounded-lg bg-white border w-[70%] shadow-[0px_0px_10px_0px_#000]">
              <img src={headerimg} alt="header img" className="border inset-10 shadow-[0px_0px_10px_1px_#000] rounded-md p-3" />
            </div>
            <div className="absolute left-1 w-[25%] -bottom-12">
              <img src={headerimg2} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center order-1 lg:order-2 relative">
            <div>
              <p className="font-[Poppins] text-[20px] lg:text-[34px] text-center font-bold">Embark On A <br className="hidden lg:block" /> Transformative Learning <br className="hidden lg:block" /> Journey At CODE GALATTA</p>
            </div>
            <div>
              <p className="font-[Poppins] text-[14px] lg:text-[16px] text-center">Discover a world of knowledge and opportunities with our online education platform pursue a new career</p>
            </div>

            <div>
              <button className="font-[Poppins] px-6 py-3 rounded-lg bg-[#014BAE] text-white">EXPLORE ALL</button>
            </div>
            <div className="absolute right-1 w-[45%] -bottom-12">
              <img src={headerimg3} alt="" />
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
