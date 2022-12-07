import TodoItem from "./TodoItem";
import { useTodosState } from '../../contexts/TodosContext';

function TodoList() {
  const todos = useTodosState();
  return (
    <ul style={{ padding: '0px' }}>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
