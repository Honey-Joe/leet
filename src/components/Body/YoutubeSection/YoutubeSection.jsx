import React from "react";

const YoutubeSection = () => {
  return (
    <>
      <div className="max-w-[100%]">
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 py-[40px] items-center">
          <div className="flex flex-col gap-7">
            <div>
              <p className="font-[Poppins] text-start text-[36px] text-[] font-medium">
                Practice Coding Chalenges & <br /><span className="text-[#014BAE]">prep for the interviews</span> 
              </p>
            </div>
            <div>
              <p className="font-[Poppins] text-start text-[18px]">
                Start practicing your skill now and land the job <br /> of your
                dreams
              </p>
            </div>
            <div>
              <button className="px-5 py-2 rounded-md bg-[#014BAE] font-[Poppins] text-white font-medium">
                {" "}
                Join the Community
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="shadow-lg px-3 py-3 rounded-lg flex justify-center w-[100%]">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/gsG7uj9-4Jo?si=iGyYHzopyGcagdUJ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YoutubeSection;
