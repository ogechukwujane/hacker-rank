import React from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "../../constants";

export const AppFooter = () => {
  return (
    <div  className="max-w-auto mx-auto px-5 sm:px-10">
      <div className="flex flex-col sm:flex-row  flex-wrap justify-between gap-3">
        {footerLinks.map(({ title, links }) => (
          <div key={title.name}>
            {/* <Link to={title.url}> */}
            <h4 className="text-base font-medium tracking-[0.5em] my-6 text-gray-400">
              {title.name}
            </h4>
            {/* </Link> */}
            <div className="flex flex-col gap-2.5">
              {links.map(({ name, url }) => (
                <p key={name} className="text-gray-500 text-base font-normal">
                  {name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mt-[3.5em]">
        <div className="py-4 border-t-[1px]">
          <div className="flex gap-4">
            <div className="bg-black flex items-center justify-center px-1 py2 gap-0.5">
              <h2 className="font-extrabold text-white">H</h2>
              <div className="w-2 h-[35%] bg-green-600" />
            </div>
            <div className="rounded-[50%] flex justify-center items-center p-5"></div>
          </div>
          <h4 className="py-2 font-medium text-gray-600">
            Copyright &copy; 2023 HackerRank
          </h4>
          <p className="text-sm text-gray-500">Provacy Policy</p>
        </div>
      </div>
    </div>
  );
};
