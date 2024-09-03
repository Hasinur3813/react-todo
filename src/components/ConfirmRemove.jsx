import React from "react";
import Popup from "./addTodo/Popup";

const ConfirmRemove = ({ deleteTodo, id, closePopup }) => {
  return (
    <Popup content={" "}>
      <div className="text-center">
        <i className="text-red-500 text-4xl mb-4 fa-solid fa-circle-exclamation"></i>
        <h1>Are you sure you want to delete this item?</h1>

        <div className="flex justify-between mt-8">
          <button
            onClick={closePopup}
            className="border border-red-400 px-3 py-1 rounded bg-red-50 hover:bg-red-200 duration-200"
            type="button"
          >
            Cancel
          </button>

          <button
            onClick={() => deleteTodo(id)}
            className="bg-pColor hover:bg-blue-500  px-3 py-1 rounded text-white duration-200"
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default ConfirmRemove;
