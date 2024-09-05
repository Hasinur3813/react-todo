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
import AddTodoPopup from "./addTodo/AddTodoPopup";
import { compareDate } from "../utilityFunctions/formateDate";

const staticTodo = [
  {
    id: 1,
    todo: "This is my todo text",
    priority: "Medium",
    date: "24th July 24",
    checked: false,
    completed: false,
  },
  {
    id: 2,
    todo: "Have to complte the app",
    priority: "Medium",
    date: "24th Sep 24",
    checked: false,
    completed: false,
  },
  {
    id: 3,
    todo: "React is ongoing..",
    priority: "Low",
    date: "28th Aug 24",
    checked: false,
    completed: false,
  },
  {
    id: 4,
    todo: "React is ongoing..",
    priority: "High",
    date: "28th Aug 24",
    checked: false,
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showRTodoPopup, setRTodoPopup] = useState(false);
  const [showTodoAdd, setShowTodoAdd] = useState(false);
  const [filter, setFilter] = useState("all");
  const [sortDirection, setSortDirection] = useState("auto");

  useEffect(() => {
    const updatedTodos = setStatus(staticTodo);
    setTodos(updatedTodos);
  }, []);

  // compare date and set status
  const setStatus = (todos) => {
    return todos.map((todo) => {
      let status = compareDate(todo.date);

      return {
        ...todo,
        status,
      };
    });
  };

  // handle add todo button
  const handleAddTodo = () => {
    setShowTodoAdd(!showTodoAdd);
  };

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

  // filter todo implementation

  const handleFilterButton = (status) => {
    setFilter(status);
  };

  // sorting order functionality
  const handleSortOption = (value) => {
    setSortDirection(value);
  };
  return (
    <div className="font-display">
      <Layout>
        <Heading />
        <AddTodo handleAddTodo={handleAddTodo} />
        <Features
          handleFilterButton={handleFilterButton}
          handleSortOption={handleSortOption}
        />
        <Todos
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          onSelectTodo={onSelectTodo}
          handleCheck={handleCheck}
          handleRemoveTodo={handleRemoveTodo}
          filter={filter}
          sortDirection={sortDirection}
          handleAddTodo={handleAddTodo}
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
        {showTodoAdd && <AddTodoPopup handleAddTodo={handleAddTodo} />}

        <ToastContainer />
      </Layout>
    </div>
  );
};

export default App;
