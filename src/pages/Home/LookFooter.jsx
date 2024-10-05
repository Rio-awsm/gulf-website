import React from 'react';
import bg from '/assets/bg.webp'; 
import { Link } from 'react-router-dom';

function LookFooter() {
  return (
    <section className="relative flex flex-col lg:flex-row items-start justify-end py-10 px-5 lg:mt-14 lg:px-20">
      <div className="relative w-full lg:w-[50%] lg:pl-10 text-right mt-8 lg:mt-0 z-10 flex flex-col items-center">
        <h1 className="text-5xl lg:text-7xl font-bebas tracking-wide text-[#024959] text-center">
        OWN PROPERTY IN A TAX HAVEN
        </h1>
        <p className="text-gray-500 mt-4 text-base lg:text-lg lg:mt-8 text-center">
        Gulf Estates is your partner in finding the perfect home in Dubai. We specialise in helping you buy, sell, and lease properties. Our services are tailored to your unique needs. Let us help you because your property dreams - our reality. Schedule a call today!
        </p>
        <Link to="/contact" >
        <button className="mt-6 lg:mt-8 bg-orange-500 text-white px-6 py-3 font-bold">
          Read More
        </button>
        </Link>
      </div>
      <div
        className="absolute w-full h-[50vh] lg:h-screen pt-4 inset-0 bg-cover z-0 top-[100%] lg:top-0" 
        style={{
          backgroundImage: `url(${bg})`,
        }}
      />
    </section>
  );
}

export default LookFooter;
