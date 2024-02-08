import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  console.log(`Pathname: ${pathname}`);

  return (
    <div className="fixed top-0 left-0 w-full bg-wave bg-white z-20">
      <div className="flex justify-between items-center h-16 mx-auto max-w-[1440px] px-[clamp(10px,5%,100px)]">
        <Link to={"/"}>
          <h1 className="text-[30px] font-semibold text-lightdark">LOGO</h1>
        </Link>
        <ul className="hidden min-[900px]:flex gap-10 font-inter text-[15px]">
          <li
            className={pathname === "/" ? "text-[#0035E8]" : "text-lightdark"}
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className={
              pathname === "/about" ? "text-[#0035E8]" : "text-lightdark"
            }
          >
            <Link to={"/about"}>About Us</Link>
          </li>
          <li
            className={
              pathname === "/research" ? "text-[#0035E8]" : "text-lightdark"
            }
          >
            <Link to={"/research"}>Research</Link>
          </li>
          {/* <li
            className={
              pathname === "/get-involved" ? "text-[#0035E8]" : "text-lightdark"
            }
          >
            <Link to={"/get-involved"}>Get Involved</Link>
          </li> */}
          <li
            className={
              pathname === "/contact" ? "text-[#0035E8]" : "text-lightdark"
            }
          >
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
        <Link to={"/contact"}>
          <button className="hidden min-[900px]:flex">
            <span className="font-poppins text-lg font-medium text-darkblue">
              Get Started
            </span>
          </button>
        </Link>
        <button
          className="flex min-[900px]:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              width="36"
              height="36"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                fill="#262626"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              width="40"
              height="40"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="#262626"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
        <div
          // You stoped here
          className={`fixed top-20 left-0 w-full ${
            isMenuOpen ? "min-[900px]:block h-[110vh]  pb-20" : "h-0"
          } overflow-hidden transition-all duration-500 bg-wave bg-white z-10 flex flex-col items-center justify-around`}
        >
          <ul
            className={`min-[900px]:hidden overflow-hidden gap-10 font-inter text-[15px] flex flex-col justify-around`}
          >
            <li
              className={pathname === "/" ? "text-[#0035E8]" : "text-lightdark"}
            >
              <Link onClick={() => setIsMenuOpen(false)} to={"/"}>
                Home
              </Link>
            </li>
            <li
              className={
                pathname === "/about" ? "text-[#0035E8]" : "text-lightdark"
              }
            >
              <Link onClick={() => setIsMenuOpen(false)} to={"/about"}>
                About Us
              </Link>
            </li>
            <li
              className={
                pathname === "/research" ? "text-[#0035E8]" : "text-lightdark"
              }
            >
              <Link onClick={() => setIsMenuOpen(false)} to={"/research"}>
                Research
              </Link>
            </li>
            {/* <li
              className={
                pathname === "/get-involved"
                  ? "text-[#0035E8]"
                  : "text-lightdark"
              }
            >
              <Link to={"/get-involved"}>Get Involved</Link>
            </li> */}
            <li
              className={
                pathname === "/contact" ? "text-[#0035E8]" : "text-lightdark"
              }
            >
              <Link onClick={() => setIsMenuOpen(false)} to={"/contact"}>
                Contact Us
              </Link>
            </li>
          </ul>
          <Link onClick={() => setIsMenuOpen(false)} to={"/contact"}>
            <button className="flex min-[900px]:hidden overflow-hidden">
              <span className="font-poppins text-lg font-medium text-darkblue">
                Get Started
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
