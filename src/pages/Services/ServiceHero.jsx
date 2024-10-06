import React from "react";
import servicehero from "/assets/serviceHero.webp";
import { Slide } from "react-awesome-reveal";

const ServiceHero = () => {
  return (
    <section className="lg:py-12 relative flex lg:flex-col items-center justify-center lg:min-h-screen w-full">
      <div className="relative items-center justify-center flex flex-col z-10"> 
        <Slide>
          <h1 className="uppercase font-bebas text-5xl lg:text-9xl text-white text-center mt-24">
            YOUR PATHWAY TO <br /> INVESTMENT SUCCESS
          </h1>
        </Slide>
        <Slide direction="up">
          <p className="lg:text-2xl text-white text-center mt-4 lg:mt-0 lg:px-40 px-12 pb-10">
            We assist you with every step of your real estate journey, making the
            process of buying, selling, or investing hassle-free. Our personalised
            approach and expertise will help you turn your property ambitions into
            reality and set the foundation for your success.
          </p>
        </Slide>
      </div>


      <div
        className="absolute w-full h-[60vh] lg:h-screen bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${servicehero})`,
        }}
      >
    
        <div className="absolute inset-0 bg-black opacity-35"></div> 
      </div>
    </section>
  );
};

export default ServiceHero;
