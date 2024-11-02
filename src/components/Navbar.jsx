import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher"

const Navbar = ({textcolor,font,justify,scrollbg,logo}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/properties", label: "Properties" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact Us" },
    { path: "/blogs", label: "Blogs" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? `bg-${scrollbg}` : 'bg-transparent'}`}>
      <div className="max-w-8xl mx-auto px-4 pt-1 lg:px-20">
        <div className="flex items-center lg:space-x-36 justify-between lg:justify-normal h-20">
          <Link to="/" className="flex-shrink-0">
            <img className="h-30 w-30 transition-all duration-300" src={logo} alt="Logo" />
          </Link>
          <div className={`hidden lg:flex items-center justify-${justify} flex-1 space-x-6`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-${font} transition-all duration-300 px-2 py-2 rounded-md ${
                  location.pathname === item.path
                    ? 'text-[#F2762E] bg-opacity-20 bg-[#F2762E]'
                    : `text-${textcolor} hover:text-[#F2762E]`
                }`}
              >
                {item.label} 
              </Link>
            ))}
          </div>

          <Link to="/buy-property" className="hidden lg:block">
            <button className={`py-2 px-8  transition-all duration-300 font-medium border-2 border-white text-black bg-white '
            }`}>
              Find Properties
            </button>
          </Link>
          <LanguageSwitcher />

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#F2762E] transition-colors duration-300"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden bg-black w-64 overflow-y-auto ease-in-out transition-all duration-300 z-50`}
      >
        <div className="p-5">
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-white hover:text-[#F2762E] transition-colors duration-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="mt-10 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'bg-[#F2762E] text-white'
                    : 'text-white hover:bg-[#F2762E] hover:text-white'
                }`}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/buy-property" className="block py-4">
              <button className="w-full text-black py-2 px-8 rounded-full bg-[#F2762E] hover:bg-opacity-90 transition-all duration-300 text-base font-medium">
                Find Properties
              </button>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;