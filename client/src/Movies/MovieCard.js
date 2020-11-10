import React from 'react';

export default function MovieCard (props) {
  const { movie } = props;
  const { title, director, metascore } = movie;

  return(
    <div>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
      </div>
  );
}
