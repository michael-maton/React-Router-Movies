import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function Movie(props) {
  const [movie, setMovie] = useState();
  const { movies, addToSavedList } = props;

  let { id } = useParams();
  const item = movies.find((item) => item.id === id);
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
      .then(res => {
        // debugger;
        setMovie(res.data);
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
      })
      .catch(error => {
        console.error(error);
      });
      // This effect should run every time time
      // the `id` changes... How could we do this?
    }, [id]);
    
    console.log(movie);
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <MovieCard movie={movie}/>
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
        <div onClick={() => addToSavedList(`${id}`)} className="save-button">Save</div>
      </div>
    </div>
  );
}
