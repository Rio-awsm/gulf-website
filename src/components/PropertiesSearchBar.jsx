import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const properties = [
  { id: 1, type: 'Apartment', neighborhood: 'Downtown', keywords: ['modern', 'spacious'], price: 1500, bedrooms: 2 },
  { id: 2, type: 'House', neighborhood: 'Suburbs', keywords: ['family-friendly', 'garden'], price: 2500, bedrooms: 4 },
  { id: 3, type: 'Condo', neighborhood: 'Beachfront', keywords: ['ocean view', 'luxury'], price: 3000, bedrooms: 3 },
  { id: 4, type: 'Villa', neighborhood: 'Countryside', keywords: ['serene', 'private pool'], price: 4500, bedrooms: 5 },
  { id: 5, type: 'Townhouse', neighborhood: 'Financial District', keywords: ['city view', 'modern'], price: 3500, bedrooms: 3 },
  { id: 6, type: 'Loft', neighborhood: 'Midtown', keywords: ['artsy', 'exposed brick'], price: 2800, bedrooms: 2 },
  { id: 7, type: 'Apartment', neighborhood: 'University Area', keywords: ['student-friendly', 'affordable'], price: 1200, bedrooms: 1 },
  { id: 8, type: 'Penthouse', neighborhood: 'Downtown', keywords: ['luxury', 'skyline view'], price: 5500, bedrooms: 4 },
  { id: 9, type: 'Cottage', neighborhood: 'Lakefront', keywords: ['cozy', 'waterfront'], price: 2000, bedrooms: 2 },
  { id: 10, type: 'Condo', neighborhood: 'Beachfront', keywords: ['private beach', 'modern'], price: 3200, bedrooms: 3 },
  { id: 11, type: 'House', neighborhood: 'Countryside', keywords: ['family-friendly', 'nature'], price: 2400, bedrooms: 3 },
  { id: 12, type: 'Apartment', neighborhood: 'Downtown', keywords: ['central location', 'pet-friendly'], price: 1600, bedrooms: 1 },
  { id: 13, type: 'Villa', neighborhood: 'Suburbs', keywords: ['private garden', 'luxury'], price: 4700, bedrooms: 5 },
  { id: 14, type: 'Townhouse', neighborhood: 'Financial District', keywords: ['work-from-home', 'modern'], price: 3800, bedrooms: 3 },
  { id: 15, type: 'Loft', neighborhood: 'University Area', keywords: ['student-friendly', 'artsy'], price: 1800, bedrooms: 1 },
  { id: 16, type: 'Condo', neighborhood: 'Downtown', keywords: ['city view', 'modern amenities'], price: 2700, bedrooms: 2 },
  { id: 17, type: 'House', neighborhood: 'Beachfront', keywords: ['ocean view', 'family-friendly'], price: 4500, bedrooms: 4 },
  { id: 18, type: 'Penthouse', neighborhood: 'Midtown', keywords: ['luxury', 'modern'], price: 5000, bedrooms: 3 },
  { id: 19, type: 'Cottage', neighborhood: 'Countryside', keywords: ['quiet', 'nature'], price: 2200, bedrooms: 3 },
  { id: 20, type: 'Townhouse', neighborhood: 'Midtown', keywords: ['modern', 'urban living'], price: 3400, bedrooms: 3 },
  { id: 21, type: 'Villa', neighborhood: 'Lakefront', keywords: ['private dock', 'serene'], price: 4800, bedrooms: 4 },
  { id: 22, type: 'Apartment', neighborhood: 'Downtown', keywords: ['modern', 'walkable'], price: 2000, bedrooms: 2 },
  { id: 23, type: 'Condo', neighborhood: 'Financial District', keywords: ['luxury', 'city view'], price: 4000, bedrooms: 3 },
  { id: 24, type: 'Loft', neighborhood: 'University Area', keywords: ['student-friendly', 'affordable'], price: 1500, bedrooms: 1 },
  { id: 25, type: 'House', neighborhood: 'Beachfront', keywords: ['luxury', 'private beach'], price: 6000, bedrooms: 5 },
  { id: 26, type: 'Penthouse', neighborhood: 'Financial District', keywords: ['luxury', 'skyline view'], price: 7000, bedrooms: 4 },
  { id: 27, type: 'Apartment', neighborhood: 'Midtown', keywords: ['pet-friendly', 'modern'], price: 1800, bedrooms: 2 },
  { id: 28, type: 'Villa', neighborhood: 'Countryside', keywords: ['private garden', 'luxury'], price: 5300, bedrooms: 5 },
  { id: 29, type: 'Condo', neighborhood: 'Downtown', keywords: ['city view', 'modern amenities'], price: 3200, bedrooms: 2 },
  { id: 30, type: 'Cottage', neighborhood: 'Lakefront', keywords: ['cozy', 'waterfront'], price: 2500, bedrooms: 3 },
  { id: 31, type: 'House', neighborhood: 'Suburbs', keywords: ['family-friendly', 'garden'], price: 2600, bedrooms: 4 },
  { id: 32, type: 'Loft', neighborhood: 'Midtown', keywords: ['artsy', 'modern'], price: 2900, bedrooms: 2 },
];


const PropertySearchBar = () => {
  const [category, setCategory] = useState('Rent');
  const [propertyType, setPropertyType] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [keywords, setKeywords] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = properties.filter(property =>
      (!propertyType || property.type === propertyType) &&
      (!neighborhood || property.neighborhood === neighborhood) &&
      (!keywords || property.keywords.some(k => k.toLowerCase().includes(keywords.toLowerCase())))
    );
    setResults(filteredResults);
  }, [propertyType, neighborhood, keywords]);

  const handleSearch = () => {
    setShowDropdown(false);
    navigate('/search-results', { state: { category, propertyType, neighborhood, keywords } });
  };

  const handleResultClick = (property) => {
    setShowDropdown(false);
    navigate(`/property/${property.id}`, { state: { property } });
  };

  const handleInteraction = () => {
    setShowDropdown(true);
  };

  const renderFieldsBasedOnCategory = () => {
    switch (category) {
      case 'Rent':
      case 'Buy':
        return (
          <>
            <select
              className="p-3 m-2 rounded border w-full md:w-auto"
              value={propertyType}
              onChange={(e) => {
                setPropertyType(e.target.value);
                handleInteraction();
              }}
            >
              <option value="">Property Type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Condo">Condo</option>
            </select>
            <select
              className="p-3 m-2 rounded border w-full md:w-auto"
              value={neighborhood}
              onChange={(e) => {
                setNeighborhood(e.target.value);
                handleInteraction();
              }}
            >
              <option value="">Neighborhood</option>
              <option value="Downtown">Downtown</option>
              <option value="Suburbs">Suburbs</option>
              <option value="Beachfront">Beachfront</option>
              <option value="Midtown">Midtown</option>
              <option value="Countryside">Countryside</option>
              <option value="Financial District">Financial District</option>
              <option value="University Area">University Area</option>
              <option value="Lakefront">Lakefront</option>
            </select>
          </>
        );
      case 'New projects':
        return (
          <>
            <input
              type="text"
              placeholder="Project Name"
              className="p-3 m-2 rounded border w-full md:w-auto"
              value={keywords}
              onChange={(e) => {
                setKeywords(e.target.value);
                handleInteraction();
              }}
            />
          </>
        );
      case 'Commercial':
        return (
          <>
            <input
              type="text"
              placeholder="Business Type"
              className="p-3 m-2 rounded border w-full md:w-auto"
              value={keywords}
              onChange={(e) => {
                setKeywords(e.target.value);
                handleInteraction();
              }}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8 pr-2 lg:pr-0">
      <div className="flex justify-center mb-4 space-x-4 text-lg">
        {['Rent', 'Buy', 'New projects', 'Commercial'].map((item) => (
          <button
            key={item}
            className={`px-6 py-2 ${category === item ? 'bg-orange-200 text-orange-500' : 'bg-white text-black'} rounded-t-md`}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center bg-white rounded-lg shadow-md gap-2 text-black md:flex-nowrap">
        {renderFieldsBasedOnCategory()}
        <div className="relative flex-grow  z-10 w-full md:w-auto">
          <input
            type="text"
            placeholder="City or Building"
            className="lg:w-full p-3 m-2 mx-2 rounded border"
            value={keywords}
            onChange={(e) => {
              setKeywords(e.target.value);
              handleInteraction();
            }}
            onFocus={handleInteraction}
          />
          {showDropdown && results.length > 0 && (
            <div className="absolute z-20 w-full bg-white border rounded-b shadow-lg max-h-60 overflow-y-auto">
              {results.map(result => (
                <div
                  key={result.id}
                  className="p-2 bg-gray-100 cursor-pointer"
                  onClick={() => handleResultClick(result)}
                >
                  <div className="font-semibold">{result.type} in {result.neighborhood}</div>
                  <div className="text-sm text-gray-600">
                    ${result.price}/month • {result.bedrooms} BR •
                    {result.keywords.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          className="bg-orange-500 text-white p-3 m-2 rounded w-full md:w-auto flex items-center"
          onClick={handleSearch}
        >
          <Search className="mx-2" />
          Search
        </button>
      </div>
    </div>
  );
};

export default PropertySearchBar;
