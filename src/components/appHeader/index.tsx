import React from "react";
import { CustomButton } from "..";

export const AppHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="">Logo</div>
      <div>Links</div>
      <div className="flex items-center gap-4">
        <div className=" px-3 border-r-2 border-gray-300">
          <p className="">For Candidates</p>
        </div>
        <div className="flex gap-2">
          <CustomButton title="Request Demo" buttonStyle="bg-gray-100" />
          <CustomButton
            title="Sign Up"
            buttonStyle="bg-green-700 font-medium text-white"
          />
        </div>
      </div>
    </div>
  );
};
