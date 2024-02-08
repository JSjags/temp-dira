/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import researchWorkBanner from "../../assets/home/research-work-banner.webp";
import { researchWorks } from "../../constants/researchWorks";
import { Work } from "../shared";

const ResearchWorks = ({ isResearchPage }) => {
  let intervalId = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (intervalId.current === null) {
      intervalId.current = setInterval(() => {
        console.log(currentIndex);
        setCurrentIndex(currentIndex === 3 ? 0 : currentIndex + 1);
      }, 5000);
    } else {
      intervalId.current = setInterval(() => {
        console.log(currentIndex);
        setCurrentIndex(currentIndex === 3 ? 0 : currentIndex + 1);
      }, 5000);
    }
    return () => {
      clearInterval(intervalId.current);
    };
  }, [currentIndex]);

  return (
    <div
      className={`w-full ${
        isResearchPage ? "bg-transparent" : "bg-[#F6F9FF]"
      } pb-12 sm:pb-20`}
    >
      <div className="mx-auto max-w-[1440px] flex flex-col items-center h-full">
        <div className="min-h-full w-full flex flex-col justify-center items-center gap-6 px-[clamp(10px,5%,100px)] pt-0">
          <div>
            {isResearchPage ? (
              <p className="text-3xl sm:text-5xl leading-[2rem] sm:leading-[4rem] text-center font-dmsans font-bold text-lightdark mt-10">
                RESEARCH AREAS
              </p>
            ) : (
              <p className="text-4xl sm:text-5xl leading-[3rem] sm:leading-[4rem] text-center font-segoeUI font-semibold text-lightdark mt-10">
                Research Works
              </p>
            )}
            <div className="flex justify-start flex-wrap mt-10 sm:mt-20">
              <div className="flex w-full min-[827px]:w-[clamp(200px,50%,584px)] max-h-[484px] overflow-hidden rounded-lg">
                <img
                  loading="lazy"
                  src={researchWorkBanner}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-around min-[827px]:items-center sm:px-4 mt-8 min-[827px]:mt-0 w-full min-[827px]:w-[clamp(200px,50%,584px)] overflow-hidden rounded-lg">
                <div className="max-w-full min-[827px]:max-w-[462px]">
                  <p className="text-lightdark text-4xl min-[827px]:text-5xl font-inter font-semibold">
                    The Weight Reset Program
                  </p>
                  <p className="mt-4 font-segoeUI text-base">
                    The Weight Reset Program includes a clinically proven
                    treatment that targets metabolism and overhauls hunger
                    signals to help average patients{" "}
                    <span className="font-[700]">
                      lose over 13% of their body weight in one year.
                    </span>
                  </p>
                  <p className="mt-5 font-segoeUI text-base">
                    When combined with lifestyle changes, it’s considered the
                    <span className="font-[700]">
                      an effective method for long-term weight loss in average
                      patients.
                    </span>
                  </p>
                  <div className="mt-12">
                    <button
                      aria-label="Discover more"
                      className="h-12 border border-solid border-darkblue w-44 rounded-full font-poppins font-medium"
                    >
                      <span className="text-lg text-darkblue">
                        Discover more
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-4 gap-y-6 min-[827px]:gap-y-4 custom-grid-fill items-center mt-10 min-[827px]:mt-10">
              {researchWorks.map((work, i) => (
                <Work
                  key={i}
                  data={work}
                  isBlurred={i !== currentIndex ? true : false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchWorks;
