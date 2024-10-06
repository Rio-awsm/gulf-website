import React from "react";
import abotimg from "/assets/aboutsectionImg.webp";
import { Slide } from "react-awesome-reveal";

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto pt-8">
      <div className="flex my-8 lg:gap-16 lg:flex-row flex-col">
        <img src={abotimg} alt="img" />

        <div className=" lg:my-8 mx-6 lg:mx-0 ">
          <Slide>
            <h2 className="font-bebas lg:text-8xl text-6xl tracking-wider text-[#024959]">
              OUR STORY
            </h2>
          </Slide>
          <Slide direction="right">
            <p className="lg:text-6xl text-4xl tracking-wider text-[#F2762E] mt-2 lg:ml-20 font-bebas">
              ABOUT GULF ESTATES
            </p>
          </Slide>

          <div className="lg:text-left lg:px-24 lg:text-lg pr-12 pt-6 text-black/60">
            <Slide>
              <p className="mb-4">
                {" "}
                Welcome to the Gulf Estates, where your dream of finding a home
                in Dubai becomes a reality. Our services ensure connecting the
                perfect buyer to the finest of properties available in the
                market.
              </p>
            </Slide>
            <Slide direction="right">
              <p className="mb-4">
                Our mission is to provide seamless and professional real estate
                services to the people who are seeking luxury, comfort, and a
                sound investment. We believe in transparency with our clients
                with a sincere commitment.
              </p>
            </Slide>
            <Slide>
              <p className="mb-4">
                Our vision not only includes finding the right property for our
                client, but to leave a lasting impression. We guide them through
                every step of their property buying journey. We help our clients
                to make informed and confident decisions in the market.
              </p>
            </Slide>
            <Slide direction="right">
              {" "}
              Our seasoned professionals possess a deep understanding of Dubai's
              real estate market. Our expert knowledge combined with
              personalised service gives a unique buying experience. Let us be
              your trusted partner in finding the property you can call home!
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
