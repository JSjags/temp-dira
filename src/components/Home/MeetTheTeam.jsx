/* eslint-disable react/prop-types */
import { team } from "../../constants/team";
import { TeamMemberCard } from "../shared";

const MeetTheTeam = ({ centerTitle, showSubtitle }) => {
  return (
    <div className="w-full bg-[#FFFFFF] pb-28">
      <div className="mx-auto max-w-[1440px] flex flex-col items-center h-full">
        <div className="min-h-full w-full flex flex-col justify-center items-center gap-6 px-[clamp(10px,5%,100px)] pt-10">
          <div className="w-full">
            <p
              className={`text-4xl min-[827px]:text-5xl  leading-[3rem] min-[827px]:leading-[4rem] ${
                centerTitle ? "text-center" : "text-start"
              } ${
                showSubtitle
                  ? "font-plusJakartaSans font-semibold"
                  : "font-dmsans font-bold"
              } text-lightdark mt-10`}
            >
              Meet the Team
            </p>
            {showSubtitle && (
              <p className="text-2xl text-center font-dmsans font-medium text-lightdark mt-4">
                Meet our team of professionals to serve you
              </p>
            )}
          </div>
          <div className="flex flex-wrap justify-between gap-x-4 gap-y-10 mt-10 min-[827px]:mt-10">
            {team.map((member, i) => (
              <TeamMemberCard key={i} data={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
