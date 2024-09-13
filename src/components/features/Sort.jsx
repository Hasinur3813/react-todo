import React from "react";

const Sort = ({ setSortDirection }) => {
  return (
    <label className="dark:text-white dark:bg-transparent">
      Sort
      <select
        className="bg-slate-200 px-3 rounded-sm border border-pColor ms-1 dark:bg-transparent"
        onChange={(e) => setSortDirection(e.target.value)}
      >
        <option className="dark:bg-darkMode" value="auto">
          Auto
        </option>
        <option className="dark:bg-darkMode" value="asc">
          Ascending
        </option>
        <option className="dark:bg-darkMode" value="dsc">
          Descending
        </option>
      </select>
    </label>
  );
};

export default Sort;
