import TodoList from "./components/TodoList.js";
import TodoInput from "./components/TodoInput.js";
import TodoCount from "./components/TodoCount.js";
import UsersList from "./components/UsersList.js";
import UsersTodo from "./components/UsersTodo.js";
import Loading from "./components/Loading.js";
import checkData from "./utils/checkData.js";
import filterIsCompleted from "./utils/filterIsCompleted.js";
import { 
  getTodo, 
  addTodo, 
  deleteTodo, 
  deleteAllTodo, 
  toggleTodo, 
  getUsers 
} from "./api.js";
import { getItem, setItem } from "./utils/storage.js";
import { LOCAL_STORAGE_KEY } from "./utils/constants.js";

export default function App({ $target, userId }) {
  if (!new.target) {
    throw new Error("Not used new keyword!!");
  }

  this.state = { userTodo: [], users: [] };
  this.likedUsers = getItem(LOCAL_STORAGE_KEY, {});
  const loading = new Loading({ $target });

  this.setState = async () => {
    loading.on();
    const userTodo = await getTodo(userId);
    const users = await getUsers();
    loading.off();
    checkData(userTodo);
    const nextState = { userTodo, users };

    this.state = nextState;
    todoList.setState(filterIsCompleted(nextState.userTodo, true));
    notTodoList.setState(filterIsCompleted(nextState.userTodo, false));
    todoCount.setState(nextState.userTodo);
    usersList.setState(nextState.users, this.likedUsers);
  };

  this.likeState = (nextState) => {
    this.likedUsers = nextState;
    usersList.setState(this.state.users, this.likedUsers);
    setItem(LOCAL_STORAGE_KEY, nextState);
  };

  this.setState();

  const onSubmit = async (nextData) => {
    loading.on();
    await addTodo(userId, nextData);
    loading.off();
    this.setState();
  };

  const onDelete = async (todoId) => {
    loading.on();
    await deleteTodo(userId, todoId);
    loading.off();
    this.setState();
  };

  const onDeleteAll = async () => {
    loading.on();
    await deleteAllTodo(userId);
    loading.off();
    this.setState();
  };

  const onToggle = async (todoId) => {
    loading.on();
    await toggleTodo(userId, todoId);
    loading.off();
    this.setState();
  };

  const onShow = async (userId) => {
    loading.on();
    const todos = await getTodo(userId);
    loading.off();
    usersTodo.setState(userId, todos);
  };

  const onLike = (userId) => {
    const likedUsers = { ...this.likedUsers };

    if (userId in likedUsers) {
      likedUsers[userId] = !likedUsers[userId];
    } else {
      likedUsers[userId] = true;
    }

    this.likeState(likedUsers);
  };

  const onUsersLikedShow = (checked) => {
    if (checked) {
      const list = this.state.users.filter(user => user in this.likedUsers);
      usersList.setState(list, this.likedUsers);
    } else {
      usersList.setState(this.state.users, this.likedUsers);
    }
  };

  document.addEventListener('removeAll', () => {
    onDeleteAll();
  });

  new TodoInput({ $target, onSubmit });
  const notTodoList = new TodoList({
    $target, 
    initialState: this.state.userTodo, 
    isCompletedList: false,
    onDelete, 
    onToggle,
  });
  const todoList = new TodoList({ 
    $target, 
    initialState: this.state.userTodo,
    isCompletedList: true, 
    onDelete, 
    onToggle,
  });
  const todoCount = new TodoCount({ 
    $target, 
    initialState: this.state.userTodo 
  });
  const usersList = new UsersList({ 
    $target, 
    initialState: this.state.users,
    initialLike: this.likedUsers, 
    onShow,
    onLike,
    onUsersLikedShow 
  });
  const usersTodo = new UsersTodo({ $target });
}
