import React, { useState } from "react";
import { CustomButton } from "../../components/customButton";
import community_image from "../../assets/community.jpg";
import report_image from "../../assets/report-2.jpg";
import resume_image from "../../assets/resume.jpg";
import binarytree_image from "../../assets/binarytree-1.png";
import code_image from "../../assets/code-1.png";
import contenders_image from "../../assets/contenders.png";
import right_arrow from "../../assets/right_arrow.svg";
import "./style.css";
import { motion, Variants } from "framer-motion";

const imageVariant: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
      stiffness: 200,
    },
  },
};

export const MainBody = () => {
  const [initialPos, setInitialPos] = useState<number>();
  const [initialSize, setInitialSize] = useState<number>();

  const initial = (e: React.DragEvent<HTMLDivElement>) => {
    let resizable = document.getElementById("Resizable");
    if (resizable) {
      setInitialPos(e.clientX);
      setInitialSize(resizable.offsetWidth);
    }
  };
  const resize = (e: React.DragEvent<HTMLDivElement>) => {
    let resizable = document.getElementById("Resizable");
    if (resizable) {
      if (resizable.style.width > "60%") {
        resizable.style.width = `${
          (initialSize ?? 0) + (e.clientX - (initialPos ?? 0))
        }px`;
        resizable.style.background = "#0080001f";
      } else {
        resizable.style.width = `${
          (initialSize ?? 0) + (e.clientX - (initialPos ?? 0))
        }px`;
        resizable.style.background = "#0608063d";
      }
    }
  };

  return (
    <div>
      <div className="flex justify-center gap-10">
        <p className="text-lg font-medium">Prep</p>
        <p className="text-lg font-medium">Screen</p>
        <p className="text-lg font-medium">Interview</p>
      </div>
      <div className="max-w-auto mx-auto px-5 sm:px-10 py-10">
        <div className="bg-[#111621] flex flex-col lg:flex-row items-center gap-10 px-5 sm:px-10 py-7 lg:py-3 rounded-[10px]">
          <div className="flex flex-col gap-7 w-full lg:w-[50%]">
            <p className="font-base text-xl text-[#9eaeb2]">
              :: Coding practice ::
            </p>
            <h3 className="font-bold text-3xl text-[#f5f4f3]">
              Explore and expand your skills.
            </h3>
            <p className="text-xl text-[#c5d7e3]">
              Every idea has a first line of code. Prep for jobs and sharpen
              your skills alongside a global community of developers. Access the
              content you need to develop new skills – and land the job you’ve
              dreamed of.
            </p>
            <CustomButton
              title="Sign up and practice"
              icon={right_arrow}
              buttonStyle="border-[1px] border-white font-medium text-[#f5f4f3] w-[100%] sm:w-[15em]"
            />
          </div>
          <div className="lg:w-[50%]">
            <img src={community_image} />
          </div>
        </div>
        <div className="pb-20 mb-40">
          <div className="flex flex-col gap-8 my-10">
            <p>:: Coding tests ::</p>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl sm:text-4xl lg:text-6xl font-light text-green-600 ">
                Join the movement.
              </h2>
              <h2 className="text-2xl sm:text-4xl lg:text-6xl font-light">
                Screen on skills.
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-[5em]">
            <div className="w-full  bg-red-700  image_wrap">
              <img
                src={report_image}
                width={"100%"}
                height={100}
                className="report_image"
              />
              <img
                src={resume_image}
                width={"100%"}
                height={100}
                className="resume_image"
              />
              {/* </div> */}
              <div className="Block">
                <div id="Resizable" />
                <div
                  id="Draggable"
                  draggable="true"
                  onDragStart={initial}
                  onDrag={resize}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex flex-col gap-8 lg:w-[50%] lg:pr-20">
                <h4 className="font-bold text-2xl lg:text-4xl text-black leading-tight">
                  Leave the binary tree behind.
                </h4>
                <p className="font-base text-xl text-gray-500">
                  Build coding questions using our library of dev-friendly
                  content that challenges them to solve the problems they’d
                  actually tackle on the job.
                </p>
                <CustomButton
                  title="Start free trial"
                  buttonStyle="text-black font-bold w-[10em] text-left px-0"
                />
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                variants={imageVariant}
                className="lg:w-[50%]"
              >
                <img src={binarytree_image} />
              </motion.div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex flex-col gap-8 lg:w-[50%] lg:pr-20">
                <h4 className="font-bold text-2xl lg:text-4xl text-black leading-tight">
                  Focus on what really matters: the code.
                </h4>
                <p className="font-base text-xl text-gray-500">
                  Build skills-based coding tests with tech problems a developer
                  would encounter on the job — and hire the team behind your
                  next big idea.
                </p>
                <CustomButton
                  title="Request a demo"
                  buttonStyle="text-black font-bold w-[10em] text-left px-0"
                />
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                variants={imageVariant}
                className="lg:w-[50%]"
              >
                <img src={code_image} />
              </motion.div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex flex-col gap-8 lg:w-[50%] lg:pr-20">
                <h4 className="font-bold text-2xl lg:text-4xl text-black leading-tight">
                  Identify top contenders
                </h4>
                <p className="font-base text-xl text-gray-500">
                  Identify top contenders and invite them to meet your team
                  using data-driven decisions that help level the playing field
                  for developers everywhere.
                </p>
                <CustomButton
                  title="Learn more"
                  buttonStyle="text-black font-bold w-[10em] text-left px-0"
                />
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                variants={imageVariant}
                className="lg:w-[50%]"
              >
                <img src={contenders_image} />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <p>:: Techinal interval ::</p>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-light text-center">
            Interview like it's <span className="text-green-600">2023</span>
          </h2>
          <p className="text-xl font-light max-w-3xl text-center mt-5">
            Ditch out of reach and out of touch interview questions about golf
            balls and 747s — and turn off your clunky screen share for good.
            Code, create, and collaborate with an IDE built to showcase
            real-world skills in a real-world environment.
          </p>
          <CustomButton
            title="Learn more"
            buttonStyle="bg-green-700 w-[100%] sm:w-[10em] text-lg font-medium text-white py-3 my-6"
          />
        </div>
      </div>
    </div>
  );
};
