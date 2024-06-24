import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setLoading } from "../redux/loading.slice";
import { Pagination, List } from "../components";
import { getTrending } from "../services/apiService";

const Trending = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTrending = async () => {
    try {
      dispatch(setLoading(true));
      const data = await getTrending(page);
      setMovies(data?.results);
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      console.error("Error fetching trending movies:", error);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div className="container">
      <div className="row py-5 my-5">
        <div className="col-12 mt-2 mb-4 fs-1 fw-bold text-decoration-underline head d-flex justify-content-center align-items-center">
          <i className="fas fa-fire mx-4 text-danger"></i>
          <h4 className="fs-2">Trending Today</h4>
          <i className="fas fa-fire mx-4 text-danger"></i>
        </div>
        <List content={movies} />
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Trending;
