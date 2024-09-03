import React from "react";

const Todo = (props) => {
  return (
    <div className="mt-20 flex flex-col md:flex-row gap-y-4 justify-between p-3 rounded-md bg-slate-200 hover:bg-slate-300 duration-200">
      <div className="flex justify-start items-center gap-4">
        <input
          id={props.todo.id}
          className="lg:w-5 lg:h-5"
          type="checkbox"
          onChange={(e) => props.handleCheck(e.target.id)}
          checked={props.todo.checked}
        />
        <p className={`${props.todo.checked && "line-through"} lg:text-base`}>
          {props.todo.todo}
        </p>
      </div>

      <div className="flex gap-4 justify-end md:justify-center items-center">
        <span
          className={`${
            props.todo.priority === "High"
              ? "bg-green-700"
              : props.priority === "Medium"
              ? "bg-yellow-600"
              : "bg-red-500"
          } rounded-sm text-white px-2`}
        >
          {props.todo.priority}
        </span>

        <span className="border border-pColor px-2 text-gray-50">
          {props.todo.date}
        </span>

        <i
          id={props.todo.id}
          onClick={() => props.onSelectTodo(props.todo)}
          title="Edit"
          className="fa-solid fa-pen text-pColor cursor-pointer"
        ></i>
        <i
          id={props.todo.id}
          title="Delete"
          className="fa-solid fa-trash text-red-600 cursor-pointer"
        ></i>
      </div>
    </div>
  );
};

export default Todo;
