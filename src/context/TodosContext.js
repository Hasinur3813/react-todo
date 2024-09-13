import { createContext, useState } from "react";

export const TodosContext = createContext([]);

export function StoreTodos({ children }) {
  const [todos, setTodos] = useState([]);
  const [trackTodo, setTrackTodo] = useState();

  return (
    <TodosContext.Provider value={[todos, setTodos, trackTodo, setTrackTodo]}>
      {children}
    </TodosContext.Provider>
  );
}
