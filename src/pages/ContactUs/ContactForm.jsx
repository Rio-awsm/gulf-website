import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import form from "/assets/form.webp";

const CountryCodeSelect = ({ value, onChange }) => {
  const countryCodes = [
    { code: "+1", country: "US" },
    { code: "+44", country: "GB" },
    { code: "+91", country: "IN" },
    { code: "+86", country: "CN" },
    { code: "+81", country: "JP" },
    { code: "+49", country: "DE" },
    { code: "+33", country: "FR" },
    { code: "+39", country: "IT" },
    { code: "+7", country: "RU" },
    { code: "+55", country: "BR" },
    { code: "+61", country: "AU" },
    { code: "+971", country: "AE" },
    { code: "+966", country: "SA" },
    { code: "+20", country: "EG" },
    { code: "+27", country: "ZA" },
  ];

  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="appearance-none w-24 px-2 py-3 border border-gray-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      >
        {countryCodes.map(({ code, country }) => (
          <option key={code} value={code}>
            {code} {country}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
    </div>
  );
};

function ContactForm() {
  const { t } = useTranslation('common');
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
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
        body: JSON.stringify({
          ...formData,
          phone: `${formData.countryCode}${formData.phone}`
        })
      });

      if (response.ok) {
        setSubmitStatus({ 
          type: "success", 
          message: t('contact.form.messages.success') 
        });
        setFormData({ name: "", email: "", countryCode: "+1", phone: "", message: "" });
      } else {
        setSubmitStatus({ 
          type: "error", 
          message: t('contact.form.messages.error') 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: "error", 
        message: t('contact.form.messages.serverError') 
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen px-6 lg:px-32 pt-12 mb-10">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <img
          src={form}
          alt={t('contact.form.alt.contactFormBackground')}
          className="w-full h-64 lg:h-[95%] object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-10 space-y-6">
        <h1 className="text-5xl lg:text-9xl font-bebas text-[#024959]">
          {t('contact.form.headers.getInTouch')}
        </h1>
        
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
            placeholder={t('contact.form.placeholders.name')}
            required
            className="px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('contact.form.placeholders.email')}
            required
            className="px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex">
            <CountryCodeSelect
              value={formData.countryCode}
              onChange={(e) => handleChange({ target: { name: 'countryCode', value: e.target.value } })}
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t('contact.form.placeholders.phone')}
              required
              className="flex-1 px-4 py-3 border border-gray-500 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-l-0"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t('contact.form.placeholders.message')}
            required
            className="px-4 py-10 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-[#F2762E] text-white px-6 py-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            {t('contact.form.buttons.sendMessage')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;