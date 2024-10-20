import React from "react";
import ContactUsforhome from "/assets/ContactUsforhome.webp";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

function ContactUsIntegration() {
  return (
    <section className="py-10 relative flex lg:flex-col items-center justify-center lg:min-h-screen w-full">
      <div className="relative items-center justify-center flex flex-col">
        <Slide>
          <h1 className=" uppercase font-bebas text-5xl lg:text-9xl text-white text-center">
            THINK ZERO PROPERTY TAX. <br /> THINK DUBAI.
          </h1>
        </Slide>

        <p className="lg:text-2xl text-white text-center mt-2 lg:mt-0 px-6">
          Dreaming of a new home or seeking the perfect investment? Our team is
          here to help you every step of the way.
          <br /> Reach out today and let's bring your plan to life!
        </p>
        <Link to="/contact">
          <button className="mt-6 lg:mt-8 bg-white text-black px-6 py-3 hover:bg-orange-500 hover:text-white duration-150 font-bold">
            Contact Us
          </button>
        </Link>
      </div>

      <div
        className="absolute w-full h-[50vh] lg:h-screen bg-cover -z-10"
        style={{
          backgroundImage: `url(${ContactUsforhome})`,
        }}
      />
    </section>
  );
}

export default ContactUsIntegration;
