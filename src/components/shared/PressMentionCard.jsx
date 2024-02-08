/* eslint-disable react/prop-types */
import pressMentionIcon from "../../assets/home/press-mention-icon.svg";

const PressMentionCard = ({ data, index }) => {
  const value = index * -100;

  return (
    <div
      className={`w-[clamp(240px,100%,calc(100%/3))] translate-x-[${value}px] grow`}
    >
      <div className="w-full h-[217px] border-none rounded-t-lg overflow-hidden">
        <img
          loading="lazy"
          src={data.image}
          className="w-full h-full object-cover border-none"
        />
      </div>
      <div className="flex p-6 border border-solid border-grey rounded-b-lg overflow-hidden bg-white">
        <div className="flex-1">
          <p className="font-inter font-semibold text-lightdark text-lg line-clamp-1 text-ellipsis">
            {data.title}
          </p>
          <p className="font-workSans text-lightdark text-sm">
            {data.estimatedTime} read {data.date}
          </p>
        </div>
        <div className="flex justify-center items-center w-10 h-10 rounded-full border border-black">
          <img loading="lazy" src={pressMentionIcon} className="h-5" />
        </div>
      </div>
    </div>
  );
};

export default PressMentionCard;
