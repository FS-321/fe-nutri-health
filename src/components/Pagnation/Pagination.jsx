import React from "react";

const Pagination = ({ setPage }) => {
  return (
    <div className="w-full flex items-center justify-between p-8">
      <span>Showing 1 to 4 of 5 entries</span>
      <div className="join">
        <input
          className="join-item btn min-h-0 h-10"
          type="radio"
          name="options"
          aria-label="1"
          defaultChecked
          onClick={() => setPage(1)}
        />
        <input
          className="join-item btn min-h-0 h-10"
          type="radio"
          name="options"
          aria-label="2"
          onClick={() => setPage(2)}
        />
        <input
          className="join-item btn min-h-0 h-10"
          type="radio"
          name="options"
          aria-label="3"
          onClick={() => setPage(3)}
        />
        <input
          className="join-item btn min-h-0 h-10"
          type="radio"
          name="options"
          aria-label="4"
          onClick={() => setPage(4)}
        />
      </div>
    </div>
  );
};

export default Pagination;
