import React from "react";

const Sort = () => {
  return (
    <label>
      Sort
      <select
        className="bg-slate-200 px-3 rounded-sm border border-pColor ms-1"
        name=""
        id=""
      >
        <option value="Auto">Auto</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </label>
  );
};

export default Sort;
