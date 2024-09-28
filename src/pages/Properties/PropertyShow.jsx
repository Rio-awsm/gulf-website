import React, { useState } from 'react';
import PropertyCard from '../../components/PropertyCard';
import propimg from "/assets/propimg.svg";

function PropertyShow() {
  const properties = [
    {
      image: propimg,
      title: "DEC Tower 3, Dubai Marina",
      location: "Blacksmith, Wyndham Hotel Dubai Marina, Jebel Ali, Dubai, United Arab Emirates",
      details: { bedrooms: 1, bathrooms: 1, area: 516 },
      price: "AED 59,999",
    },
    {
      image: propimg,
      title: "Burj Khalifa, Downtown Dubai",
      location: "1 Sheikh Mohammed bin Rashid Blvd, Dubai, United Arab Emirates",
      details: { bedrooms: 2, bathrooms: 2, area: 850 },
      price: "AED 120,000",
    },
    {
      image: propimg,
      title: "The Palm Tower, Palm Jumeirah",
      location: "Palm Jumeirah, Dubai, United Arab Emirates",
      details: { bedrooms: 3, bathrooms: 3, area: 1500 },
      price: "AED 300,000",
    },
    {
      image: propimg,
      title: "Sky View Tower, Downtown Dubai",
      location: "Downtown Dubai, Dubai, United Arab Emirates",
      details: { bedrooms: 2, bathrooms: 2, area: 1400 },
      price: "AED 200,000",
    },
    {
      image: propimg,
      title: "Bluewaters Island, Dubai",
      location: "Bluewaters Island, Dubai, United Arab Emirates",
      details: { bedrooms: 4, bathrooms: 4, area: 2000 },
      price: "AED 500,000",
    },
    {
      image: propimg,
      title: "Address Sky View, Downtown Dubai",
      location: "Address Sky View, Dubai, United Arab Emirates",
      details: { bedrooms: 2, bathrooms: 3, area: 1600 },
      price: "AED 250,000",
    },
  ];


  const [visibleProperties, setVisibleProperties] = useState(6);

  const loadMoreProperties = () => {
    setVisibleProperties((prevCount) => prevCount + 6);
  };

  return (
    <main className="min-h-screen p-8">
      <section className="text-center uppercase lg:mb-20 mb-8">
        <h1 className="lg:text-6xl text-4xl text-[#024959] font-bebas">All Best Property</h1>
        <p className='text-xs lg:text-xl lg:my-3 my-2'>Explore a diverse range of homes, from cozy apartments to spacious estates.</p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:px-28">
        {Array(Math.ceil(visibleProperties / properties.length))
          .fill(properties)
          .flat()
          .slice(0, visibleProperties)
          .map((property, index) => (
            <PropertyCard
              key={index}
              image={property.image}
              title={property.title}
              location={property.location}
              details={property.details}
              price={property.price}
            />
          ))}
      </section>

      <div className="flex justify-center mt-10">
        <button
          className="bg-[#F2762E] text-white px-6 py-3 uppercase hover:bg-orange-700 transition"
          onClick={loadMoreProperties}
        >
          Load More
        </button>
      </div>
    </main>
  );
}

export default PropertyShow;
