import TodoList from "./components/TodoList.js";
import TodoInput from "./components/TodoInput.js";
import TodoCount from "./components/TodoCount.js";
import checkData from "./utils/checkData.js";
import { getTodo, addTodo } from "./api.js";

export default function App({ $target, userId }) {
  if (!new.target) {
    throw new Error("Not used new keyword!!");
  }

  this.state = [];

  checkData(this.state);

  this.render = async () => {
    const todo = await getTodo(userId);
    this.setState(todo);
  }

  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState(nextState);
    todoCount.setState(nextState);
  };

  this.render();

  const onSubmit = async (nextData) => {
    await addTodo(userId, nextData);

    const todo = await getTodo(userId);
    this.setState(todo);
  }

  // const removeTodo = index => {
  //   const list = this.state.filter((_, idx) => index != idx);
  //   this.setState(list);
  // };

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
  const todoList = new TodoList({ $target, initialState: this.state });
  const todoCount = new TodoCount({ $target, initialState: this.state });
}
