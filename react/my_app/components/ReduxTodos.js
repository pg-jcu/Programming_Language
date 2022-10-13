import '../style/ReduxTodos.scss';

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div className='todoItem'>
      <input 
        type="checkbox" 
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.is)}>delete</button>
    </div>
  );
}

function ReduxTodos({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };
  const onChange = (e) => onChangeInput(e.target.value);

  return (
    <div className='ReduxTodos'>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type='submit'>submit</button>
      </form>
      <div className='todoList'>
        {todos.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}

export default ReduxTodos;