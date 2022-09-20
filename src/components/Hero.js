import React from "react";
import "../sass/Hero.scss";
import Illu from "./Illu";
// import img from "../assets/download.png";
function Hero() {
  return (
    <>
     <span className="scroll">Keep scrolling v</span>
     <span  className="spinner"></span>
      <div className="hero-flex  md:px-[12vw] flex gap-[5rem] md:gap-0 justify-center items-center md:justify-between md:flex-row flex-col-reverse md:mt-[9vw] mt-[14vh] w-full ">
        {/* <div className="shadow"></div>
        <div className="shadow"></div> */}
        <div className="left ">
          <div className="h1">
            Design <span>&</span> <br />
            Functionality
          </div>
          <svg
            className="svg md:top-[10%] md:right-[40%] top-[47%] right-[10%]"
            width="89"
            height="114"
            viewBox="0 0 89 114"
          >
            <path
              d="M44.5 0L46.5948 16.8652C49.0848 36.9114 64.3837 52.9193 84.1901 56.2026L89 57L84.1901 57.7974C64.3837 61.0807 49.0848 77.0886 46.5948 97.1348L44.5 114L42.4052 97.1348C39.9152 77.0886 24.6163 61.0807 4.8099 57.7973L0 57L4.80991 56.2026C24.6163 52.9193 39.9152 36.9114 42.4052 16.8652L44.5 0Z"
              fill="white"
            />
          </svg>

          <div className="h3">
            Hi! My Name Is Raju.
            <br />
            I’m Fullstack Web Developer.
          </div>
          <div className="button w-fit mt-8 px-[4.4rem] py-[1.3rem] text-xl">work</div>
        </div>
        <div className="right  h-[80vw] md:h-[30vw] w-[80vw] md:w-[30vw] flex">
          <Illu className="illu" />
        </div>
      </div>
      <div className="h-[300vh]"></div>
    </>
  );
}

export default Hero;
