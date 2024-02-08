const GetInvolvedAction = () => {
  return (
    <div className="w-full bg-[#FFFFFF] pb-24">
      <div className="mx-auto max-w-[1440px] flex flex-col items-center h-full">
        <div className="min-h-full w-full flex flex-col justify-center items-center gap-6 px-[clamp(10px,5%,100px)] pt-10">
          <div className="w-full bg-[#E2F2F8] py-20 pb-16 rounded-3xl px-[clamp(10px,5%,100px)] flex flex-col justify-center items-center">
            <p className="text-4xl min-[827px]:text-6xl text-lightdark font-dmsans font-black w-fit mx-auto text-center">
              Want to get Involved?
            </p>
            <p className="text-xl font-plusJakartaSans w-fit mx-auto text-lightdark mt-10 min-[827px]:mt-5 text-center">
              Or find out more about AI Research
            </p>
            <div className="mt-14 w-fit mx-auto">
              <button
                aria-label="Join Us"
                className="h-14 bg-darkblue w-44 rounded-full font-poppins font-medium"
              >
                <span className="text-lg text-white">Join Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedAction;
