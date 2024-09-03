import React from "react";

const Control = ({ type, text, handlePopup }) => {
  return (
    <div className="flex justify-between mt-10">
      <button
        onClick={handlePopup}
        className="border border-red-400 px-3 py-1 rounded bg-red-50 hover:bg-red-200 duration-200"
        type="button"
      >
        Cancel
      </button>
      <input
        className="border border-pColor px-3 py-1 rounded bg-pColor text-white hover:bg-blue-500 duration-200"
        type={type}
        value={text}
      />
    </div>
  );
};

export default Control;
