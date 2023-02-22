import React, { useState, useEffect } from "react";
import './MovieDetails.css'

function MovieDetail(props) {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost/detailedsearch.php?selectedMovie=${props.movie.id}`)
      .then((response) => {return response.json()})
      .then((datadetailed) => {
        setMovieDetails(JSON.parse(datadetailed));
        console.log(JSON.parse(datadetailed));
      })
      .catch((error) => console.log(error));
  }, [props.movie.id]);

  return (
    <div>
      <div className="movie">
        <div className="movie-poster">
          <img className="DetailPoster" src={props.movie.image} alt={props.movie.title} />
        </div>
        <div className="movie-details">
          <h2 className="movie-title">{props.movie.title}</h2>
          {movieDetails ? (
            <>
              <p>Release Date: {movieDetails.releaseDate}</p>
              <p>Duration: {movieDetails.runtimeMins} mins</p>
              <p>IMDb Rating: {movieDetails.imDbRating}</p>
              <p>Plot: {movieDetails.plot}</p>
              <p>Generes: {movieDetails.genres}</p>
              <p>Clasification: {movieDetails.contentRating}</p>
            </>
          ) : (
            <p>Loading movie details...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
