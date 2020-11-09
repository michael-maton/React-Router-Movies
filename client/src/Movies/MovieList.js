import React from 'react';
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  // const {url} = useRouteMatch();
  // const { movies } = props;
  const history = useHistory();
  //const { push } = useHistory(); then use push() instead of history.push()
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
      // <Link to={`/movies/${movie.id}`}>
      <div onClick={() => history.push(`/movies/${movie.id}`)}>
        <MovieDetails key={movie.id} movie={movie} />
      </div>
      // </Link>
      ))}
    </div>
  );
}


function MovieDetails(props) {
  // const { title, director, metascore, stars } = props.movie;
  // const { title, director, metascore, stars } = movie;

  return (
    <div className="movie-card">
      <MovieCard movie={props.movie}/>
    </div>
  );
}
