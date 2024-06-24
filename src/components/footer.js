import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const data = [
    {
      icon: "fas fa-fire-alt",
      name: "Trending",
      link: "/",
      id: 1,
    },
    {
      icon: "fas fa-film",
      name: "Movies",
      link: "/movies",
      id: 2,
    },
    {
      icon: "fas fa-tv",
      name: "TV Series",
      link: "/tv",
      id: 3,
    },
    {
      icon: "fas fa-search",
      name: "Search",
      link: "/search",
      id: 4,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center bg-dark footer">
          {data.map((Val) => {
            return (
              <NavLink key={Val.id} to={`${Val.link}`}>
                <button className="col-sm-2 col-md-2 btn btn-dark">
                  <i className={`${Val.icon}`} id="fire"></i>
                  <br />
                  <h5 className="pt-1 fs-6">{Val.name}</h5>
                </button>
              </NavLink>
            );
          })}
          <div className="text-white footer1">Made By: Ali Hussein</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
