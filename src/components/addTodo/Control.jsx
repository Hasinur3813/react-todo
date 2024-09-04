import React from "react";
import Button from "../Button";

const Control = ({ type, text, handlePopup, handleAddTodo }) => {
  return (
    <div className="flex justify-between mt-10">
      <Button
        onClick={handlePopup || handleAddTodo}
        text="Cancel"
        className="border border-red-400 bg-red-50 hover:bg-red-200 "
      />

      <input
        className="text-xl border border-pColor px-3 py-1 rounded bg-pColor text-white hover:bg-blue-500 duration-200"
        type={type}
        value={text}
      />
    </div>
  );
};

export default Control;
