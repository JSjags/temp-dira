/* eslint-disable react/prop-types */
import TeamMemberCard from "./TeamMemberCard";

const AdvisorCard = ({ data }) => {
  return (
    <div className="flex justify-between flex-wrap gap-5">
      <TeamMemberCard data={data} />
      <div
        className="flex-1"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
    </div>
  );
};

export default AdvisorCard;
