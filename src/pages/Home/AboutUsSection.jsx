import React from "react";
import aboutimg from "/assets/aboutsection.svg";
import { Link } from "react-router-dom";
import HeadingCapsule from "../../components/HeadingCapsule";
import { Fade, Slide } from "react-awesome-reveal";

const AboutUsSection = () => {
  return (
    <section className="max-w-8xl mx-auto px-5 lg:py-5 lg:px-20">
      <div className="flex lg:flex-row flex-col-reverse lg:gap-16 gap-5">
        <img src={aboutimg} alt="about" className="mx-auto" />

        <div className="pt-12">
          <Slide direction="down">
            <HeadingCapsule text={"About Us"} />
          </Slide>
          <Slide direction="right">
            <h1 className="text-[#024959] font-bebas text-7xl mb-2">
              YOUR TRUSTED REAL ESTATE
            </h1>
            <h1 className="text-[#024959] font-bebas text-7xl mb-2">
              PARTNER IN DUBAI.
            </h1>
          </Slide>

          <Slide direction="up">
            <div className="text-xl text-black/60 pt-5 pr-14">
              Welcome to Gulf Estates, where your dream of finding a home in
              Dubai becomes a reality. Our services ensure connecting the
              investors and end users to the finest of properties available in
              the market.
            </div>
          </Slide>

          <Slide direction="up" className="pt-10">
            <Link to="/about">
              <button
                className={`py-2 px-8  transition-all duration-300 text-lg font-medium border-2 border-[#F2762E] text-white hover:bg-[#024959] bg-[#F2762E] hover:text-white'
            }`}
              >
                Read More
              </button>
            </Link>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
