import React, { useState } from "react";
import { img_300, unavailable } from "../utils/config";
import { PopUp } from "./index";

const List = ({ content }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

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
          <div
            key={id}
            className="col-md-3 col-sm-4 py-3"
            id="card"
            onClick={() => handleItemClick(item)}
          >
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
      {selectedItem && <PopUp item={selectedItem} closePopup={closePopup} />}
    </>
  );
};

export default List;
