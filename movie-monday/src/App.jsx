import {  useQuery } from '@apollo/client';
import { useState } from 'react';
import "./App.css";
import Movies from "./components/Movies/Movies";
import MoviesContainer from './components/Movies/MoviesContainer';
import Search from "./components/Search/Search";
import { GET_MOVIES_QUERY } from './graphyql/Queries';


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
