import React from "react";
import heroimg from "/assets/hero.webp";
import PropertySearchBar from "../../components/PropertySearch";

const Hero = () => {
  return (
    <section className="lg:flex justify-between bg-[#024959]">
      <div className="lg:pt-36 pt-28 lg:pl-20 text-white pl-5">
        <h1 className="font-bebas lg:text-9xl text-8xl">FIND YOUR</h1>
        <p className="font-bebas lg:text-9xl text-8xl">
          DREAM HOME<span className="text-[#F2762E]">.</span>
        </p>
        <div className="text-white/60 lg:w-[700px] lg:text-2xl py-4 text-lg pr-5 lg:pr-0">
          We are a real estate agency that will help you find the best residence
          you dream of, let’s discuss for your dream house?
        </div>
        <div className="">
          <PropertySearchBar />
        </div>
      </div>

      <div>
        <img src={heroimg} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
