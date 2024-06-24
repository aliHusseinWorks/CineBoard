import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setLoading } from "../redux/loading.slice";
import { Pagination, Genre, List } from "../components";
import useGenre from "../utils/useGenre";
import { getTrendingByType } from "../services/apiService";

const Movies = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState([]);
  const [value, setValue] = useState([]);
  const genreURL = useGenre(value);

  const fetchTrending = async () => {
    try {
      dispatch(setLoading(true));
      const response = await getTrendingByType(page, genreURL, "movie");
      setMovies(response?.results);
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      console.error("Error fetching trending movies:", error);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, [page, genreURL]);

  return (
    <div className="container">
      <div className="row py-5 my-5">
        <div className="col-12 text-center mt-2 mb-4 fs-1 fw-bold text-decoration-underline">
          Movies
        </div>
        <Genre
          genre={genre}
          setGenre={setGenre}
          setPage={setPage}
          type="movie"
          value={value}
          setValue={setValue}
        />
        <List content={movies} />
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Movies;
