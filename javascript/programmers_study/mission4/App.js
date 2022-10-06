import TodoList from "./components/TodoList.js";
import TodoInput from "./components/TodoInput.js";
import TodoCount from "./components/TodoCount.js";
import checkData from "./utils/checkData.js";
import { getTodo, addTodo, deleteTodo } from "./api.js";

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
  }

  const onDelete = async (id) => {
    await deleteTodo(userId, id);

    this.setState();
  };

  // const completeTodo = index => {
  //   const list = this.state.map(({ text, isCompleted }, idx) => {
  //     if (index == idx) {
  //       return { text, isCompleted: !isCompleted };
  //     } else {
  //       return { text, isCompleted };
  //     }
  //   });
  //   this.setState(list);
  // };

  // document.addEventListener('removeAll', () => {
  //   this.setState([]);
  // });

  new TodoInput({ $target, onSubmit });
  const todoList = new TodoList({ $target, initialState: this.state, onDelete });
  const todoCount = new TodoCount({ $target, initialState: this.state });
}
