import React, { useState } from "react";
import Popup from "./addTodo/Popup";
import Control from "./addTodo/Control";

const EditContent = ({ text, handlePopup, handleUpdateTodo }) => {
  const [update, setUpdate] = useState(text);

  const updating = (e) => {
    setUpdate(e.target.value);
  };

  return (
    <Popup content="Update Your Todo">
      <form action="" onSubmit={(e) => handleUpdateTodo(e, update)}>
        <label htmlFor="text">
          Your Todo
          <input
            className="block w-full border border-pColor px-2 my-1 rounded py-2"
            type="text"
            name=""
            id="text"
            onChange={updating}
            value={update}
          />
        </label>
        <Control type="submit" text="Update" handlePopup={handlePopup} />
      </form>
    </Popup>
  );
};

export default EditContent;
