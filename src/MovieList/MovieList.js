import React from "react";
import MovieCard from "../MovieCard/MovieCard.js";
import './MovieList.css';

function MovieList(props) {
  const handleMovieClick = (movie) => {
    props.onMovieClick(movie);
  };

  return (
    <div className="movie-grid" style={{ display: "grid", paddingLeft: "auto", paddingRight: "auto" }}>
      {props.movies.map((movie) => (
        <MovieCard key={movie.id} title={movie.title} poster={movie.image} rating={movie.rating} year={movie.description} onClick={() => handleMovieClick(movie)} />
      ))}
    </div>
  );
}

export default MovieList;