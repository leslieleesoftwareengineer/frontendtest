import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [movieName, setMovieName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(movieName);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="lg:w-1/2">
          <div className="mt-1 flex rounded-md items-center">
            <label
              htmlFor="company-website"
              className="block text-sm font-medium text-gray-700 mr-2"
            >
              Movie Name:
            </label>
            <input
              type="text"
              name="movice-name"
              id="movice-name"
              className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
              placeholder="Mission impossible"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
            />
            <button
              type="submit"
              className="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Search
            </button>
          </div>
      </div>
    </form>
  );
};

export default Search;
