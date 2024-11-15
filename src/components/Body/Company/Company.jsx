import React from "react";
import {
  com2col,
  com2col1,
  company,
  company2,
  company3,
} from "../../../assets/image";

const Company = () => {
  return (
    <>
      <div className="max-w-[100%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] lg:w-[80%] gap-10 mx-auto py-[40px]">
          <div className="flex flex-col gap-10">
            <div className="relative">
              <div className="absolute left-0 top-0 z-30">
                <img src={company} alt="" />
              </div>
              <div className=" absolute left-10 z-20">
                <img src={company2} alt="" />
              </div>
              <div className=" absolute left-20 z-10">
                <img src={company3} alt="" />
              </div>
            </div>
            <div className="pt-10">
              <p className="font-[Poppins] text-[20px] text-[#259AF3] font-medium">
                Questions, Community & Contests
              </p>
            </div>
            <div>
              <p className="font-[Poppins] text-[14px] leading-9">
                Over 3550 questions for you to practice. Come and join one of
                the largest tech communities with hundreds of thousands of
                active users and participate in our contests to challenge
                yourself and earn rewards.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="relative">
              <div className="absolute left-0 top-0 z-30">
                <img src={com2col} alt="" />
              </div>
              <div className=" absolute left-10 z-20">
                <img src={com2col1} alt="" />
              </div>
            </div>
            <div className="pt-10">
              <p className="font-[Poppins] text-[20px] text-[#B7892B]">
                Companies & Candidates
              </p>
            </div>
            <div>
              <p className="font-[Poppins] text-[14px] leading-9">
                Not only does LeetCode prepare candidates for technical
                interviews, we also help companies identify top technical
                talent. From sponsoring contests to providing online assessments
                and training, we offer numerous services to businesses.
              </p>
            </div>
            <div>
              <button className="py-2 px-4 rounded-lg font-medium bg-[#014BAE] text-white font-[Poppins]">
              Business Opportunities 
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
