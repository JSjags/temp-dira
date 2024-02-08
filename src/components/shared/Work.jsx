/* eslint-disable react/prop-types */
const Work = ({ data, isBlurred }) => {
  return (
    <div
      className={`w-[clamp(200px,100%,16.5rem)] min-h-[18.5rem] grow cursor-pointer hover:opacity-100 transition-all duration-300 ${
        isBlurred ? "opacity-50" : ""
      }`}
    >
      <div className="h-[12.75rem] overflow-hidden rounded-lg">
        <img
          loading="lazy"
          src={data.image}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-lg font-inter text-lightdark font-semibold mt-5">
        {data.title}
      </p>
      <p className="font-segoeUI text-lightdark">{data.subtitle}</p>
    </div>
  );
};

export default Work;
