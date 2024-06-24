import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setLoading } from "../redux/loading.slice";
import { Pagination, List } from "../components";
import { getSearch } from "../services/apiService";

const Search = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchSearch = async () => {
    try {
      dispatch(setLoading(true));
      const data = await getSearch(searchText, page);
      setContent(data?.results);
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      console.error("Error fetching searched movie:", error);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  const Search = () => {
    fetchSearch();
  };

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="container">
      <div className="row pt-3 mb-5 pb-5">
        <div className="col-12 pt-5 pb-3 mt-5 d-flex justify-content-center align-items-center">
          <input
            type="text"
            placeholder="search..."
            onChange={handleSearchInput}
            className="form-control-lg col-6 search bg-dark text-white border border-0"
          />
          <button
            className="btn btn-primary text-white mx-2 col-md-1 col-sm-2 py-2"
            onClick={Search}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
        <List content={content} />
        {content?.length !== 0 && <Pagination page={page} setPage={setPage} />}
      </div>
    </div>
  );
};

export default Search;
