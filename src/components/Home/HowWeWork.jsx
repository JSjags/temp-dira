import plane from "../../assets/home/plane.svg";
import plier from "../../assets/home/plier.svg";
import mouse from "../../assets/home/mouse.svg";
import HowWeWorkLeft from "../../assets/home/How-we-work-left.svg";
import HowWeWorkCenter from "../../assets/home/How-we-work-center.svg";
import HowWeWorkRight from "../../assets/home/How-we-work-right.svg";
import { Link } from "react-router-dom";

const HowWeWork = () => {
  return (
    <div className="w-full bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1440px] flex flex-col items-center">
        <div className="min-h-full w-full flex flex-col justify-center items-center gap-6 px-[clamp(10px,5%,100px)] pt-10">
          <div>
            <p className="text-5xl min-[827px]:text-5xl leading-[6rem] text-center font-segoeUI font-semibold text-lightdark">
              How we work
            </p>
          </div>
          <div className="flex flex-wrap gap-5 justify-center items-center bg-transparent custom-drop-shadow mt-6">
            <div className="w-[15.6rem] h-48 p-3 bg-[#EBE6FF] flex flex-col justify-start items-center">
              <div className="w-14 h-14 rounded-full bg-[#CCBFFF] flex items-center justify-center">
                <img src={plane} loading="lazy" />
              </div>
              <p className="mt-5 text-2xl font-sora text-[#1E254C] font-semibold">
                A.I Research
              </p>
              <p className="mt-1 font-inter text-base text-[#7B7F8F]">
                A.I Assisted research
              </p>
            </div>
            <div className="w-[15.6rem] h-48 p-3 bg-[#FFECE2] flex flex-col justify-start items-center">
              <div className="w-14 h-14 rounded-full bg-[#FFBC99] flex items-center justify-center">
                <img src={plier} loading="lazy" />
              </div>
              <p className="mt-5 text-2xl font-sora text-[#1E254C] font-semibold">
                Well Documented
              </p>
              <p className="mt-1 font-inter text-base text-[#7B7F8F] text-center">
                We are not tolerant about taste
              </p>
            </div>
            <div className="w-[15.6rem] h-48 p-3 bg-[#DDF5E8] flex flex-col justify-start items-center">
              <div className="w-14 h-14 rounded-full bg-[#B5E4CA] flex items-center justify-center">
                <img src={mouse} loading="lazy" />
              </div>
              <p className="mt-5 text-2xl font-sora text-[#1E254C] font-semibold">
                Simple & Unique
              </p>
              <p className="mt-1 font-inter text-base text-[#7B7F8F] text-center">
                Created by our talented designer
              </p>
            </div>
          </div>

          <div className="w-full flex flex-wrap gap-4 mt-20 center">
            <div className="mx-auto w-[clamp(240px,calc(100%/3),367px)] max-h-[500px] grow">
              <div className="w-full">
                <img
                  src={HowWeWorkLeft}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-dmsans text-xl text-[#2E2E2E] font-bold pt-4">
                Artificial Intelligence
              </p>
              <div className="mt-2">
                <svg
                  width="28"
                  height="17"
                  viewBox="0 0 28 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8.63055H27C24.9565 8.32057 20.6348 6.21268 19.6957 0.260986"
                    stroke="#7739CE"
                    strokeWidth="2"
                  />
                  <path
                    d="M0 8.63043H26.8696C24.836 8.94042 20.5351 11.0483 19.6005 17"
                    stroke="#7739CE"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            <div className="mx-auto w-[clamp(240px,calc(100%/3),367px)] grow">
              <div className="w-full">
                <img
                  src={HowWeWorkCenter}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-dmsans text-xl text-[#2E2E2E] font-bold pt-4">
                Technological Advancement
              </p>
              <div className="mt-2">
                <svg
                  width="28"
                  height="17"
                  viewBox="0 0 28 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8.63055H27C24.9565 8.32057 20.6348 6.21268 19.6957 0.260986"
                    stroke="#0066FF"
                    strokeWidth="2"
                  />
                  <path
                    d="M0 8.63043H26.8696C24.836 8.94042 20.5351 11.0483 19.6005 17"
                    stroke="#0066FF"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            <div className="mx-auto w-[clamp(240px,calc(100%/3),367px)] grow">
              <div className="w-full">
                <img
                  src={HowWeWorkRight}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-dmsans text-xl text-[#2E2E2E] font-bold pt-4">
                Privacy policies
              </p>
              <div className="mt-2">
                <svg
                  width="28"
                  height="17"
                  viewBox="0 0 28 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8.63055H27C24.9565 8.32057 20.6348 6.21268 19.6957 0.260986"
                    stroke="#00F0FF"
                    strokeWidth="2"
                  />
                  <path
                    d="M0 8.63043H26.8696C24.836 8.94042 20.5351 11.0483 19.6005 17"
                    stroke="#00F0FF"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link to={"/contact"}>
              <button
                aria-label="Join Us"
                className="h-12 bg-darkblue w-44 rounded-full font-poppins font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="text-lg text-white">Join Us</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
