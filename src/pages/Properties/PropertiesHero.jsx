import React from 'react'
import Propertiesimg from "/assets/Propertiesimg.webp";
import PropertiesSearchBar from "../../components/PropertiesSearchBar"

const PropertiesHero = () => {
  return (

    <section className="lg:py-12 relative flex lg:flex-col items-center justify-center lg:min-h-screen w-full">
    <div className="relative items-center justify-center flex flex-col">
      <h1 className=" uppercase font-bebas text-4xl lg:text-9xl text-white text-center lg:mt-20 md:mt-28 mt-28">
      Browse Our Extensive <br /> Property Listings
      </h1>
      <div className="">
          <PropertiesSearchBar />
        </div>
      
    </div>

    <div
      className="absolute w-full h-screen bg-cover -z-10"
      style={{
        backgroundImage: `url(${Propertiesimg})`,
      }}
    />
  </section>

  );
};


export default PropertiesHero