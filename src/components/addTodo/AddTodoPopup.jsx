import React, { useState } from "react";
import Control from "./Control";
import Popup from "../Popup";
import { shortId } from "../../utilityFunctions/shortId";
import { formatDate } from "../../utilityFunctions/formateDate";

const AddTodoPopup = ({ handleAddTodo, handleSubmitTodo }) => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("Select");

  const handleOnsubmitTodo = (e) => {
    e.preventDefault();
    if (priority === "Select") {
      alert("Fillup all the fields with Priority ");
    } else {
      // make a valid todo object
      let id = shortId(10);
      let formattedDate = formatDate(date);

      const createTodo = {
        id: id,
        todo: todo,
        date: formattedDate,
        priority: priority,
        completed: false,
        checked: false,
      };

      // return the todo
      handleSubmitTodo(createTodo);

      // close popup
      handleAddTodo();
    }
  };

  const handleTodoType = (e) => {
    setTodo(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  return (
    <Popup content="Add New Todo">
      <form onSubmit={handleOnsubmitTodo}>
        <label htmlFor="text">
          Type something
          <input
            className="block w-full border border-pColor px-2 my-1 rounded py-2 text-slate-400 focus:text-black"
            type="text"
            value={todo}
            onChange={handleTodoType}
            id="text"
            placeholder="Enter your needs here"
            required
          />
        </label>

        <label className="my-5 block" htmlFor="date">
          Date to be finished the Todo
          <input
            className="block mt-1 border border-pColor px-3 py-2 rounded w-full dark:text-darkMode"
            type="date"
            value={date}
            onChange={handleDateChange}
            id="date"
            required
          />
        </label>

        <label htmlFor="priority">
          Select Priority
          <select
            value={priority}
            onChange={handlePriorityChange}
            id="priority"
            className="dark:text-darkMode mt-1 w-full px-3 py-2 rounded border border-pColor"
          >
            <option value="Select">Select</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <Control type="submit" text="Add New" handleAddTodo={handleAddTodo} />
      </form>
    </Popup>
  );
};

export default AddTodoPopup;
