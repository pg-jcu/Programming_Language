import TodoList from "./components/TodoList.js";
import TodoInput from "./components/TodoInput.js";
import checkData from "./utils/checkData.js";

export default function App($target, data) {
  if (!new.target) {
    throw new Error("Not used new keyword!!");
  }

  this.$target = $target;
  this.state = data;

  checkData(this.state);

  new TodoInput(this.$target);
  new TodoList(this.$target, this.state);
}