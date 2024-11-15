import React from "react";

const Footer = () => {
  return (
    <>
      <div className="max-w-[100%]">
        <div className=" w-full border-t-[1px] py-7 mt-24 border-[#000]">
          <div className=" 3xl:container w-[90%] xl:w-[80%] mx-auto">
            <div className=" lg:grid lg:grid-cols-2 grid-cols-1 flex flex-col items-center ">
              <div>
                <p className=" text-[#000] text-[18px] font-[poppins]">
                  Copyright © 2024 code galatta. All rights reserved.
                </p>
              </div>
              <div className=" ">
              <ul className='grid grid-cols-3 lg:grid-cols-5 lg:flex-row gap-5  lg:justify-end md:pt-3 lg:p-0 pt-4 text-[14px]'>
                  <li className=' text-[14px] flex items-center group'><div className=" w-0 h-1 rounded-lg bg-[#000] group-hover:w-4" id="move"></div> <a href="" className=" font-[poppins] font-medium group-hover:text-[#000] ">About</a></li>
                  <li className='  flex items-center group'><div className=" w-0 h-1 rounded-lg bg-[#000]  group-hover:w-4" id="move"></div><a href="" className=" font-[poppins] font-medium group-hover:text-[#000]"> Contact</a></li>
                  <li className='  flex items-center group'><div className=" w-0 h-1 rounded-lg bg-[#000] group-hover:w-4" id="move"></div><a href="" className=" font-[poppins] font-medium group-hover:text-[#000]">Help Center</a></li>
                  <li className='  flex items-center group'><div className=" w-0 h-1 rounded-lg bg-[#000] group-hover:w-4" id="move"></div><a href="" className=" font-[poppins] font-medium group-hover:text-[#000]"> Conditions</a></li>
                  <li className='  flex items-center group'><div className=" w-0 h-1 rounded-lg bg-[#000] group-hover:w-4" id="move"></div><a href="" className=" font-[poppins] font-medium group-hover:text-[#000]"> Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
