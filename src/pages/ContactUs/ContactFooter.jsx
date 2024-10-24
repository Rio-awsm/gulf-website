import React from 'react';
import info from '/assets/info.webp';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

function ContactFooter() {
  return (
    <div className="relative w-full px-6 pt-12">
     
      <div className="flex flex-col md:flex-row h-full w-full">

        <div className="relative z-10 p-8 md:p-16 lg:p-24 text-gray-800 flex-1">
          <h1 className="lg:text-6xl text-4xl text-[#024959] mb-6 font-bebas">CONTACT US</h1>

          <div className="mb-4">
            <h2 className="text-3xl font-bebas text-[#F2762E] mb-2">ADDRESS</h2>
            <p className="text-sm">
              602, Al Habtoor Business Tower, Dubai Marina, P.O. Box 74461, Dubai, United Arab Emirates
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-3xl font-bebas text-[#F2762E] mb-2">WORKING HOURS</h2>
            <p className="text-sm">Monday - Saturday (09:00 AM - 06:00 PM GST)</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            <div className="mt-3">
              <h2 className="text-3xl font-bebas text-[#F2762E] mb-2">INFORMATION</h2>
              <p className="text-sm">
                +971 4 873 5835
                <br />
                hello@gulfestates.ae
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bebas text-[#F2762E] mb-2">FOLLOW US</h2>
              <div className="flex space-x-4">
                <FaFacebook className="w-6 h-6" />
                <AiFillInstagram className="w-6 h-6" />
                <FaLinkedin className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-64 md:h-auto w-full md:w-1/2">
          <img
            src={info}
            alt="Building"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactFooter;
