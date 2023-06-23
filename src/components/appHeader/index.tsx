"use client";

import React, { useRef, useState } from "react";
import { CustomButton } from "..";
import { headerLinks } from "../../constants";
import hacker_rank_logo from "../../assets/hackerrank_logo-Pride.gif";

export const AppHeader = () => {
  const myDivRef = useRef<HTMLDivElement>(null);
  const [shadow, setShadow] = useState(false);

  const addShadow = () => {
    const divRect = myDivRef.current?.getBoundingClientRect();
    const sticky = divRect?.top && divRect.top === 0;
    if (sticky) {
      setShadow(true);
    }
    // if (window.scrollY > 50) {
    //   setShadow(true);
    // } else {
    //   setShadow(false);
    // }
  };
  window.addEventListener("scroll", addShadow);

  return (
    <>
      <div className="bg-blue-200 h-10 hidden xl:block">
        <div className="flex justify-end items-center gap-5 max-w-auto mx-auto px-10 h-full">
          <p>home</p>
          <p>home</p>
        </div>
      </div>
      <div
        ref={myDivRef}
        className={`bg-white sticky top-0 z-20 ${
          shadow ? "shadow-xl" : "shadow-none"
        }`}
      >
        <div className="flex justify-between items-center py-4 max-w-auto mx-auto px-5 sm:px-10">
          {/* <div className="w-full py-5 flex justify-between items-center"> */}
          <div className="w-[130px] sm:w-[150px]">
            <img src={hacker_rank_logo} alt="hacker_rank_logo" width={"100%"} />
          </div>
          <div className="hidden xl:flex gap-10">
            {headerLinks.map((link) => (
              <p
                key={link}
                className="text-base font-medium hover:text-green-600"
              >
                {link}
              </p>
            ))}
          </div>
          <div className="hidden xl:flex items-center gap-4">
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
      </div>
    </>
  );
};
