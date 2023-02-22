import React from "react";
import './MovieCard.css';

function MovieCard(props) {
  return (
    <div className="CardContainer" onClick={props.onClick}>
      <div className="PosterContainer">
        <img src={props.poster} alt={props.title} />
      </div>
      <div className="InfoContainer">
        <h2>{props.title}</h2>
        <p>{props.year}</p>
      </div>
    </div>
  );
}

export default MovieCard;