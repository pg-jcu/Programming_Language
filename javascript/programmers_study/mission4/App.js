import TodoList from "./components/TodoList.js";
import TodoInput from "./components/TodoInput.js";
import TodoCount from "./components/TodoCount.js";
import Users from "./components/Users.js";
import checkData from "./utils/checkData.js";
import { 
  getTodo, 
  addTodo, 
  deleteTodo, 
  deleteAllTodo, 
  toggleTodo, 
  getUsers 
} from "./api.js";

export default function App({ $target, userId }) {
  if (!new.target) {
    throw new Error("Not used new keyword!!");
  }

  this.state = { userTodo: [], users: []};

  checkData(this.state.userTodo);

  this.setState = async () => {
    const userTodo = await getTodo(userId);
    const users = await getUsers();
    const nextState = { userTodo, users };

    this.state = nextState;
    todoList.setState(nextState.userTodo);
    todoCount.setState(nextState.userTodo);
    usersList.setState(nextState.users)
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
  const todoList = new TodoList({ 
    $target, 
    initialState: this.state.userTodo, 
    onDelete, 
    onToggle 
  });
  const todoCount = new TodoCount({ $target, initialState: this.state.userTodo });
  const usersList = new Users({ $target, initialState: this.state.users });
}
