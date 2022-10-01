import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import '../style/Todo.scss';
import { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn React',
      checked: true,
    },
    {
      id: 2,
      text: 'Learn SCSS',
      checked: true,
    },
    {
      id: 3,
      text: 'Make TodoApp',
      checked: false,
    },
  ]);

  return (
    <div className="Todo">
      <TodoTemplate>
        <TodoInsert />
        <TodoList todos={todos}/>
      </TodoTemplate>
    </div>
  );
}

export default Todo;