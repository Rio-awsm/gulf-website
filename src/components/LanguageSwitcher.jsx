import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const bubbleRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === i18n.language) || languages[0];
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (bubbleRef.current && !bubbleRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50" ref={bubbleRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-colors duration-300
          ${isOpen 
            ? 'bg-[#F2762E] text-white hover:bg-[#F2762E]/80'
            : 'bg-white text-blue-500 hover:text-[#F2762E]'
          }`}
      >
        <Globe size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 bottom-16 bg-white rounded-md shadow-lg p-4 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`flex items-center space-x-2 w-full px-2 py-1 text-sm transition-colors duration-200
                ${i18n.language === language.code 
                  ? 'bg-[#F2762E] bg-opacity-10 text-[#F2762E] font-medium' 
                  : 'text-gray-700 hover:bg-[#F2762E] hover:bg-opacity-5'
                }`}
            >
              <span>{language.flag}</span>
              <span>{language.name}</span>
              {i18n.language === language.code && (
                <span className="ml-auto text-[#F2762E]">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;