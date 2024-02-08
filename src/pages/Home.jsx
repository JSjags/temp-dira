import {
  GetInvolvedAction,
  Hero,
  HowWeWork,
  MeetTheTeam,
  Research,
  ResearchWorks,
} from "../components/Home";
import PressMentions from "../components/Home/PressMentions";

const Home = () => {
  return (
    <div className="pt-20 bg-wave w-full min-h-screen ">
      <Hero />
      <Research />
      <HowWeWork />
      <MeetTheTeam centerTitle={true} showSubtitle={true} />
      <ResearchWorks />
      <PressMentions />
      <GetInvolvedAction />
    </div>
  );
};

export default Home;
