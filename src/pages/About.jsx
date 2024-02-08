import { MeetTheTeam } from "../components/Home";
import { Hero, MissionAndGoals } from "../components/about";
import Advisors from "../components/about/Advisors";

const About = () => {
  return (
    <div className="pt-20 bg-wave w-full min-h-screen ">
      <Hero />
      <MissionAndGoals />
      <MeetTheTeam centerTitle={false} showSubtitle={false} />
      <Advisors />
    </div>
  );
};

export default About;
