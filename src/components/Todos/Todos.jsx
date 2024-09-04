import React from "react";
import Todo from "./Todo";
import Button from "../Button";

const Todos = ({
  todos,
  onSelectTodo,
  handleCheck,
  handleRemoveTodo,
  filter,
}) => {
  const filteredTodos =
    filter === "completed" ? todos.filter((todo) => todo.completed) : todos;

  return (
    <div className="space-y-6">
      {todos.length === 0 && (
        <div className="text-center space-y-5">
          <h1 className="text-center mt-20 text-2xl text-slate-600">
            No todos were found!
          </h1>

          <Button
            className="bg-pColor text-white hover:bg-blue-500"
            text="Add New"
          />
        </div>
      )}

      {todos &&
        filter === "all" &&
        todos.map((todo, index) => (
          <Todo
            key={index * 9}
            todo={todo}
            onSelectTodo={onSelectTodo}
            handleCheck={handleCheck}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))}

      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onSelectTodo={onSelectTodo}
            handleCheck={handleCheck}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))
      ) : filter === "completed" ? (
        <h1 className="text-center mt-20 text-2xl text-slate-600">
          No Todos were completed!
        </h1>
      ) : null}
    </div>
  );
};

export default Todos;
