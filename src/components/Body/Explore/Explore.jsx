import { explore, explore1 } from "../../../assets/image";

const Explore = () => {
  return (
    <>
      <div className="max-w-[100%]">
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:w-[80%] lg:grid-cols-2 gap-10 py-[100px]">
          <div className="flex flex-col gap-8 items-end">
            <div className="flex gap-5 justify-center items-center">
              <div>
                <p className="font-[Poppins] text-[18px] ">Start Exploring</p>
              </div>
              <div>
                <img src={explore} alt="explore" />
              </div>
            </div>

            <div>
              <p className="text-end font-[Poppins] text-base  leading-9">
                Explore is a well-organized tool that helps you get the most out
                of LeetCode by providing structure to guide your progress
                towards the next step in your programming career.
              </p>
            </div>
            <div>
              <button className="py-3 px-8 rounded-lg font-medium bg-[#014BAE] text-white font-[Poppins]">
                Explore All
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={explore1} alt="imagfe" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
