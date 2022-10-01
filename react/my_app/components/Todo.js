import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import '../style/Todo.scss';

function Todo() {
  return (
    <div className="Todo">
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    </div>
  );
}

export default Todo;