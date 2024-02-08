/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <div className="mx-auto max-w-[1440px] flex flex-col items-center min-[827px]:h-full">
      <div className="min-h-full w-full flex flex-col min-[827px]:justify-center min-[827px]:items-center gap-6 px-[clamp(10px,5%,100px)] pt-10">
        <div>
          <p className="text-4xl min-[827px]:text-5xl text-left min-[827px]:text-center mt-10 font-dmsans font-semibold text-lightdark">
            ABOUT DIRA
          </p>
        </div>
        <p className="min-[827px]:text-center max-w-[900px] text-lg font-dmsans text-lightdark">
          The Decision Intelligence and Resource Allocation (DIRA) Lab is an
          innovative non-profit research laboratory and incubator dedicated to
          advancing research and practical applications in Decision Intelligence
          and Resource Allocation. The lab's mission is to drive societal
          advancement through cutting-edge research and technology development,
          focusing on areas critical to human welfare and environmental
          sustainability.
        </p>
      </div>
    </div>
  );
};

export default Hero;
