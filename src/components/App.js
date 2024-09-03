import Layout from "./Layout";
import Heading from "./Heading";
import AddTodo from "./addTodo/AddTodo";
import Features from "./features/Features";
import Todos from "./Todos/Todos";
import { useEffect, useState } from "react";
import EditContent from "./EditContent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmRemove from "./ConfirmRemove";

const staticTodo = [
  {
    id: 1,
    todo: "This is my todo text",
    priority: "High",
    date: "24th July 24",
    checked: false,
    completed: false,
    editable: false,
  },
  {
    id: 2,
    todo: "Have to complte the app",
    priority: "Medium",
    date: "24th July 24",
    checked: false,
    completed: false,
    editable: false,
  },
  {
    id: 3,
    todo: "React is ongoing..",
    priority: "Low",
    date: "24th July 24",
    checked: false,
    completed: false,
    editable: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showRTodoPopup, setRTodoPopup] = useState(false);
  useEffect(() => {
    setTodos(staticTodo);
  }, []);

  // handle the todo that is checked as markded
  const handleCheck = (id) => {
    let modifiedTodo = todos.map((todo) => {
      if (todo.id === parseInt(id)) {
        return { ...todo, checked: !todo.checked, completed: !todo.completed };
      } else {
        return todo;
      }
    });

    setTodos(modifiedTodo);
  };

  // edit and update the todo

  const handleUpdateTodo = (e, updateText) => {
    e.preventDefault();
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === selectedTodo.id ? { ...todo, todo: updateText } : todo
      )
    );
    toast("Your Todo has been updated...");
    setShowPopup(false);
    setSelectedTodo(null);
  };

  // select a todo for editing the todo
  const onSelectTodo = (todo) => {
    if (todo.completed) {
      toast("Todo is already marked as completed!");
    } else {
      setSelectedTodo(todo);
      setShowPopup(true);
    }
  };

  // show edit popup or not base on the state
  const handlePopup = () => {
    setShowPopup(false);
    setSelectedTodo(null);
  };

  // remove a todo from todos

  const handleRemoveTodo = (todo) => {
    setRTodoPopup(true);
    setSelectedTodo(todo);
  };

  const closePopup = () => {
    setRTodoPopup(false);
    setSelectedTodo(null);
  };

  const deleteTodo = (id) => {
    let updatedTodos = todos.filter((todo) => todo.id !== parseInt(id));
    setTodos(updatedTodos);
    toast("Removed the todo");
    setRTodoPopup(false);
    setSelectedTodo(null);
  };

  return (
    <div className="font-display">
      <Layout>
        <Heading />
        <AddTodo />
        <Features />
        <Todos
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          onSelectTodo={onSelectTodo}
          handleCheck={handleCheck}
          handleRemoveTodo={handleRemoveTodo}
        />
        {selectedTodo && showPopup && (
          <EditContent
            handlePopup={handlePopup}
            text={selectedTodo.todo}
            handleUpdateTodo={handleUpdateTodo}
          />
        )}
        {showRTodoPopup && (
          <ConfirmRemove
            deleteTodo={deleteTodo}
            id={selectedTodo.id}
            closePopup={closePopup}
          />
        )}

        <ToastContainer />
      </Layout>
    </div>
  );
};

export default App;
