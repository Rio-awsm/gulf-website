import React from "react";
import ServiceCard from "../../components/ServiceCard";
import service1 from "/assets/service1.webp";
import service2 from "/assets/service2.webp";
import service3 from "/assets/service3.webp";
import { Slide } from "react-awesome-reveal";

const ServicesSection = () => {
  return (
    <section className="pb-6 overflow-hidden">
      <Slide direction="down">
        <h1 className="text-[#024959] font-bebas text-7xl pt-12 lg:pt-0 lg:text-8xl mb-2 text-center">
          WHAT WE DO?
        </h1>
      </Slide>

      <div className="flex flex-col lg:flex-row gap-12 justify-center items-center py-6 px-2">
        <Slide>
          <ServiceCard
            img={service1}
            heading={"BUY A NEW HOME"}
            text={
              "Thousands of homes, Gulf Estates can match you with a house you want to call home."
            }
            button={"Find A Home"}
          />
        </Slide>

        <Slide direction="up">
          <ServiceCard
            img={service2}
            heading={"RENT A HOME"}
            text={
              "With filters and custom searches, Gulf Estates helps you easily find a house you'll love."
            }
            button={"Find A Rental"}
          />
        </Slide>

        <Slide direction="right">
          <ServiceCard
            img={service3}
            heading={"SELL A HOME"}
            text={
              "With quick support, Gulf Estates can help you easily sell your home or apartment quickly."
            }
            button={"Submit Property"}
          />
        </Slide>
      </div>
    </section>
  );
};

export default ServicesSection;
