import React, { useState, useEffect } from "react";
import axios from "axios";
import { parseString } from "xml2js";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PropertySearchBar = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("Rent");
  const [propertyType, setPropertyType] = useState("");
  const [community, setCommunity] = useState("");
  const [keywords, setKeywords] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gulf-backend.onrender.com/api/xmlfeed"
        );

        parseString(response.data, (err, result) => {
          if (err) {
            setError("Error parsing XML");
          } else {
            const propertyList = result.list.property || [];
            setProperties(propertyList);
          }
          setLoading(false);
        });
      } catch (err) {
        setError("Error fetching data: " + err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (properties.length > 0) {
      const filteredResults = properties.filter(
        (property) =>
          (!propertyType || property.property_type[0] === propertyType) &&
          (!community || property.community[0] === community) &&
          (!keywords ||
            property.title_en[0].toLowerCase().includes(keywords.toLowerCase()))
      );
      setResults(filteredResults.slice(0, 20));
    }
  }, [propertyType, community, keywords, properties]);

  const handleSearch = () => {
    setShowDropdown(false);
    navigate("/search-results", {
      state: { category, propertyType, community, keywords, results },
    });
  };

  const handleResultClick = (property) => {
    setShowDropdown(false);
    navigate(`/property/${property.reference_number[0]}`, {
      state: { property },
    });
  };

  const handleInteraction = () => {
    setShowDropdown(true);
  };

  const renderFieldsBasedOnCategory = () => {
    switch (category) {
      case "Rent":
      case "Buy":
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
              <option value="AP">Apartment</option>
              <option value="VH">Villa</option>
              <option value="TH">Townhouse</option>
            </select>
            <select
              className="p-3 m-2 rounded border w-full md:w-auto"
              value={community}
              onChange={(e) => {
                setCommunity(e.target.value);
                handleInteraction();
              }}
            >
              <option value="">Community</option>
              {[...new Set(properties.map((p) => p.community[0]))].map(
                (comm) => (
                  <option key={comm} value={comm}>
                    {comm}
                  </option>
                )
              )}
            </select>
          </>
        );
      case "New projects":
        return (
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
        );
      case "Commercial":
        return (
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
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#F2762E]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto py-8 pr-2 lg:pr-12">
      <div className="flex mb-4 space-x-2 text-xs lg:text-lg">
        {["Rent", "Buy", "New projects", "Commercial"].map((item) => (
          <button
            key={item}
            className={`px-6 py-2 ${
              category === item
                ? "bg-orange-200 text-orange-500"
                : "bg-white text-black"
            } rounded-t-md`}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center bg-white rounded-lg shadow-md gap-2 text-black md:flex-nowrap">
        {renderFieldsBasedOnCategory()}
        <div className="relative flex-grow z-10 w-full md:w-auto">
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
            <div
              className="absolute bottom-full z-100 w-full bg-white border rounded-b shadow-lg max-h-60 overflow-y-auto"
              style={{ top: "auto" }}
            >
              {results.map((result) => (
                <div
                  key={result.reference_number[0]}
                  className="p-2 bg-gray-100 cursor-pointer"
                  onClick={() => handleResultClick(result)}
                >
                  <div className="font-semibold">
                    {result.property_type[0]} in {result.community[0]}
                  </div>
                  <div className="text-sm text-gray-600">
                    ${result.price[0]}/month • {result.bedroom[0]} BR •
                    {result.title_en[0]}
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
