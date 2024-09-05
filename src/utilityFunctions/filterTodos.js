export function filterTodos(filter, todos) {
  let filteredTodos;

  switch (filter) {
    case "completed":
      filteredTodos = todos.filter((todo) => todo.completed);
      break;

    case "pending":
      filteredTodos = todos.filter(
        (todo) => todo.status === "pending" && !todo.completed
      );
      break;

    case "active":
      filteredTodos = todos.filter(
        (todo) => todo.status === "active" && !todo.completed
      );
      break;

    default:
      filteredTodos = todos;
  }

  return filteredTodos;
}
