import React from "react";

const Filter = ({ handleFilterButton }) => {
  return (
    <label>
      Filter
      <select
        className="bg-slate-200 px-3 rounded-sm border border-pColor ms-1"
        name=""
        id=""
      >
        <option value="all" onClick={(e) => handleFilterButton(e.target.value)}>
          All
        </option>
        <option
          value="completed"
          onClick={(e) => handleFilterButton(e.target.value)}
        >
          Completed
        </option>
        <option
          value="pending"
          onClick={(e) => handleFilterButton(e.target.value)}
        >
          Pending
        </option>
        <option
          value="Active"
          onClick={(e) => handleFilterButton(e.target.value)}
        >
          Active
        </option>
      </select>
    </label>
  );
};

export default Filter;
