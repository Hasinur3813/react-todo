import React from "react";

const Filter = ({ handleFilterButton }) => {
  return (
    <label className="dark:text-white">
      Filter
      <select
        className="bg-slate-200 px-3 rounded-sm border border-pColor ms-1  dark:bg-transparent"
        onChange={(e) => handleFilterButton(e.target.value)}
      >
        <option className="dark:bg-darkMode" value="all">
          All
        </option>
        <option className="dark:bg-darkMode" value="completed">
          Completed
        </option>
        <option className="dark:bg-darkMode" value="pending">
          Pending
        </option>
        <option className="dark:bg-darkMode" value="active">
          Active
        </option>
      </select>
    </label>
  );
};

export default Filter;
