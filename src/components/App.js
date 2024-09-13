import { useContext, useEffect, useState } from "react";
import Layout from "./Layout";
import Heading from "./Heading";
import AddTodo from "./addTodo/AddTodo";
import Features from "./features/Features";
import Todos from "./Todos/Todos";
import EditContent from "./EditContent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmRemove from "./ConfirmRemove";
import AddTodoPopup from "./addTodo/AddTodoPopup";
import { TodosContext } from "../context/TodosContext";
import { compareDate } from "../utilityFunctions/formateDate";
import { ThemeContext } from "../context/ThemeContext";

const App = () => {
  const [todos, setTodos] = useContext(TodosContext);
  const [showPopup, setShowPopup] = useState(false);
  const [showRTodoPopup, setRTodoPopup] = useState(false);
  const [showTodoAdd, setShowTodoAdd] = useState(false);
  const [filter, setFilter] = useState("all");
  const [sortDirection, setSortDirection] = useState("auto");
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    try {
      const getStoredTodos = localStorage.getItem("todos");

      if (getStoredTodos) {
        const todos = JSON.parse(getStoredTodos);
        setTodos(setStatus(todos));
      } else {
        setTodos([]);
      }
    } catch (e) {
      alert("Error parsing todos from localstorage");
      console.log("Parsing error: " + e);
      setTodos([]);
    }
  }, [setTodos]);

  // sync localStorage whenever todos change
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  // set darkmode
  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    if (getTheme) {
      setTheme(getTheme);
    }
    document.documentElement.setAttribute("class", theme);
  }, [theme, setTheme]);

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

  return (
    <div className="font-display">
      <Layout>
        <Heading />
        <AddTodo setShowTodoAdd={setShowTodoAdd} />
        <Features setFilter={setFilter} setSortDirection={setSortDirection} />
        <Todos
          todos={todos}
          setShowPopup={setShowPopup}
          setRTodoPopup={setRTodoPopup}
          filter={filter}
          sortDirection={sortDirection}
          setShowTodoAdd={setShowTodoAdd}
        />
        {showPopup && <EditContent setShowPopup={setShowPopup} />}
        {showRTodoPopup && <ConfirmRemove setRTodoPopup={setRTodoPopup} />}
        {showTodoAdd && <AddTodoPopup setShowTodoAdd={setShowTodoAdd} />}

        <ToastContainer />
      </Layout>
    </div>
  );
};

export default App;
