import React from "react";
import heroimg from "/assets/hero.webp";
import PropertySearch from "../../components/PropertySearch";
import PropertySearchBar from "../../components/PropertiesSearchBar";

const Hero = () => {
  return (
    <section className="lg:flex justify-between bg-[#024959] overflow-hidden">
      <div className="lg:pt-36 pt-28 lg:pl-20 text-white pl-5">
        <h1 className="font-bebas lg:text-9xl text-center lg:text-left text-8xl">TURNING DREAMS </h1>
        <p className="font-bebas lg:text-9xl text-center lg:text-left text-8xl">
        INTO ADDRESSES<span className="text-[#F2762E]">.</span>
        </p>
        <div className="text-white/60 lg:w-[900px] lg:text-2xl py-4 text-lg pr-5 lg:pr-0">
        Find your dream property with Gulf Estates, where our expert guidance will connect you with the property of your dreams. Let's embark on the journey to find your ideal home! 
        </div>
        <div className=" ">
          <PropertySearchBar />
        </div>
      </div>

      <div>
        <img src={heroimg} alt="heroimg" />
      </div>
    </section>
  );
};

export default Hero;
