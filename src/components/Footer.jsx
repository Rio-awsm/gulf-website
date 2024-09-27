import React from 'react';

const Footer = () => {
  const sections = [
    {
      title: 'Buy Property',
      links: ['Properties for sale', "Buyer's guide"],
    },
    {
      title: 'Sell Property',
      links: ['List your property', 'Seller guide'],
    },
    {
      title: 'Rent Property',
      links: ['Properties for rent', "Tenant's guide"],
    },
    {
      title: 'Blog',
      links: ['Explore blogs', 'Popular tags'],
    },
    {
      title: 'Company',
      links: ['About us', 'Leadership'],
    },
    {
      title: 'Contact',
      links: ['General enquiry', 'Privacy policy'],
    },
  ];

  return (
    <footer className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;