import React from 'react';
import form from "/assets/form.webp";

function ContactForm() {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen px-6 lg:px-32 py-12">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <img 
          src={form} 
          alt="Contact Form Background" 
          className="w-full h-64 lg:h-[95%] object-cover" 
        />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-10 space-y-6">
        <h1 className="text-5xl lg:text-9xl font-bebas text-[#024959]">GET IN TOUCH WITH US</h1>
        <form className="flex flex-col space-y-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea 
            placeholder="Message" 
            className="px-4 py-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            rows="4"
          ></textarea>
          <button 
            type="submit" 
            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
