import React from "react";

const Theme = () => {
  return (
    <label>
      Theme
      <select
        className="bg-slate-200 px-3 rounded-sm border border-pColor ms-1"
        name=""
        id=""
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
};

export default Theme;
