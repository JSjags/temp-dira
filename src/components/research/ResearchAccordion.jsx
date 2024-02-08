import { useEffect, useRef, useState } from "react";
import { researchWorks } from "../../constants/researchWorks";
import accordionArrow from "../../assets/accordion-arrow.svg";
import arrowRight from "../../assets/arrow-right.svg";

const researchFields = [
  "Artificial Intelligence Research",
  "Virtual Reality Research",
  "NFT/Bitcoin Research",
  "Entertainment Research",
  "Technology Research",
];

const ResearchAccordion = () => {
  const ref = useRef(null);

  const [currentAccordion, setCurrentAccordion] = useState(0);
  const [accordionHeight, setAccordionHeight] = useState(0);

  const handleToggle = (index) => {
    if (index === currentAccordion) {
      setCurrentAccordion(null);
    } else {
      setCurrentAccordion(index);
    }
  };

  useEffect(() => {
    if (ref.current !== null) {
      setAccordionHeight(ref.current.clientHeight);
    }
  }, [ref]);

  return (
    <div className="w-full bg-white pb-24">
      <div className="mx-auto max-w-[1440px] flex flex-col items-center h-full">
        <div className="w-full px-[clamp(10px,10%,100px)] pt-10">
          {researchFields.map((field, i) => {
            return (
              <div key={i}>
                <div className="mt-5 h-24 w-full border-b-[4px] border-solid border-[#262626] flex items-center justify-between">
                  <p className="font-segoeUI font-semibold text-xl text-lightdark">
                    {field}
                  </p>
                  <button
                    aria-label="Read On flex justify-center items-center"
                    onClick={() => handleToggle(i)}
                  >
                    <img
                      loading="lazy"
                      src={accordionArrow}
                      className={`transition-all duration-300 ${
                        currentAccordion == i ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                </div>
                <div
                  ref={ref}
                  className={`flex flex-col gap-10 transition-all duration-300 ${
                    i === currentAccordion
                      ? `transition-all duration-300 opacity-1 translate-y-0`
                      : "h-0 overflow-hidden transition-all duration-300 opacity-0 -translate-y-4"
                  }`}
                >
                  {console.log(`accordion height: ${accordionHeight}`)}
                  {researchWorks.slice(0, 2).map((work, i) => {
                    return (
                      <div
                        key={i}
                        className="flex justify-between flex-wrap w-full gap-16 pt-10"
                      >
                        <div className="w-[clamp(240px,100%,280px)] h-[277px] grow min-[670px]:grow-0">
                          <img
                            loading="lazy"
                            src={work.image}
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                        <div className="grid font-dmsans text-lg leading-8 min-w-[240px] flex-1 max-w-[922px] text-lightdark">
                          <p className="font-inter font-semibold text-2xl">
                            Lorem ipsum dolor sit amet
                          </p>
                          <p className="mt-4 font-dmsans text-lg">
                            Lorem ipsum dolor sit amet consectetur. Nisi vitae
                            aliquam pharetra mauris ornare quam. Pellentesque
                            tellus scelerisque feugiat vel auctor. Turpis sit
                            faucibus iaculis sed. At consequat sed in mattis
                            aenean egestas egestas. Nibh consectetur libero
                            dolor pellentesque non pharetra potenti ultrices
                            suspendisse.
                          </p>
                          <p className="mt-6 font-dmsans text-lg">
                            Pretium porttitor odio velit vel. Lorem gravida ac
                            aliquam nam consectetur non. Vulputate urna gravida.
                          </p>
                          <div className="self-end">
                            <button
                              aria-label="Read more"
                              className="h-10 mt-6 bg-transparent w-40 rounded-full font-poppins font-medium border border-lightdark flex justify-center items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                              <span className="text-base text-lightdark">
                                Read more
                              </span>
                              <img loading="lazy" src={arrowRight} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResearchAccordion;
