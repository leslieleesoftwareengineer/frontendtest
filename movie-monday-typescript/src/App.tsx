import React, { useState } from 'react';
import MoviesContainer from './components/Movies/MoviesContainer';
import Search from "./components/Search/Search";

function App() {
  const [movieName, setMovieName] = useState('');

  return (
    <div className="my-2 container mx-auto shadow sm:rounded-md sm:overflow-hidden px-4 py-5 bg-white space-y-6 sm:p-6">
      <Search
        onSearch={(movieName) => {
          setMovieName(movieName)
        }}
      />
      <MoviesContainer movieName={movieName}/>
    </div>
  );
}

export default App;
