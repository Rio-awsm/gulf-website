import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseString } from 'xml2js';
import { SliderInput } from './components/SliderInput';
import { FilterDropdown } from './components/FilterDropdown';
import { SearchInput } from './components/SearchInput';
import { PropertyCard } from './components/PropertyCard';

const ShowProperty = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [selectedBedrooms, setSelectedBedrooms] = useState('');
  const [selectedBathrooms, setSelectedBathrooms] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://gulf-backend.onrender.com/api/xmlfeed');
        parseString(response.data, (err, result) => {
          if (err) {
            setError('Error parsing XML data');
            setIsLoading(false);
          } else {
            const propertyList = result.list.property || [];
            setProperties(propertyList);
            setFilteredProperties(propertyList);
            setIsLoading(false);
          }
        });
      } catch (err) {
        setError('Failed to fetch properties: ' + err.message);
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    let result = properties.filter(property => {
      const price = parseInt(property.price[0]);
      return (
        price >= priceRange[0] &&
        price <= priceRange[1] &&
        (selectedBedrooms === '' || property.bedroom[0] === selectedBedrooms) &&
        (selectedBathrooms === '' || property.bathroom[0] === selectedBathrooms) &&
        (property.title_en[0].toLowerCase().includes(searchTerm.toLowerCase()) ||
         property.community[0].toLowerCase().includes(searchTerm.toLowerCase()) ||
         property.city[0].toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });

    if (sortOption === 'price-asc') {
      result.sort((a, b) => parseInt(a.price[0]) - parseInt(b.price[0]));
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => parseInt(b.price[0]) - parseInt(a.price[0]));
    }

    setFilteredProperties(result);
  }, [properties, priceRange, selectedBedrooms, selectedBathrooms, searchTerm, sortOption]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#F2762E]"></div>
    </div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  const maxPrice = Math.max(...properties.map(p => parseInt(p.price[0])));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#024959] mb-8">Property Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <SliderInput
          min={0}
          max={maxPrice}
          step={100000}
          value={priceRange}
          onChange={setPriceRange}
          label="Price Range (AED)"
        />
        <FilterDropdown
          options={['', ...new Set(properties.map(p => p.bedroom[0]))].sort()}
          value={selectedBedrooms}
          onChange={setSelectedBedrooms}
          label="Bedrooms"
        />
        <FilterDropdown
          options={['', ...new Set(properties.map(p => p.bathroom[0]))].sort()}
          value={selectedBathrooms}
          onChange={setSelectedBathrooms}
          label="Bathrooms"
        />
        <FilterDropdown
          options={[
            { value: '', label: 'Default' },
            { value: 'price-asc', label: 'Price: Low to High' },
            { value: 'price-desc', label: 'Price: High to Low' }
          ]}
          value={sortOption}
          onChange={setSortOption}
          label="Sort By"
        />
      </div>
      <SearchInput value={searchTerm} onChange={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredProperties.map(property => (
          <PropertyCard key={property.reference_number[0]} property={property} />
        ))}
      </div>
    </div>
  );
};

export default ShowProperty;