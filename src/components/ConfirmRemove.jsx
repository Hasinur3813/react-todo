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
            className="bg-red-50 border-red-400 hover:bg-red-200 border"
            text="Cancel"
          />

          <Button
            onClick={() => deleteTodo(id)}
            className="bg-pColor text-white hover:bg-blue-500"
            text="Delete"
          />
        </div>
      </div>
    </Popup>
  );
};

export default ConfirmRemove;
