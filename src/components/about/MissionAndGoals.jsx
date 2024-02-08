/* eslint-disable react/no-unescaped-entities */
import missionAndGoals from "../../assets/about/mission-and-goals.webp";

const MissionAndGoals = () => {
  return (
    <div className="w-full h-fit pb-20">
      <div className="mx-auto max-w-[1440px] flex flex-col items-center h-full">
        <div className="min-h-full w-full flex flex-col justify-center items-start gap-6 px-[clamp(10px,5%,100px)] pt-10">
          <div>
            <div className="flex justify-between items-start flex-wrap min-[827px]:mt-20">
              <div className="flex flex-col grow justify-around items-between min-[827px]:px-4 w-[clamp(200px,50%,584px)] overflow-hidden rounded-lg">
                <div className="max-w-full min-[720px]:max-w-[494px] pt-10">
                  <p className="text-lightdark text-5xl font-dmsans font-bold">
                    Our Mission
                  </p>
                  <p className="mt-4 font-dmsans text-lg leading-8">
                    Our mission is to harness AI's transformative power to make
                    significant contributions in areas like Climate and Energy,
                    Healthcare, Financial Inclusion, Arts and Culture,
                    Education, and Civic Engagement
                  </p>
                  <p className="text-lightdark text-5xl font-dmsans font-bold mt-12">
                    Our Goal
                  </p>
                  <ul className="mt-5 text-lg leading-8 font-dmsans max-w-full min-[720px]:max-w-[448px] list-disc pl-6 text-lightdark">
                    <li>
                      Develop cutting-edge AI technologies to address challenges
                      in our focus areas.
                    </li>
                    <li>
                      Publish high-impact research papers and secure multiple
                      patents.
                    </li>
                    <li>
                      Foster an inclusive environment that emphasizes merit and
                      counters the anti-DEI narrative.
                    </li>
                    <li>
                      Establish a collaborative incubator to nurture AI-driven
                      solutions for societal challenges.
                    </li>
                    <li>
                      Engage with global stakeholders to implement solutions in
                      the US and abroad
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden min-[720px]:flex w-[clamp(200px,50%,562px)] rounded-lg relative grow">
                <div className="absolute top-[30%] left-[10%] w-[225px] h-[225px] bg-[#01B6EF] rounded-full -z-[1] blur-[220px]" />
                <img
                  src={missionAndGoals}
                  className="w-full h-full object-cover mt-10 min-[827px]:mt-0"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="block min-[720px]:hidden w-full rounded-lg relative grow">
              <div className="absolute top-[30%] left-[10%] w-[225px] h-[225px] bg-[#01B6EF] rounded-full -z-[1] blur-[220px]" />
              <img
                src={missionAndGoals}
                className="w-full h-full object-cover mt-10 min-[827px]:mt-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndGoals;
