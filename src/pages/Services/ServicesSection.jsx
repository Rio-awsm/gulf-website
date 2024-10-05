import React from "react";
import ServiceCard from "../../components/ServiceCard";
import service1 from "/assets/service1.webp"
import service2 from "/assets/service2.webp"
import service3 from "/assets/service3.webp"

const ServicesSection = () => {
  return (
    <section className="py-6">
      <h1 className="text-[#024959] font-bebas text-7xl pt-12 lg:pt-0 lg:text-8xl mb-2 text-center">
        WHAT WE DO?
      </h1>

      <div className="flex flex-col lg:flex-row gap-12 justify-center items-center py-6 px-2">
        <ServiceCard img={service1} heading={"BUY A NEW HOME"} text={"Thousands of homes, Gulf Estates can match you with a house you want to call home."} button={"Find A Home"} />
        <ServiceCard img={service2} heading={"RENT A HOME"} text={"With filters and custom searches, Gulf Estates helps you easily find a house you'll love."} button={"Find A Rental"} />
        <ServiceCard img={service3} heading={"SELL A HOME"} text={"With quick support, Gulf Estates can help you easily sell your home or apartment quickly."} button={"Submit Property"} />
      </div>
    </section>
  );
};

export default ServicesSection;
