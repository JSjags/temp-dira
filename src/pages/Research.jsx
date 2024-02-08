import { ResearchWorks } from "../components/Home";
import { ResearchAccordion } from "../components/research";

const Research = () => {
  return (
    <div className="pt-20 bg-wave w-full min-h-screen ">
      <ResearchWorks isResearchPage={true} />
      <ResearchAccordion />
    </div>
  );
};

export default Research;
