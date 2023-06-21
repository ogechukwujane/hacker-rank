import React from "react";
import intervieww_image from "../../../assets/interview1.png";
import { developmentTools, socialApps } from "../../../constants";
import { CustomButton } from "../../customButton";

export const MainBottom = () => {
  return (
    <div className="max-w-auto mx-auto px-5 sm:px-10 flex flex-col gap-20">
      <div>
        <div className="flex justify-between items-center my-5">
          {developmentTools.map((tool) => (
            <img src={tool} key={tool} width={30} className="lg:w-[70px]" />
          ))}
        </div>
        <div>
          <img src={intervieww_image} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light">
              Every company is a tech company.
            </h2>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light py-2 text-green-600">
              We’re here to help ‘em all.
            </h2>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-light max-w-3xl mt-5 text-gray-500">
              More than 3,000 tech teams, representing all industries and from
              countries around the world, trust HackerRank to connect with
              developers and add cutting-edge skills to their teams.
            </p>
            <p className="text-xl sm:text-2xl font-light max-w-3xl mt-5 text-gray-500">
              That includes 25% of the Fortune 100 — and that moonshot startup
              that just came out of stealth.
            </p>
          </div>
        </div>
        <div className="bg-[#f7fcff] lg:w-[30em] lg:h-96"> fkjfdhnm</div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {socialApps.map((app) => (
          <img src={app} alt="social apps" width={100} key={app} />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-16 py-10">
        <div className="flex flex-col sm:gap-4 lg:py-20 lg:pr-20 lg:w-[50%]">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light">
            Practice coding challenges &{" "}
            <span className="text-green-600">prep for interviews</span>
          </h2>
          <p className="text-xl sm:text-2xl font-light max-w-3xl mt-5 text-gray-500">
            Start practicing your skills now and land the job of your dreams.
          </p>
          <CustomButton
            title="Join the community"
            buttonStyle="bg-green-700 w-[100%] sm:w-[15em] text-lg font-medium text-white mt-5"
          />
        </div>
        <div className="flex flex-col sm:gap-4 lg:bg-gray-100 lg:py-20 lg:px-10 lg:w-[50%]">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light">
            Get started{" "}
            <span className="text-green-600">hiring with HackerRank</span>
          </h2>
          <p className="text-xl sm:text-2xl font-light max-w-3xl mt-5 text-gray-500">
            More than 3,000 tech teams, representing all industries and from
            countries around the world, trust HackerRank
          </p>
          <CustomButton
            title="Request a demo"
            buttonStyle="bg-green-700 w-[100%] sm:w-[15em] text-lg font-medium mt-5 text-white"
          />
        </div>
      </div>
    </div>
  );
};
