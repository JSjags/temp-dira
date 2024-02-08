import heroImage from "../../assets/hero-image.png";

const Hero = () => {
  return (
    <div className="mx-auto max-w-[1440px] flex flex-col items-center h-full">
      <div className="min-h-full w-full flex flex-col justify-center items-center gap-6 px-[clamp(10px,5%,100px)] pt-10">
        <div>
          <p className="text-5xl min-[827px]:text-6xl leading-[4rem] min-[827px]:leading-[5rem] min-[827px]:text-center font-segoeUI font-semibold text-lightdark">
            AI Research
          </p>
          <p className="text-5xl min-[827px]:text-6xl leading-[4rem] min-[827px]:leading-[5rem] min-[827px]:text-center text-lightdark font-segoeUI font-semibold">
            Optimized Platform.
          </p>
        </div>
        <p className="min-[827px]:text-center max-w-[827px] text-xl font-montserrat text-lightdark">
          Our vision is to revolutionize Research through cutting-edge research
          and technology development, focusing on areas critical to human
          welfare and environmental sustainability.
        </p>
        <div className="w-[40%] h-[1px] mt-4 bg-[#313131]" />
        <div className="mt-2 w-full flex justify-center">
          <button
            aria-label="Join Us"
            className="block w-[100%] min-[827px]:w-40 h-12 bg-darkblue rounded-full font-poppins font-medium"
          >
            <span className="text-lg text-white">Join Us</span>
          </button>
        </div>
        <img src={heroImage} className="w-full" loading="lazy" />
      </div>
    </div>
  );
};

export default Hero;
