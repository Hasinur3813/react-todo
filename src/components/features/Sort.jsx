import React from "react";

const Sort = ({ handleSortOption }) => {
  return (
    <label>
      Sort
      <select
        className="bg-slate-200 px-3 rounded-sm border border-pColor ms-1"
        onChange={(e) => handleSortOption(e.target.value)}
      >
        <option value="auto">Auto</option>
        <option value="asc">Ascending</option>
        <option value="dsc">Descending</option>
      </select>
    </label>
  );
};

export default Sort;
