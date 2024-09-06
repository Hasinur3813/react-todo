import React from "react";
import Control from "./Control";
import Popup from "../Popup";

const AddTodoPopup = ({ handleAddTodo }) => {
  return (
    <Popup content="Add New Todo">
      <form>
        <label htmlFor="text">
          Type something
          <input
            className="block w-full border border-pColor px-2 my-1 rounded py-2 text-slate-400 focus:text-black"
            type="text"
            name=""
            id="text"
            placeholder="Enter your needs here"
          />
        </label>

        <label className="my-5 block" htmlFor="date">
          Date to be finished the Todo
          <input
            className="block mt-1 border border-pColor px-3 py-2 rounded w-full dark:text-darkMode"
            type="date"
            name=""
            id="date"
          />
        </label>

        <label htmlFor="priority">
          Select Priority
          <select
            id="priority"
            className="dark:text-darkMode mt-1 w-full px-3 py-2 rounded border border-pColor"
          >
            <option value="select">Select</option>
            <option value="select">High</option>
            <option value="select">Medium</option>
            <option value="select">Low</option>
          </select>
        </label>
        <Control type="submit" text="Add New" handleAddTodo={handleAddTodo} />
      </form>
    </Popup>
  );
};

export default AddTodoPopup;
