import React from "react";
import { CustomButton } from "..";
import { headerLinks } from "../../constants";
import hacker_rank_logo from "../../assets/hackerrank_logo-Pride.gif";

export const AppHeader = () => {
  return (
    <div className="flex justify-between items-center">
      {/* <div className="w-full py-5 flex justify-between items-center"> */}
        <div className="w-[150px]">
          <img src={hacker_rank_logo} alt="hacker_rank_logo" width={"100%"} />
        </div>
        <div className="flex gap-10">
          {headerLinks.map((link) => (
            <p
              key={link}
              className="text-base font-medium hover:text-green-600"
            >
              {link}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className=" px-3 border-r-2 border-gray-300">
            <p className="hover:text-green-600 font-medium">For Candidates</p>
          </div>
          <div className="flex gap-2">
            <CustomButton
              title="Request Demo"
              buttonStyle="bg-gray-100 font-medium"
            />
            <CustomButton
              title="Sign Up"
              buttonStyle="bg-green-700 font-medium text-white"
            />
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};
