import React, { useState } from "react";
import SearchBox from "./SearchBox/SearchBox.js";
import MovieList from "./MovieList/MovieList.js";
import MovieDetails from "./MovieDetails/MovieDetails.js";
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = (searchResults) => {
    setMovies(searchResults);
    setSelectedMovie(null);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };


  return (
    <div>
    <h1 className="Titulo">Ernesto Lopez Search IMDb</h1>
    <SearchBox onSearch={handleSearch} />
    {selectedMovie ? (
      <MovieDetails movie={selectedMovie}  />
    ) : (
      <>
        {movies.length > 0 ? (
          <MovieList movies={movies} onMovieClick={handleMovieClick} />
        ) : (
          <p>Enter a search term to see results</p>
        )}
      </>
    )}
  </div>
  )  
}

export default App;
