import '../styles/TodoTemplate.scss';

function TodoTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <div className="title">Todo Title</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default TodoTemplate;