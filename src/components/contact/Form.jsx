import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import location from "../../assets/contact/location.svg";
import phone from "../../assets/contact/phone.svg";
import email from "../../assets/contact/email.svg";
import twitter from "../../assets/contact/twitter.svg";
import linkedin from "../../assets/socials-icons/linkedin.svg";
import facebook from "../../assets/contact/facebook.svg";
import instagram from "../../assets/contact/instagram.svg";
import { FloatingBlob } from "../shared";
import { useRef, useState } from "react";
import { PropagateLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Form = () => {
  const form = useRef();

  const [isSending, setIsSending] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateFields = () => {
    let isValid = true;

    const { name, email, message } = contactForm;
    // validate name
    if (name.trim().length < 1) {
      isValid = false;
      setErrors((prevState) => ({
        ...prevState,
        name: "Name cannot be blank",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        name: "",
      }));
    }
    // validate email
    if (
      !String(email).toLowerCase().match(emailPattern) ||
      email.trim().length < 1
    ) {
      isValid = false;
      setErrors((prevState) => ({
        ...prevState,
        email: "Email is invalid",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        email: "",
      }));
    }
    // validate message
    if (message.trim().length < 1) {
      isValid = false;
      setErrors((prevState) => ({
        ...prevState,
        message: "Message cannot be blank",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        message: "",
      }));
    }

    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const isValid = validateFields();

    if (!isValid) return;

    setIsSending(true);

    emailjs
      .sendForm("service_7kkkjip", "template_tx156pn", form.current, {
        publicKey: "I0GhiXoQLD5TF40i9",
      })
      .then(
        () => {
          setContactForm({
            name: "",
            email: "",
            message: "",
          });
          setIsSending(false);
          toast.success("Message sent successfully!", { duration: 5000 });
        },
        () => {
          setIsSending(false);
          toast.error("Error encountered, couldn't send your message.", {
            duration: 5000,
          });
        }
      );
  };

  return (
    <div className="mx-auto max-w-[1440px] flex flex-col items-center h-fit mt-10 relative">
      <Toaster />
      <div className="h-fit w-full flex gap-0 flex-wrap justify-between items-start px-[clamp(10px,5%,100px)] pt-10 mb-24">
        <div className="flex flex-col min-[760px]:w-[clamp(200px,48%,596px)]">
          <p className="font-dmsans font-bold text-5xl text-lightdark">
            GET IN <span className="text-[#002399]">TOUCH</span>
          </p>
          <div className="h-[3px] w-24 bg-[#262626] rounded-sm my-7" />
          <p className="text-xl leading-loose max-w-[589px] font-dmsans pb-7">
            Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor
            sit amet, Neque porro elit NeDque porro{" "}
          </p>
          <div className="flex gap-7">
            <img src={location} className="w-8" loading="lazy" />
            <div>
              <p className="font-dmsans text-xl text-[#646464] font-bold">
                Office Address
              </p>
              <p className="font-dmsans text-base text-[#002399]">
                234, ***** St, ****** City, 4567, United Kingdom
              </p>
            </div>
          </div>
          <div className="flex gap-7 mt-10">
            <img src={phone} className="w-8" loading="lazy" />
            <div>
              <p className="font-dmsans text-xl text-[#646464] font-bold">
                Call Us
              </p>
              <p className="font-dmsans text-base text-[#002399]">
                (+41) 173 656 *****
              </p>
            </div>
          </div>
          <div className="flex gap-7 mt-10">
            <img src={email} className="w-8" loading="lazy" />
            <div>
              <p className="font-dmsans text-xl text-[#646464] font-bold">
                Mail Us
              </p>
              <p className="font-dmsans text-base text-[#002399]">
                info@airesearch.co
              </p>
            </div>
          </div>
          <ul className="flex gap-6 mt-14">
            <li>
              <Link to={"https://twitter.com"}>
                <img
                  src={twitter}
                  className="w-8 transition-all duration-300 hover:scale-110"
                  loading="lazy"
                />
              </Link>
            </li>
            <li>
              <Link to={"https://linkedin.com"}>
                <img
                  src={linkedin}
                  className="w-8 transition-all duration-300 hover:scale-110"
                  loading="lazy"
                />
              </Link>
            </li>
            <li>
              <Link to={"https://facebook.com"}>
                <img
                  src={facebook}
                  className="w-8 transition-all duration-300 hover:scale-110"
                  loading="lazy"
                />
              </Link>
            </li>
            <li>
              <Link to={"https://instagram.com"}>
                <img
                  src={instagram}
                  className="w-8 transition-all duration-300 hover:scale-110"
                  loading="lazy"
                />
              </Link>
            </li>
          </ul>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col mt-10 min-[760px]:mt-0 w-full min-[760px]:w-[clamp(200px,48%,581px)] px-[clamp(10px,5%,44px)] py-6 bg-[#F3F3F3] rounded-3xl"
        >
          <label className="font-poppins text-base tracking-widest">
            YOUR NAME
          </label>
          <input
            type="text"
            name="from_name"
            value={contactForm.name}
            onChange={(e) => {
              setContactForm((prevState) => ({
                ...prevState,
                name: e.target.value,
              }));
            }}
            onBlur={validateFields}
            className={`mt-3 outline-[#002399] caret-[#002399] px-3 w-full font-poppins text-base h-12 align-middle flex items-center bg-[#EBEBEB] mt- border border-solid ${
              errors.name.length ? "border-red-500" : "border-[#D2D2D2]"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 font-poppins text-sm mt-1">
              {errors.name}
            </p>
          )}
          <input type="hidden" name="to_name" value="Admin" />
          <label className="font-poppins text-base tracking-widest mt-6">
            YOUR EMAIL
          </label>
          <input
            type="text"
            // required
            name="from_email"
            value={contactForm.email}
            onChange={(e) => {
              setContactForm((prevState) => ({
                ...prevState,
                email: e.target.value,
              }));
            }}
            onBlur={validateFields}
            className={`mt-3 outline-[#002399] caret-[#002399] px-3 w-full font-poppins text-base h-12 align-middle flex items-center bg-[#EBEBEB] mt- border border-solid ${
              errors.email.length ? "border-red-500" : "border-[#D2D2D2]"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 font-poppins text-sm mt-1">
              {errors.email}
            </p>
          )}

          <label className="font-poppins text-base mt-6 flex justify-between gap-2 items-end">
            <span className="tracking-widest">MESSAGE</span>{" "}
            <p className="whitespace-nowrap text-right text-xs text-lightdark font-poppins">
              Maximum length: 150 characters
            </p>
          </label>
          <textarea
            name="message"
            value={contactForm.message}
            maxLength={150}
            onChange={(e) => {
              setContactForm((prevState) => ({
                ...prevState,
                message: e.target.value,
              }));
            }}
            onBlur={validateFields}
            className={`mt-3 outline-[#002399] caret-[#002399] px-3 py-2 w-full font-poppins text-base h-[112px] resize-none align-middle flex items-center bg-[#EBEBEB] mt- border border-solid  ${
              errors.message.length ? "border-red-500" : "border-[#D2D2D2]"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 font-poppins text-sm mt-1">
              {errors.message}
            </p>
          )}

          <button
            disabled={isSending}
            className="flex justify-center items-center w-full h-12 mt-8 bg-[#002399]"
          >
            {isSending ? (
              <PropagateLoader size={15} className="-mt-3" color="#FFFFFF" />
            ) : (
              <span className="font-poppins font-medium text-white text-lg">
                Send Message
              </span>
            )}
          </button>
        </form>
      </div>
      <FloatingBlob />
    </div>
  );
};

export default Form;
