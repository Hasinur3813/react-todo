/* eslint-disable no-restricted-globals */
import React from "react";
import Todo from "./Todo";
import Button from "../Button";
import { filterTodos } from "../../utilityFunctions/filterTodos";
import { sortedTodosByPriority } from "../../utilityFunctions/sortTodos";

const Todos = ({
  todos,
  onSelectTodo,
  handleCheck,
  handleRemoveTodo,
  filter,
  sortDirection,
  handleAddTodo,
}) => {
  const filteredTodos = filterTodos(filter, todos);

  const sortTodos = sortedTodosByPriority(filteredTodos, sortDirection);

  return (
    <div className="space-y-6">
      {sortTodos.length === 0 && filter === "all" && (
        <div className="text-center space-y-5">
          <h1 className="text-center mt-20 text-2xl text-slate-600">
            No todos were found!
          </h1>

          <Button
            onClick={handleAddTodo}
            className="bg-pColor text-white hover:bg-blue-500"
            text="Add New"
          />
        </div>
      )}

      {sortTodos.length > 0 ? (
        sortTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onSelectTodo={onSelectTodo}
            handleCheck={handleCheck}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))
      ) : filter === "completed" ||
        filter === "pending" ||
        filter === "active" ? (
        <h1 className="text-center mt-20 text-2xl text-slate-600">
          No Todos were found as {filter}!
        </h1>
      ) : null}
    </div>
  );
};

export default Todos;
