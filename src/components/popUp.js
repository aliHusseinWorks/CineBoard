import React from "react";

import { img_300, unavailable } from "../utils/config";

const PopUp = ({ item, closePopup }) => {
  const {
    name,
    title,
    poster_path,
    first_air_date,
    release_date,
    media_type,
    overview,
    vote_average,
    vote_count,
  } = item;

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="close-btn-container">
          <button className="close-btn" onClick={closePopup}>
            &times;
          </button>
        </div>
        <div className="card bg-dark">
          <img
            src={poster_path ? `${img_300}/${poster_path}` : unavailable}
            className="card-img-top pt-3 pb-0 px-3"
            alt={title || name}
          />
          <div className="card-body">
            <h5 className="card-title text-center fs-5">{title || name}</h5>
            <div className="d-flex fs-6 align-items-center justify-content-evenly movie">
              <div>{media_type === "tv" ? "TV" : "Movie"}</div>
              <div>{first_air_date || release_date}</div>
            </div>
            <p className="overview mt-3">{overview}</p>
            <div className="d-flex justify-content-between">
              <span>Rating: {vote_average}</span>
              <span>Votes: {vote_count}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
