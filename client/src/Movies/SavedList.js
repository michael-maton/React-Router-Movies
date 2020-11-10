import React from "react";
import { useHistory } from "react-router-dom";

export default function SavedList(props) {

  const { list } = props;
  const history = useHistory();

  const routeToHome = () => {
    console.log(history, "HISTORY");
    history.push("/");
  };
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie) => (
        <span key={movie} className="saved-movie">{movie}</span>
      ))}
      <div onClick={routeToHome} className="home-button">Home</div>
    </div>
  );
}
