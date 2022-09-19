import React from "react";
import "../sass/Hero.scss";
import img from "../assets/download.png";
function Hero() {
  return (
    <>
      <div className="hero-flex px-[7vw] flex justify-between md:flex-row flex-col-reverse md:mt-[9vw] mt-[14vh] w-full">
        {/* <div className="shadow"></div>
        <div className="shadow"></div> */}
        <div className="left">
          <div className="h1">
            Design <span>&</span> <br />
            Functionality
          </div>
          <svg className="svg" width="89" height="114" viewBox="0 0 89 114">
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
          <div className="button">explore</div>
        </div>
        <div className="right  h-[80vw] md:h-[30vw] w-[80vw] md:w-[30vw] flex">
          <img src={img} className="illu" />
        </div>
      </div>
    </>
  );
}

export default Hero;
