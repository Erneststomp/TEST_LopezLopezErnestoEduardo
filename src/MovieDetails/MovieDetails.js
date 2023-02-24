import React, { useState, useEffect } from "react";
import './MovieDetails.css'

function MovieDetails(props) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://localhost/detailedsearch.php?selectedMovie=${props.movie.id}`);
        const datadetailed = await response.json();
        setMovieDetails(JSON.parse(datadetailed));
        console.log('2');
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails();
  }, [props.movie.id]);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  }

  return (
    <div>
      <div className="movie">
        <div className="movie-poster">
          {movieDetails && movieDetails.images.items && movieDetails.images.items.length > 0 && (
            <>
              <img className="DetailPoster" src={props.movie.image} alt={props.movie.title} />
              {movieDetails.images.items.slice(0, 5).map((image, index) => (
              <img
                key={index}
                className={`gallery-image ${index === currentImageIndex ? "active" : ""}`}
                src={image.image}
                alt={`${props.movie.title} imagen ${index}`}
                onClick={() => handleImageChange(index)}
              />
            ))}
            </>
          )}
        </div>
        <div className="movie-details">
          <h2 className="movie-title">{props.movie.title}</h2>
          {movieDetails ? (
            <>
              <p>Release Date: {movieDetails.releaseDate}</p>
              <p>Duration: {movieDetails.runtimeMins} mins</p>
              <p>IMDb Rating: {movieDetails.imDbRating}</p>
              <p>Plot: {movieDetails.plot}</p>
              <p>Genres: {movieDetails.genres}</p>
              <p>Classification: {movieDetails.contentRating}</p>
            </>
          ) : (
            <p>Loading movie details...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
