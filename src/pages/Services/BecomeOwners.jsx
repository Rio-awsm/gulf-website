import React from "react";
import img from "/assets/serviceSection.webp";

const BecomeOwners = () => {
  return (
    <section className="lg:py-12 py-8 relative flex lg:flex-col items-center justify-center lg:min-h-screen w-full mt-[20%] lg:mt-0">
      <div className="relative items-center justify-center flex flex-col px-4 lg:px-0 text-center">
        <h1 className="uppercase font-bebas text-3xl md:text-5xl lg:text-9xl text-white mt-12 lg:mt-20">
          BECOME AN OWNER
        </h1>
        <p className="text-base md:text-lg lg:text-2xl text-white mt-4 lg:mt-6 lg:px-40 px-4">
          Buy properties on Gulf Real Estates
        </p>

        <button className="mt-4 lg:mt-8 bg-orange-500 text-white hover:text-black px-6 py-2 lg:px-8 lg:py-3 hover:bg-white duration-150 font-bold rounded-md lg:rounded-none">
          Contact Us
        </button>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-[40vh] md:h-[60vh] lg:h-screen bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
    </section>
  );
};

export default BecomeOwners;
