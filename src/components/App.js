import Layout from "./Layout";
import Heading from "./Heading";
import AddTodo from "./addTodo/AddTodo";
import Features from "./features/Features";
import Todos from "./Todos/Todos";
import { useEffect, useState } from "react";
import EditContent from "./EditContent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    priority: "High",
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

  useEffect(() => {
    setTodos(staticTodo);
  }, []);

  const handleCheck = (id) => {
    let checkedTodo = todos.map((todo) =>
      todo.id === parseInt(id)
        ? { ...todo, checked: !todo.checked, completed: !todo.completed }
        : todo
    );

    setTodos(checkedTodo);
    console.log(checkedTodo);
  };

  const handleUpdateTodo = (e, updateText) => {
    e.preventDefault();
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === selectedTodo.id ? { ...todo, todo: updateText } : todo
      )
    );
    toast("Your Todo has been updated...");
    setShowPopup(false);
  };

  const onSelectTodo = (todo) => {
    setSelectedTodo(todo);
    setShowPopup(true);
  };

  const handlePopup = () => {
    setShowPopup(false);
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
        />
        {selectedTodo && showPopup && (
          <EditContent
            handlePopup={handlePopup}
            text={selectedTodo.todo}
            handleUpdateTodo={handleUpdateTodo}
          />
        )}

        <ToastContainer />
      </Layout>
    </div>
  );
};

export default App;
