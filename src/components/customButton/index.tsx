import React from "react";
import { CustomButtonProps } from "../../types";
import { motion, Variants } from "framer-motion";

export const CustomButton = ({
  title,
  buttonStyle,
  delay,
  icon,
}: CustomButtonProps) => {
  const buttonVarient: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        stiffness: 200,
      },
    },
    hover: { scale: 1.02 },
  };
  return (
    <motion.button
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      exit="hidden"
      variants={buttonVarient}
      className={`py-2 px-4 rounded-[5px] ${icon? 'flex items-center gap-3':''} ${buttonStyle}`}
    >
      {title} <img src={icon}  className="mt-1"/>
    </motion.button>
  );
};
