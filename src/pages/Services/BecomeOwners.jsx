import React from "react";
import img from "/assets/serviceSection.webp";

const BecomeOwners = () => {
  return (
    <section className="lg:py-12 relative flex lg:flex-col items-center justify-center mt-[20%] lg:mt-0 lg:min-h-screen w-full">
      <div className="relative items-center justify-center flex flex-col">
        <h1 className=" uppercase font-bebas text-4xl lg:text-9xl text-white text-center mt-20">
          BECOME A OWNER
        </h1>
        <p className="lg:text-2xl text-white text-center mt-6 lg:px-40 px-12 pb-10">
          Buy properties on Gulf Real Estates
        </p>

        <button className="mt-4 lg:mt-8 bg-orange-500 text-white hover:text-black px-8 py-3 hover:bg-white duration-150 font-bold">
          Contact Us
        </button>
      </div>

      <div
        className="absolute w-full h-[50vh] lg:h-screen bg-cover -z-10"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
    </section>
  );
};

export default BecomeOwners;
