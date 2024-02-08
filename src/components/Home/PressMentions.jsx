import { pressMentions } from "../../constants/pressMentions";
import { PressMentionCard } from "../shared";

const PressMentions = () => {
  return (
    <div className="w-full bg-[#FFFFFF] pt-20 py-28 pb-14">
      <div className="mx-auto max-w-[1440px] flex flex-col items-center h-full">
        <div className="min-h-full w-full flex flex-col justify-center items-center gap-6 px-[clamp(10px,5%,100px)]">
          <div className="flex justify-between w-full gap-2">
            <p className="font-segoeUI font-semibold text-4xl text-lightdark">
              Press Mentions
            </p>
            <button aria-label="View All">
              <span className="font-workSans font-semibold text-lightdark whitespace-nowrap">
                View all &gt;
              </span>
            </button>
          </div>
          <div className="flex justify-center sm:justify-between flex-wrap gap-y-16">
            {pressMentions.map((mention, i) => (
              <PressMentionCard key={i} data={mention} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressMentions;
