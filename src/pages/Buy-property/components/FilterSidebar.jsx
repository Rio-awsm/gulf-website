import React from 'react';

import { FaTimes } from 'react-icons/fa';
import { SearchInput } from './SearchInput';
import { SliderInput } from './SliderInput';
import { MultiSelect } from './MultiSelect';

export const FilterSidebar = ({ filters, onFilterChange, properties, showFilters, setShowFilters }) => {
  const maxPrice = Math.max(...properties.map(p => parseInt(p.price[0])));

  const sidebarClasses = `
    fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-lg transform 
    ${showFilters ? 'translate-x-0' : 'translate-x-full'}
    lg:relative lg:translate-x-0 lg:shadow-none lg:w-80
    transition-transform duration-300 ease-in-out
    overflow-y-auto
  `;

  const getUniqueValues = (field) => ['', ...new Set(properties.map(p => p[field][0]))].sort();

  return (
    <div className={sidebarClasses}>
      <div className="p-6 lg:p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-[#024959]">Filters</h2>
          <button 
            className="lg:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setShowFilters(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="space-y-8">
          <SearchInput 
            value={filters.searchTerm} 
            onChange={(value) => onFilterChange({ searchTerm: value })}
            placeholder="Search properties..."
          />

          <SliderInput
            min={0}
            max={maxPrice}
            step={100000}
            value={filters.priceRange}
            onChange={(value) => onFilterChange({ priceRange: value })}
            label="Price Range (AED)"
          />

          <MultiSelect
            options={getUniqueValues('bedroom')}
            value={filters.bedrooms}
            onChange={(value) => onFilterChange({ bedrooms: value })}
            label="Bedrooms"
          />

          <MultiSelect
            options={getUniqueValues('bathroom')}
            value={filters.bathrooms}
            onChange={(value) => onFilterChange({ bathrooms: value })}
            label="Bathrooms"
          />

          <MultiSelect
            options={getUniqueValues('property_type')}
            value={filters.propertyType}
            onChange={(value) => onFilterChange({ propertyType: value })}
            label="Property Type"
          />

          <MultiSelect
            options={getUniqueValues('city')}
            value={filters.city}
            onChange={(value) => onFilterChange({ city: value })}
            label="City"
          />

          <MultiSelect
            options={getUniqueValues('community')}
            value={filters.community}
            onChange={(value) => onFilterChange({ community: value })}
            label="Community"
          />

          <MultiSelect
            options={getUniqueValues('offering_type')}
            value={filters.offeringType}
            onChange={(value) => onFilterChange({ offeringType: value })}
            label="Offering Type"
          />

          <MultiSelect
            options={getUniqueValues('completion_status')}
            value={filters.completionStatus}
            onChange={(value) => onFilterChange({ completionStatus: value })}
            label="Completion Status"
          />

          <MultiSelect
            options={['BA', 'BP', 'BB', 'BW', 'AC', 'CP', 'FF', 'BK', 'SP', 'SE', 'MT', 'BT', 'CW', 'NM', 'SM', 'ML', 'PT', 'MO', 'RT', 'CS', 'SS', 'SY']}
            value={filters.amenities}
            onChange={(value) => onFilterChange({ amenities: value })}
            label="Amenities"
          />

          <MultiSelect
            options={[
              { value: '', label: 'Default' },
              { value: 'price-asc', label: 'Price: Low to High' },
              { value: 'price-desc', label: 'Price: High to Low' }
            ]}
            value={[filters.sortOption]}
            onChange={(value) => onFilterChange({ sortOption: value[0] })}
            label="Sort By"
          />
        </div>
      </div>
    </div>
  );
};