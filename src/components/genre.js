import React, { useEffect } from "react";

import { getGenre } from "../services/apiService";

const Genre = ({ genre, setGenre, setPage, type, value, setValue }) => {
  const fetchGenre = async () => {
    try {
      const data = await getGenre(type);
      setGenre(data?.genres);
    } catch (error) {
      console.error("Error fetching movies genres:", error);
    }
  };

  useEffect(() => {
    fetchGenre();
  }, [type, setGenre]);

  const CategoryAdd = (genres) => {
    setValue((prevValue) => [...prevValue, genres]);
    setGenre((prevGenre) => prevGenre.filter((g) => g.id !== genres.id));
    setPage(1);
  };

  const CategoryRemove = (genres) => {
    setValue((prevValue) => prevValue.filter((g) => g.id !== genres.id));
    setGenre((prevGenre) => [...prevGenre, genres]);
    setPage(1);
  };

  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <div className="col-12 d-flex flex-wrap">
          {value?.map(({ id, name }) => (
            <div key={id} className="m-2">
              <button
                className="bg-dark text-white px-4 py-2 text-center buttons"
                onClick={() => CategoryRemove({ id, name })}
              >
                {name}
              </button>
            </div>
          ))}
          {genre?.map(({ id, name }) => (
            <div key={id} className="m-2">
              <button
                className="bg-dark text-white px-4 py-2 text-center button"
                onClick={() => CategoryAdd({ id, name })}
              >
                {name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genre;
