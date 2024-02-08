/* eslint-disable react/prop-types */
const FloatingBlob = ({ width, position }) => {
  return (
    <div
      className={`absolute ${position ? "top-[30%] left-[10%]" : position} w-[${
        width ? "225px" : width
      }] h-[${
        width ? "225px" : width
      }] bg-[#01B6EF] rounded-full -z-[1] blur-[${width ?? "220px"}]`}
    />
  );
};

export default FloatingBlob;
2;
