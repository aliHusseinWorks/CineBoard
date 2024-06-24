import React from "react";

const Pagination = ({ page, setPage }) => {
  const Previous = () => {
    if (page !== 1) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setPage(page);
    }
  };

  const Next = () => {
    if (page < 10) {
      setPage(page + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="my-3 d-flex justify-content-between align-items-center">
      <div>
        {page > 1 && (
          <button
            className="px-3 py-1 m-1 text-center btn-primary"
            onClick={Previous}
          >
            Previous
          </button>
        )}
      </div>
      <div>
        <button
          className="px-3 py-1 m-1 text-center btn-primary"
          onClick={Next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
