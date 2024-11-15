import React from "react";
import { headerimg } from "../../assets/image";

const Header = () => {
  return (
    <>
      <div className="max-w-[100%] bg-[url(https://ik.imagekit.io/HoneyJoe/leet/leet%201.png?updatedAt=1731663861314)] h-screen bg-cover ">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto justify-center items-center py-16 lg:py-[150px]">
          <div>
            <img src={headerimg} alt="header img" />
          </div>
          <div className="flex flex-col justify-start items-center lg:gap-6">
            <div className=" md:pt-10 pt-5">
              <div className=" flex items-center justify-center gap-2 relative">
                <h1 className=" text-[26px] text-black text-center font-[Poppins] lg:text-[50px] font-bold lg:text-white md:text-[54px] text-nowrap">
                  Embark On A
                </h1>
                <div className="hidden md:block"></div>
              </div>
              <h1 className=" text-[26px] font-[Poppins] text-center lg:text-[50px] font-bold text-black lg:text-[#fff] md:text-[54px]">
                Transformative Learning <br className=" hidden xl:block" />
                Journey At<span className="text-[#1176f0]"> CODE GALATTA</span>
              </h1>
              <p className=" font-[Poppins] text-white pt-3 text-center">
                Discover a world of knowledge and opportunities with our online{" "}
                <br className="" /> education platform pursue a
                new career.
              </p>
            </div>
            <div>
                <button className="py-3 px-8 rounded-lg font-medium bg-[#014BAE] text-white font-[Poppins]">Explore All</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
