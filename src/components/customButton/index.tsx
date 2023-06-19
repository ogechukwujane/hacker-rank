import React from "react";
import { CustomButtonProps } from "../../types";

export const CustomButton = ({ title, buttonStyle }: CustomButtonProps) => {
  return (
    <button className={`py-2 px-4 rounded-[5px] ${buttonStyle}`}>
      {title}
    </button>
  );
};
