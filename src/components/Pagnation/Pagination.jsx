import React from "react";

const Pagination = () => {
  return (
    <div className="w-full flex items-center justify-between p-8">
      <span>Showing 1 to 5 of 8 entries</span>
      <div className="join">
        <input
          className="join-item btn min-h-0 h-10"
          type="radio"
          name="options"
          aria-label="1"
          checked
        />
        <input
          className="join-item btn min-h-0 h-10"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          className="join-item btn min-h-0 h-10"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          className="join-item btn min-h-0 h-10"
          type="radio"
          name="options"
          aria-label="4"
        />
      </div>
    </div>
  );
};

export default Pagination;
