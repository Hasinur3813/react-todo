import React from "react";

const Filter = () => {
  return (
    <label>
      Filter
      <select
        className="bg-slate-200 px-3 rounded-sm border border-pColor ms-1"
        name=""
        id=""
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option value="Active">Active</option>
      </select>
    </label>
  );
};

export default Filter;
