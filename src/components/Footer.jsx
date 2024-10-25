import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const sections = [
    {
      title: 'Buy Property',
      links: [{ name: 'Properties for sale', url: '/buy-property' }],
    },
    {
      title: 'Company',
      links: [
        { name: 'About us', url: '/about' },
        { name: 'Services', url: '/services' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'General enquiry', url: '/contact' },
        { name: 'Privacy policy', url: '/privacy-policy' },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-black" />
      
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
             Gulf Estates
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Discover your dream property with our expert guidance and comprehensive property listings.
            </p>
          </div>

          {/* Navigation sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.url}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm inline-block relative group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-200 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {currentYear} Your Brand. All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex space-x-6">
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a> */}
              <a
                href="https://www.instagram.com/gulfestates.ae?igsh=bjZ3MGt2NjdpcGtt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label="Instagram"
              >
                <AiFillInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/gulfestatesae/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;