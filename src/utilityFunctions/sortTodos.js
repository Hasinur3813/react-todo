const PRIORITY_ORDER = {
  High: 1,
  Medium: 2,
  Low: 3,
};

export function sortedTodosByPriority(todos, direction = "auto") {
  let sortedTodos;
  switch (direction) {
    case "auto":
      sortedTodos = todos;
      break;
    case "asc":
      sortedTodos = todos.slice().sort((a, b) => {
        return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority];
      });
      break;
    case "dsc":
      sortedTodos = todos.slice().sort((a, b) => {
        return PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority];
      });
      break;
    default:
      return todos;
  }

  return sortedTodos;
}
