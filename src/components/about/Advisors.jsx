/* eslint-disable react/prop-types */
import { advisors } from "../../constants/advisors";
import { TeamMemberCard } from "../shared";

const Advisors = () => {
  return (
    <div className="w-full bg-[#FFFFFF] pb-28">
      <div className="mx-auto max-w-[1440px] flex flex-col items-center h-full">
        <div className="min-h-full w-full flex flex-col justify-center items-center gap-6 px-[clamp(10px,5%,100px)]">
          <div className="w-full">
            <p
              className={`text-5xl text-start font-dmsans font-bold text-lightdark`}
            >
              Advisors
            </p>
          </div>
          <div className="w-full flex flex-col flex-wrap justify-center gap-x-20 gap-y-10 mt-4">
            {advisors.map((advisor, i) => (
              <div
                key={i}
                className="flex justify-between flex-wrap w-full gap-16"
              >
                <TeamMemberCard data={advisor} />
                <div className="font-dmsans text-lg leading-8 min-w-[240px] flex-1 max-w-[922px]">
                  <p className="mt-0">
                    Lorem ipsum dolor sit amet consectetur. Non sapien elementum
                    vel montes. Imperdiet eu a lorem tincidunt pretium amet odio
                    vitae egestas. Volutpat id senectus tristique aliquam tempor
                    sit habitant lacus volutpat. Convallis porttitor facilisis
                    at mauris erat.
                  </p>
                  <p className="mt-6">
                    Eget tristique ut non mollis in imperdiet habitasse dui.
                    Vehicula et aliquet feugiat ornare urna faucibus. Lectus
                    bibendum quis arcu adipiscing risus felis sapien egestas
                    nisl. Quam elit dolor rhoncus risus nec. Tellus tempor
                    parturient facilisis pellentesque amet nulla quam lobortis
                    fringilla.
                  </p>
                  <p className="mt-6">
                    In volutpat fringilla risus a. Posuere leo purus in
                    dignissim tincidunt diam enim tincidunt. Lectus eu nec in
                    odio lectus. Dictum nec hac cursus viverra nunc.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisors;
