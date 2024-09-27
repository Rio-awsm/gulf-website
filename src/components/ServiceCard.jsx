import React from 'react';

const ServiceCard = ({ img, heading, text, button }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg pb-3 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 group">
      <div className="overflow-hidden">
        <img
          className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={img}
          alt="House"
        />
      </div>
      <div className="px-6 py-4">
        <div className="text-4xl my-2 text-center font-bebas text-[#024959] transition-colors duration-300 ease-in-out group-hover:text-[#036c82]">
          {heading}
        </div>
        <p className="text-gray-700 text-center transition-colors duration-300 ease-in-out group-hover:text-gray-900">
          {text}
        </p>
      </div>
      <div className="px-6 py-4 flex justify-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
          {button}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;