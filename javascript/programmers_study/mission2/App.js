import TodoList from "./components/TodoList.js";
import TodoInput from "./components/TodoInput.js";
import TodoCount from "./components/TodoCount.js";
import checkData from "./utils/checkData.js";

export default function App($target, initialState) {
  if (!new.target) {
    throw new Error("Not used new keyword!!");
  }

  this.$target = $target;
  this.state = initialState;

  checkData(this.state);

  this.setState = nextState => {
    this.state = nextState;
    todoList.setState(nextState);
    todoCount.setState(nextState);
  }

  const addTodo = nextData => {
    this.state = [ ...this.state, ...nextData ];
    this.setState(this.state);
  }

  new TodoInput(this.$target, addTodo);
  const todoList = new TodoList(this.$target, this.state);
  const todoCount = new TodoCount(this.$target, this.state);
}