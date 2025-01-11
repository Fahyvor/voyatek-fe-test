import React, { useState } from 'react';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState('hotels');

  const handleSearch = () => {
    // Add logic for search functionality
    console.log(`Searching for ${category}:`, searchInput);
  };

  return (
    <div className="p-4 bg-gray-200 min-h-screen">
      <div className="bg-white shadow-md p-6 rounded-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Search {category}</h2>
        <div className="mb-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-4 py-2 rounded-lg w-full"
          >
            <option value="hotels">Hotels</option>
            <option value="flights">Flights</option>
            <option value="activities">Activities</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={`Search ${category}...`}
            className="border px-4 py-2 rounded-lg w-full"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
