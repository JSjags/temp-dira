/* eslint-disable react/no-unescaped-entities */

import researchLeft from "../../assets/home/research-left.webp";
import researchRight from "../../assets/home/research-right.webp";
import researchTopLeftStar from "../../assets/home/research-top-left.svg";
import researchBottomRightStar from "../../assets/home/research-bottom-right.svg";

const Research = () => {
  return (
    <div className="w-full bg-[#EFF3FF]">
      <div className="relative mx-auto max-w-[1440px] flex flex-wrap justify-between items-center gap-6 px-[clamp(10px,5%,100px)] pt-28 pb-20">
        <img
          src={researchTopLeftStar}
          className="absolute top-0 left-0 h-4/6"
          loading="lazy"
        />
        <img
          src={researchBottomRightStar}
          className="absolute bottom-0 right-0 h-4/6"
          loading="lazy"
        />
        <div className="flex-1 min-[827px]:flex-[0.58] relative z-0">
          <p className="text-4xl min-[827px]:text-[3.4rem] text-[#1E254C] leading-[4rem] min-[827px]:leading-[4rem] font-segoeUI font-semibold">
            We use the latest{" "}
            <span className="text-[#0035E8]">A.I Technology</span> for our
            <span className="text-[#0035E8]"> Research</span>
          </p>
          <p className="mt-10 text-[1.4rem] font-segoeUI text-[#1E1E1E]">
            Our mission is to harness AI's transformative power to make
            significant contributions in areas like Climate and Energy,
            Healthcare, Financial Inclusion, Arts and Culture, Education, and
            Civic Engagement
          </p>
        </div>
        <div className="flex mt-4 min-[827px]:mt-0 justify-between items-start flex-1 min-[827px]:flex-[0.4] gap2 min-[827px]:gap-8 min-w-[240px]">
          <img
            loading="lazy"
            src={researchLeft}
            className="w-[calc(50%-5px)] min-[827px]:w-[calc(50%-15px)]"
          />
          <img
            loading="lazy"
            src={researchRight}
            className="w-[calc(50%-5px)] min-[827px]:w-[calc(50%-15px)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Research;
