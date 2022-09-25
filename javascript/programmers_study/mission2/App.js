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

    localStorage.setItem('data', JSON.stringify(nextState));
  }

  const addTodo = nextData => {
    const list = [ ...this.state, ...nextData ];
    this.setState(list);
  }

  const removeTodo = index => {
    const list = this.state.filter((_, idx) => index != idx);
    this.setState(list);
  }

  const completeTodo = index => {
    const list = this.state.map(({ text, isCompleted }, idx) => {
      if (index == idx) {
        return { text, isCompleted: !isCompleted };
      } else {
        return { text, isCompleted };
      }
    });
    this.setState(list);
  }

  document.addEventListener('removeAll', () => {
    this.setState([]);
  });

  new TodoInput(this.$target, addTodo);
  const todoList = new TodoList(this.$target, this.state, removeTodo, completeTodo);
  const todoCount = new TodoCount(this.$target, this.state);
}