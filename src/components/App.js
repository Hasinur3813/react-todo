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

const App = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showRTodoPopup, setRTodoPopup] = useState(false);
  const [showTodoAdd, setShowTodoAdd] = useState(false);
  const [filter, setFilter] = useState("all");
  const [sortDirection, setSortDirection] = useState("auto");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    try {
      const getStoredTodos = localStorage.getItem("todos");

      if (getStoredTodos) {
        const todos = JSON.parse(getStoredTodos);
        setTodos(todos);
      } else {
        setTodos([]);
      }
    } catch (e) {
      alert("Error parsing todos from localstorage");
      console.log("Parsing error: " + e);
      setTodos([]);
    }
  }, []);

  // sync localStorage whenever todos change
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  // added todo control
  const handleSubmitTodo = (todo) => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const addTodo = [...storedTodos, todo];
    localStorage.setItem("todos", JSON.stringify(addTodo));
    setTodos(setStatus(addTodo));
    toast("Your todo has been added!");
  };

  // set darkmode
  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    if (getTheme) {
      setTheme(getTheme);
    }
    document.documentElement.setAttribute("class", theme);
  }, [theme]);

  // handle theme change button

  const handleThemeChange = (theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

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
    let withoutDeleted = todos.filter((todo) => todo.id !== id);
    setTodos(withoutDeleted);
    setRTodoPopup(false);
    setSelectedTodo(null);
    toast("Removed the todo");
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
          handleThemeChange={handleThemeChange}
          theme={theme}
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
        {showTodoAdd && (
          <AddTodoPopup
            handleAddTodo={handleAddTodo}
            handleSubmitTodo={handleSubmitTodo}
          />
        )}

        <ToastContainer />
      </Layout>
    </div>
  );
};

export default App;
