import React, { useContext } from "react";
import { toast } from "react-toastify";
import { TodosContext } from "../../context/TodosContext";

const Todo = (props) => {
  const [todos, setTodos, , setTracktodo] = useContext(TodosContext);
  // select a todo for editing the todo
  const onSelectTodo = () => {
    if (props.todo.completed) {
      toast("Todo is already marked as completed!");
    } else {
      setTracktodo(props.todo);
      props.setShowPopup(true);
    }
  };

  // handle the todo that is checked as markded
  const handleCheck = () => {
    let modifiedTodo = todos.map((todo) => {
      if (todo.id === props.todo.id) {
        return { ...todo, checked: !todo.checked, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(modifiedTodo);
  };

  return (
    <div className="mt-20 flex flex-col md:flex-row gap-y-4 justify-between p-3 rounded-md bg-slate-200 dark:bg-darkHover dark:border dark:border-pColor dark:text-white dark:hover:bg-transparent hover:bg-slate-300 duration-200">
      <div className="flex justify-start items-center gap-4">
        <input
          className="lg:w-5 lg:h-5"
          type="checkbox"
          onChange={handleCheck}
          checked={props.todo.checked}
        />
        <p className={`${props.todo.checked && "line-through"} text-lg`}>
          {props.todo.todo}
        </p>
      </div>

      <div className="flex gap-4 justify-end md:justify-center items-center">
        <span
          className={`${
            props.todo.priority === "High"
              ? "bg-green-700"
              : props.todo.priority === "Medium"
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
          onClick={onSelectTodo}
          title="Edit"
          className="fa-solid fa-pen text-pColor cursor-pointer"
        ></i>
        <i
          onClick={() => {
            props.setRTodoPopup(true);
            setTracktodo(props.todo);
          }}
          title="Delete"
          className="fa-solid fa-trash text-red-600 cursor-pointer"
        ></i>
      </div>
    </div>
  );
};

export default Todo;
