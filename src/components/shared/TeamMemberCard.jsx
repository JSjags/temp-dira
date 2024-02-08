import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const TeamMemberCard = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (showMore) {
      disableBodyScroll(document);
    } else {
      enableBodyScroll(document);
    }
  }, [showMore]);

  return (
    <>
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed overflow-hidden top-0 left-0 w-full h-full backdrop-blur-md z-20 overflow-y-scroll px-[clamp(10px,5%,100px)] bg-[rgba(0,0,0,0.3)]"
          >
            <button
              onClick={() => setShowMore(false)}
              className="absolute top-3 right-3 backdrop-blur-md flex items-center justify-center p-2 rounded-full bg-black backdrop-invert"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <div className="bg-white max-w-[900px] mx-auto px-[clamp(10px,5%,100px)] py-8 shadow-lg rounded-3xl mt-16">
              <div
                // key={i}
                className="flex justify-between flex-wrap w-full gap-16"
              >
                <TeamMemberCard data={data} />
                <div className="font-dmsans text-lg leading-8 min-w-[240px] flex-1 max-w-[922px]">
                  <p className="mt-0">
                    Lorem ipsum dolor sit amet consectetur. Non sapien elementum
                    vel montes. Imperdiet eu a lorem tincidunt pretium amet odio
                    vitae egestas. Convallis porttitor facilisis at mauris erat.
                  </p>
                  <p className="mt-6">
                    Eget tristique ut non mollis in imperdiet habitasse dui.
                    Vehicula et aliquet feugiat ornare urna faucibus. Tellus
                    tempor parturient facilisis pellentesque amet nulla quam
                    lobortis fringilla.
                  </p>
                  <p className="mt-6">
                    In volutpat fringilla risus a. Lectus eu nec in odio lectus.
                    Dictum nec hac cursus viverra nunc.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        onClick={() => setShowMore(true)}
        className="flex flex-col w-[clamp(220px,calc(100%/4),16rem)] h-[22rem] rounded-[1.26rem] grow min-[670px]:grow-0 cursor-pointer transition-all -translate-y-0 shadow-none duration-300 hover:-translate-y-3 hover:shadow-lg"
      >
        <div className="h-52 w-full rounded-t-[1rem] overflow-hidden">
          <img
            loading="lazy"
            src={data.image}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex-1 flex flex-col border border-solid border-[#C4C4C4] border-t-transparent rounded-b-[1rem]">
          <p className="mt-5 line-clamp-1 font-medium text-sm font-plusJakartaSans text-lightdark text-center">
            {data.role}
          </p>
          <p className="mt-4 line-clamp-1 font-medium text-xl font-plusJakartaSans text-[#404040] text-center">
            {data.name}
          </p>
          <div className="flex flex-1 justify-center items-center gap-[5px]">
            {Array(3)
              .fill(0)
              .map((box, i) => (
                <div key={i} className="w-5 h-5 rounded-[6px] bg-[#D9D9D9]" />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberCard;
