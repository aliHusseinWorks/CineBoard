import React from "react";

import { img_300, unavailable } from "../utils/config";

const List = ({ content }) => {
  return (
    <>
      {content?.map((item) => {
        const {
          name,
          title,
          poster_path,
          first_air_date,
          release_date,
          media_type,
          id,
        } = item;
        return (
          <div key={id} className="col-md-3 col-sm-4 py-3" id="card">
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
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
