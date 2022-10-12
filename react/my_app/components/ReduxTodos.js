import '../style/ReduxTodos.scss';

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div className='todoItem'>
      <input type="checkbox" />
      <span>Test</span>
      <button>delete</button>
    </div>
  );
}

function ReduxTodos({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='ReduxTodos'>
      <form onSubmit={onSubmit}>
        <input />
        <button type='submit'>submit</button>
      </form>
      <div className='todoList'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default ReduxTodos;