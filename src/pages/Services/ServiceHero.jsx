import React from "react";
import servicehero from "/assets/serviceHero.webp";

const ServiceHero = () => {
  return (
    <section className="lg:py-12 relative flex lg:flex-col items-center justify-center lg:min-h-screen w-full">
      <div className="relative items-center justify-center flex flex-col">
        <h1 className=" uppercase font-bebas text-4xl lg:text-9xl text-white text-center mt-20">
          YOUR PATHWAY TO <br /> INVESTMENT SUCCESS
        </h1>
        <p className="lg:text-2xl text-white text-center mt-4 lg:mt-0 lg:px-40 px-12 pb-10">
        We assist you with every step of your real estate journey, making the process of buying, selling, or investing hassle-free. Our personalised approach and expertise will help you turn your property ambitions into reality and set the foundation for your success.
        </p>
        
      </div>

      <div
        className="absolute w-full h-[50vh] lg:h-screen bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${servicehero})`,
        }}
      />
    </section>
  );
};

export default ServiceHero;
