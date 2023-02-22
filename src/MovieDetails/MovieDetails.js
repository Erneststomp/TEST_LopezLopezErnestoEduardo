import React, { useState, useEffect } from "react";
import './MovieDetails.css'

// function MovieDetail(props) {
   
//       fetch(`http://localhost/detailedsearch.php?selectedMovie=${props.movie.id}`)
//         .then((response) => {return response.json()})
//         .then((datadetailed) => {
//             let datadetailedjson=JSON.parse(datadetailed)
//             console.log(datadetailedjson)
//             props.onSearch(datadetailedjson.results);})
//         .catch((error) => console.log(error));

//   return (
//     <div>
//     <div className="movie">
//       <div className="movie-poster">
//       <img className="DetailPoster" src={props.movie.image} alt={props.movie.title} />
//       </div>
//       <div className="movie-details">
//         <h2 className="movie-title">{props.movie.title}</h2>
//         <p className="movie-release-year">{datadetailed.year}</p>
//         <p className="movie-description">{props.movie.description}</p>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default MovieDetail;

function MovieDetail(props) {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost/detailedsearch.php?selectedMovie=${props.movie.id}`)
      .then((response) => {return response.json()})
      .then((datadetailed) => {
        setMovieDetails(JSON.parse(datadetailed));
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
              <p className="movie-release-year">Release Date: {movieDetails.releaseDate}</p>
              <p className="movie-release-year">Duration: {movieDetails.runtimeMins} mins</p>
              <p className="movie-release-year">IMDb Rating: {movieDetails.imDbRating}</p>
              <p className="movie-release-year">Desctription:{movieDetails.description}</p>
              <p className="movie-description">Plot: {movieDetails.plot}</p>
              <p className="movie-description">Generes: {movieDetails.generes}</p>
              <p className="movie-description">Clasification: {movieDetails.contentRating}</p>
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
