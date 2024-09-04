import React from "react";

const Filter = ({ handleFilterButton }) => {
  return (
    <label>
      Filter
      <select
        className="bg-slate-200 px-3 rounded-sm border border-pColor ms-1"
        onChange={(e) => handleFilterButton(e.target.value)}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
        <option value="active">Active</option>
      </select>
    </label>
  );
};

export default Filter;
