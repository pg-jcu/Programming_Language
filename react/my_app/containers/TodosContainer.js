import { connect } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import ReduxTodos from "../components/ReduxTodos";

function TodosContainer({input, todos, changeInput, insert, toggle, remove}) {
  return (
    <ReduxTodos 
      input={input} 
      todos={todos} 
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
}

export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos
  }),
  {
    changeInput,
    insert,
    toggle,
    remove
  }
)(TodosContainer);