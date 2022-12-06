import TodoItem from "./TodoItem";

function TodoList() {
  const todos = [
    {
      id: 1,
      text: 'React',
      done: true,
    },
  ];
  return (
    <ul style={{ padding: '0px' }}>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
