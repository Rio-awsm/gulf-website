import React, { useEffect, useState } from "react";
import heroimg from "/assets/hero.webp";
import PropertySearchBar from "../../components/PropertiesSearchBar";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="lg:flex justify-between bg-[#024959] overflow-hidden">
      <div
        className={`lg:pt-36 pt-28 lg:pl-20 pl-5 text-white transform transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="font-bebas lg:text-9xl text-left text-7xl">
          TURNING DREAMS
        </h1>
        <p className="font-bebas lg:text-9xl text-left text-7xl">
          INTO ADDRESSES<span className="text-[#F2762E]">.</span>
        </p>
        <div className="text-white/60 lg:w-[900px] lg:text-2xl py-4 text-lg lg:pr-36">
          Find your dream property with Gulf Estates, where our expert guidance
          will connect you with the property of your dreams. Let's embark on the
          journey to find your ideal home!
        </div>
        <div>
          <PropertySearchBar />
        </div>
      </div>

      <div
        className={`transform transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <img src={heroimg} alt="heroimg" />
      </div>
    </section>
  );
};

export default Hero;
