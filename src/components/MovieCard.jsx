import React from "react";

function Movie(movie) {
  return (
    <div className="movie-card">
      <h2>{Movie.title}</h2>
      <p>{Movie.overview}</p>
    </div>
  );
}

export default Movie;
