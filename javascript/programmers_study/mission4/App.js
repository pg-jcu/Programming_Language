import TodoList from "./components/TodoList.js";
import TodoInput from "./components/TodoInput.js";
import TodoCount from "./components/TodoCount.js";
import checkData from "./utils/checkData.js";
import { getTodo, addTodo, deleteTodo, deleteAllTodo, toggleTodo } from "./api.js";

export default function App({ $target, userId }) {
  if (!new.target) {
    throw new Error("Not used new keyword!!");
  }

  this.state = [];

  checkData(this.state);

  this.setState = async () => {
    const nextState = await getTodo(userId);

    this.state = nextState;
    todoList.setState(nextState);
    todoCount.setState(nextState);
  };

  this.setState();

  const onSubmit = async (nextData) => {
    await addTodo(userId, nextData);

    this.setState();
  };

  const onDelete = async (todoId) => {
    await deleteTodo(userId, todoId);

    this.setState();
  };

  const onDeleteAll = async () => {
    await deleteAllTodo(userId);

    this.setState();
  };

  const onToggle = async (todoId) => {
    await toggleTodo(userId, todoId);

    this.setState();
  };

  document.addEventListener('removeAll', () => {
    onDeleteAll();
  });

  new TodoInput({ $target, onSubmit });
  const todoList = new TodoList({ $target, initialState: this.state, onDelete, onToggle });
  const todoCount = new TodoCount({ $target, initialState: this.state });
}
