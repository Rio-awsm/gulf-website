import React from "react";
import img from "/assets/serviceSection.webp";
import { Slice } from "lucide-react";
import { Slide } from "react-awesome-reveal";

const BecomeOwners = () => {
  return (
    <section className="lg:py-12 py-8 relative flex lg:flex-col items-center justify-center lg:min-h-screen w-full mt-[20%] lg:mt-0">
      <div className="relative items-center justify-center flex flex-col px-4 lg:px-0 text-center">
        <Slide direction="down">
          <h1 className="uppercase font-bebas text-6xl  lg:text-9xl text-white mt-12 lg:mt-20">
            BECOME AN INVESTOR
          </h1>
        </Slide>
        <Slide direction="up">
          <p className="text-lg lg:text-2xl text-white mt-4 lg:mt-6 lg:px-40 px-4">
            Contact Gulf Estates for the finest properties.
          </p>
        </Slide>

        <Slide direction="up">
          <button className="mt-4 lg:mt-8 bg-orange-500 text-white hover:text-black px-6 py-2 lg:px-8 lg:py-3 hover:bg-white duration-150 font-bold rounded-md lg:rounded-none">
            Contact Us
          </button>
        </Slide>
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
