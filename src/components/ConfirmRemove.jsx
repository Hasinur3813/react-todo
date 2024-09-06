import React from "react";
import Popup from "./Popup";
import Button from "./Button";

const ConfirmRemove = ({ deleteTodo, id, closePopup }) => {
  return (
    <Popup content={" "}>
      <div className="text-center">
        <i className="text-red-500 text-4xl mb-4 fa-solid fa-circle-exclamation"></i>
        <h1 className="text-lg">Are you sure you want to delete this item?</h1>

        <div className="flex justify-between mt-8">
          <Button
            onClick={closePopup}
            text="Cancel"
            className="bg-transparent border border-pColor dark:text-white"
          />

          <Button
            onClick={() => deleteTodo(id)}
            className="bg-red-50 border-red-400 dark:text-darkMode dark:bg-red-200 dark:hover:bg-red-400 hover:bg-red-200 border"
            text="Delete"
          />
        </div>
      </div>
    </Popup>
  );
};

export default ConfirmRemove;
