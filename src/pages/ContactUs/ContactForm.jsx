import React, { useState } from "react";
import form from "/assets/form.webp";
import { Slide } from "react-awesome-reveal";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://gulf-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus({ type: "error", message: "Failed to send message. Please try again." });
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "An error occurred. Please try again later." });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen px-6 lg:px-32 pt-12 mb-10">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <img
          src={form}
          alt="Contact Form Background"
          className="w-full h-64 lg:h-[95%] object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-10 space-y-6">
        <Slide direction="right">
          <h1 className="text-5xl lg:text-9xl font-bebas text-[#024959]">
            GET IN TOUCH WITH US
          </h1>
        </Slide>
        
        {submitStatus.message && (
          <div className={`p-4 rounded-md ${
            submitStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone No"
            required
            className="px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="px-4 py-10 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-[#F2762E] text-white px-6 py-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;