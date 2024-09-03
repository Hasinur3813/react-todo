import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, onSelectTodo, handleCheck }) => {
  return (
    <div className="space-y-6">
      {todos.length === 0 && (
        <h1 className="text-center mt-20 text-2xl">No todos were found!</h1>
      )}

      {todos &&
        todos.map((todo, index) => (
          <Todo
            key={index * 9}
            todo={todo}
            onSelectTodo={onSelectTodo}
            handleCheck={handleCheck}
          />
        ))}
    </div>
  );
};

export default Todos;
