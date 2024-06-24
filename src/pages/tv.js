import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setLoading } from "../redux/loading.slice";
import { Pagination, Genre, List } from "../components";
import useGenre from "../utils/useGenre";
import { getTrendingByType } from "../services/apiService";

const TV = () => {
  const dispatch = useDispatch();
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState([]);
  const [value, setValue] = useState([]);
  const genreURL = useGenre(value);

  const fetchTrending = async () => {
    try {
      dispatch(setLoading(true));
      const data = await getTrendingByType(page, genreURL, "tv");
      setShows(data?.results);
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      console.error("Error fetching trending shows:", error);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, [page, genreURL]);

  return (
    <div className="container">
      <div className="row py-5 my-5">
        <div className="col-12 text-center mt-2 mb-4 fs-1 fw-bold text-decoration-underline">
          TV Series
        </div>
        <Genre
          genre={genre}
          setGenre={setGenre}
          setPage={setPage}
          type="tv"
          value={value}
          setValue={setValue}
        />
        <List content={shows} />
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default TV;
