import React from 'react';
import { SlLocationPin } from 'react-icons/sl';
import { PiBed } from "react-icons/pi";
import { FaBath } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";

function PropertyCard({ image, title, location, details, price }) {
  return (
    <div className="bg-white shadow-lg overflow-hidden max-w-md mx-auto border rounded-lg transform transition duration-500 hover:scale-105 w-full lg:h-[500px]">
      <img src={image} alt={title} className="w-full h-60 object-cover" />

      <div className="p-8">
        <h2 className="text-3xl font-bebas mb-2">{title}</h2>

        <p className="text-gray-500 mb-4">
          <span className="inline-block align-middle">
            <SlLocationPin className="mr-2 text-black font-extrabold" />
          </span>
          {location}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">

            <span className="mr-4 gap-2 flex items-center">
            <PiBed className='h-6 w-6' />
              {details.bedrooms}
            </span>

            <span className="mr-4 gap-2 flex items-center">
            <FaBath className='h-6 w-6'/>
              {details.bathrooms}
            </span>

            <span className="flex gap-2 items-center">
            <TbRulerMeasure className='h-6 w-6'/>
              {details.area} m²
            </span>
          </div>
        </div>

        <div className="text-orange-600 text-3xl font-bold">
          {price} <span className="text-sm text-gray-500">per year</span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
