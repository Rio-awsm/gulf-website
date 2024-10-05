import React from "react";
import aboutimg from "/assets/aboutsection.webp";
import { Link } from "react-router-dom";
import HeadingCapsule from "../../components/HeadingCapsule";

const AboutUsSection = () => {
  return (
    <section className="max-w-8xl mx-auto px-5 lg:py-5 lg:px-20">
      <div className="flex lg:flex-row flex-col-reverse lg:gap-16 gap-5">
        <img src={aboutimg} alt="about" className="mx-auto" />

        <div className="pt-12">
        <div><HeadingCapsule text={"About Us"} /></div>
          <h1 className="text-[#024959] font-bebas text-7xl mb-2">
          YOUR TRUSTED REAL ESTATE,
          </h1>
          <h1 className="text-[#024959] font-bebas text-7xl mb-2">
          PARTNER IN DUBAI.
          </h1>

          <div className="text-xl text-black/60 pt-5 pr-20">
            Welcome to Gulf Estates, where we turn houses into homes and dreams
            into reality. At Gulf Estates, we understand that a home is more
            than just a physical space; it’s a place where memories are created,
            families grow, and life unfolds.
          </div>

          <div className="pt-10">
          <Link to="/about">
            <button className={`py-2 px-8  transition-all duration-300 text-lg font-medium border-2 border-[#F2762E] text-white hover:bg-[#024959] bg-[#F2762E] hover:text-white'
            }`}>
              Read More
            </button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
