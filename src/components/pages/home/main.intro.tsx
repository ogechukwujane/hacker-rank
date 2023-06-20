import { socialApps } from "../../../constants";
import { CustomButton } from "../../customButton";

export const MainIntro = () => {
  return (
    <>
      <div className=" bg-red-200 ">
        <div className="flex flex-col items-center gap-7 px-5 sm:px-10 pt-[5em] pb-10 bg-red-100 max-w-auto mx-auto">
          <h2 className="font-bold text-center text-4xl lg:text-7xl max-w-[100%] lg:max-w-[80%] xl:max-w-[60%]">
            Skills speak louder than words
          </h2>
          <p className="text-xl font-light text-center max-w-[100%] lg:max-w-[70%] xl:max-w-[60%]">
            We help companies develop the strongest tech team around. We help
            candidates sharpen their tech skills and pursue job opportunities
          </p>
          <div className="pb-10 flex flex-col sm:flex-row gap-5 w-full justify-center">
            <CustomButton
              title="Sign up"
              buttonStyle="bg-green-700 w-[100%] sm:w-[10em] text-lg font-medium text-white py-3"
            />
            <CustomButton
              title="Request demo"
              buttonStyle="w-full sm:w-[10em] py-3 font-medium text-black-400 border-2 border-black"
            />
          </div>
          <p className="text-base font-light text-center">
            Over 40% of developers worldwide and 3,000 companies use HackerRank
          </p>
          <div className="flex flex-wrap items-center justify-center">
            {socialApps.map((app) => (
              <img src={app} alt="social apps" width={100} key={app} />
            ))}
          </div>
          {/* <div className="h-[400px] w-[400px] bg-gradient-to-tr from-light-green-200 to-light-green-100 absolute left-0 bottom-0 -z-10" />
        <div className="h-[400px] w-[400px] bg-gradient-to-tl from-light-purple-200 to-light-purple-100 absolute right-0 bottom-0 -z-10" /> */}
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center py-10 mx-10">
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-light text-center">
          It's not a pipeline problem.
        </h2>
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-light text-green-600 text-center">
          It's a spotlight problem.
        </h2>
        <p className="text-xl font-light max-w-2xl text-center mt-5">
          Tech hiring needs a reset. From prepping for jobs and practicing
          coding to running a world-class technical interview, give developers
          the tools they need to showcase their skills, passion, and potential.
        </p>
      </div>
    </>
  );
};
