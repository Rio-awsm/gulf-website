import React from "react";
import { Link } from "react-router-dom";

const Brandcard = ({ img, heading, subheading1, subheading2, link }) => {
  return (
    <Link to={link} className="block overflow-hidden group">
      <div className="relative">
        <img
          src={img}
          alt="hero"
          className="mx-auto object-cover w-full transition-all duration-300 ease-in-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>

        <div className="text-4xl uppercase text-left text-white lg:tracking-wider absolute top-[12%] left-5 z-10 cinzel-font transition-all duration-300 ease-in-out group-hover:translate-x-2">
          {heading}
          <p className="lg:text-sm text-xl w-[370px] font-sans pt-6 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
            {subheading1} 
          </p>

          <div className="relative inline-block mt-8">
            <p className="text-lg font-sans font-semibold transition-all duration-300 ease-in-out group-hover:text-yellow-300">
              Find a Home <span className="ml-1 transition-all duration-300 ease-in-out group-hover:ml-2">→</span>
            </p>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Brandcard;