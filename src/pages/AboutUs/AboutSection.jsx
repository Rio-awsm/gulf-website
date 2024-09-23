import React from "react";
import abotimg from "/assets/aboutsectionImg.webp";

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto pt-8">
      <div className="flex my-8 lg:gap-16 lg:flex-row flex-col">
        <img src={abotimg} alt="img" />

        <div className=" lg:my-8 mx-6 lg:mx-0 ">
          <h2 className="font-bebas lg:text-8xl text-6xl tracking-wider text-[#024959]">
            OUR STORY
          </h2>
          <p className="lg:text-6xl text-4xl tracking-wider text-[#F2762E] mt-2 lg:ml-20 font-bebas">
            ABOUT GULF ESTATES
          </p>

          <div className="lg:text-right lg:px-24 lg:text-lg pr-12 pt-6 text-black/60">
            Welcome to Gulf Estates, where we turn houses into homes and dreams
            into reality. At Gulf Estates, we understand that a home is more
            than just a physical space; it’s a place where memories are created,
            families grow, and life unfolds. At Gulf Estates, our unwavering
            commitment lies in crafting unparalleled real estate journeys. Our
            seasoned professionals, armed with extensive market knowledge, walk
            alongside you through every phase of your property endeavor. We
            prioritize understanding your unique aspirations, tailoring our
            expertise to match your vision.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
