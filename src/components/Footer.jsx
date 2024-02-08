import facebook from "../assets/socials-icons/facebook.svg";
import instagram from "../assets/socials-icons/instagram.svg";
import whatsapp from "../assets/socials-icons/whatsapp.svg";
import linkedin from "../assets/socials-icons/linkedin.svg";
import twitter from "../assets/socials-icons/twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#E2F2F8] flex justify-center font-poppins">
      <div className="mx-auto max-w-[1440px] w-full px-[clamp(10px,5%,100px)]">
        <div className="mt-14 h-[1px] w-[80%] mx-auto bg-darkblue" />
        {/* logo */}
        <p className="w-fit mx-auto text-5xl font-semibold text-darkblue mt-12">
          LOGO
        </p>
        <p className="w-fit mx-auto text-sm font-normal mt-2 tracking-[0.2em] text-center">
          AI Research
        </p>
        <div className="mt-4 h-[2px] w-[100px] mx-auto bg-black rounded-sm mb-6" />
        <div className="flex justify-between items-center h-fit mx-auto max-w-[673px]">
          <ul className="flex flex-wrap justify-center w-full gap-3 font-medium text-darkblue text-lg">
            <li className="px-3 relative after:content('') after:absolute after:-bottom-0 after:w-0 after:hover:w-1/2 after:block after:h-[2px] after:bg-darkblue after:rounded-sm after:transition-all after:duration-300 ">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="px-3 relative after:content('') after:absolute after:-bottom-0 after:w-0 after:hover:w-1/2 after:block after:h-[2px] after:bg-darkblue after:rounded-sm after:transition-all after:duration-300 ">
              <Link to={"/research"}>Research</Link>
            </li>
            <li className="px-3 relative after:content('') after:absolute after:-bottom-0 after:w-0 after:hover:w-1/2 after:block after:h-[2px] after:bg-darkblue after:rounded-sm after:transition-all after:duration-300 ">
              <Link to={"/about"}>About Us</Link>
            </li>
            {/* <li className="px-3 relative after:content('') after:absolute after:-bottom-0 after:w-0 after:hover:w-1/2 after:block after:h-[2px] after:bg-darkblue after:rounded-sm after:transition-all after:duration-300 ">
              <Link to={"/get-involved"}>Get Involved</Link>
            </li> */}
            <li className="px-3 relative after:content('') after:absolute after:-bottom-0 after:w-0 after:hover:w-1/2 after:block after:h-[2px] after:bg-darkblue after:rounded-sm after:transition-all after:duration-300 ">
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="max-w-[673px] px-4 mx-auto mt-6">
          <p className="text-center mx-auto w-full text-lg text-[#262626]">
            Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor
            sit amet, Neque porro elit NeDque{" "}
          </p>
          <ul className="flex flex-wrap justify-center gap-7 mt-12">
            <li>
              <Link to="https://www.facebook.com">
                <img
                  src={facebook}
                  width={26}
                  loading="lazy"
                  className="transition-all duration-300 hover:scale-110"
                />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com">
                <img
                  src={instagram}
                  width={26}
                  loading="lazy"
                  className="transition-all duration-300 hover:scale-110"
                />
              </Link>
            </li>
            <li>
              <Link to="https://www.whatsapp.com">
                <img
                  src={whatsapp}
                  width={26}
                  loading="lazy"
                  className="transition-all duration-300 hover:scale-110"
                />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com">
                <img
                  src={linkedin}
                  width={26}
                  loading="lazy"
                  className="transition-all duration-300 hover:scale-110"
                />
              </Link>
            </li>
            <li>
              <Link to="https://www.twitter.com">
                <img
                  src={twitter}
                  width={26}
                  loading="lazy"
                  className="transition-all duration-300 hover:scale-110"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-20 h-[1px] w-[80%] mx-auto bg-darkblue" />
        <p className="w-fit my-6 mx-auto text-sm font-normal text-darkblue text-center">
          Copyright © {new Date().getFullYear()} DiraLab. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
