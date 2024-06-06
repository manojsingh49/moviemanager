import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieCard;
