export default function filterIsCompleted(todos, boolean) {
  if (boolean) {
    return todos.filter((todo) => todo.isCompleted);
  }

  if (!boolean) {
    return todos.filter((todo) => !todo.isCompleted);
  }
}