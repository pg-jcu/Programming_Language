import '../style/Todo.scss';

function Todo({ children }) {
  return (
    <div className="Todo">
      <div className="template">
        <div className="title">Todo Title</div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Todo;