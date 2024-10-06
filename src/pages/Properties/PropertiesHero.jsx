import React from 'react';
import Propertiesimg from '/assets/Propertiesimg.webp';
import PropertiesSearchBar from '../../components/PropertiesSearchBar';

const PropertiesHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center lg:py-12 lg:min-h-screen w-full min-h-[80vh] overflow-hidden">
      <div className="relative flex flex-col items-center justify-center px-4 lg:px-6">
        <h1 className="uppercase font-bebas text-5xl   lg:text-9xl text-white text-center lg:mt-20  mt-20 leading-tight sm:leading-normal lg:leading-normal">
          Browse Our Extensive <br /> Property Listings
        </h1>
      </div>
        <div className="w-full px-2">
          <PropertiesSearchBar />
        </div>

      <div
        className="absolute w-full h-full lg:h-screen bg-cover -z-10"
        style={{
          backgroundImage: `url(${Propertiesimg})`,
        }}
      />
    </section>
  );
};

export default PropertiesHero;
