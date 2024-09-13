import React, { useContext, useState } from "react";
import Popup from "./Popup";
import Control from "./addTodo/Control";
import { TodosContext } from "../context/TodosContext";
import { toast } from "react-toastify";

const EditContent = ({ setShowPopup }) => {
  const [, setTodos, trackTodo, setTracktodo] = useContext(TodosContext);
  const [update, setUpdate] = useState(trackTodo.todo);

  const updating = (e) => {
    setUpdate(e.target.value);
  };

  // edit and update the todo
  const handleUpdateTodo = (e) => {
    e.preventDefault();
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === trackTodo.id ? { ...todo, todo: update } : todo
      )
    );
    toast("Your Todo has been updated...");
    setShowPopup(false);
    setTracktodo(null);
  };

  return (
    <Popup content="Update Your Todo">
      <form action="" onSubmit={handleUpdateTodo}>
        <label htmlFor="text">
          Your Todo
          <input
            className="text-base block w-full border border-pColor px-2 my-1 rounded py-2 dark:text-darkMode"
            type="text"
            name=""
            id="text"
            onChange={updating}
            value={update}
          />
        </label>
        <Control
          type="submit"
          text="Update"
          handlePopup={() => setShowPopup(false)}
        />
      </form>
    </Popup>
  );
};

export default EditContent;
