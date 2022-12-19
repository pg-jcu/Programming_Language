import React, { useCallback, useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";
import '../styles/TodoList.scss';
import { List } from "react-virtualized";

function TodoList({ todos, onRemove, onToggle }) {
  const [todoWidth, setTodoWidth] = useState(512);

  const onResize = useCallback(() => {
    const width = document.documentElement.clientWidth; 

    if (width < 555) {
      setTodoWidth(350);
    } else {
      setTodoWidth(512);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.addEventListener('resize', onResize);
    }
  }, [onResize]);

  const rowRenderer = useCallback(({ index, key, style }) => {
    const todo = todos[index];

    return (
      <TodoListItem
        todo={todo}
        key={key}
        onRemove={onRemove}
        onToggle={onToggle}
        style={style}
      />
    );
  }, [onRemove, onToggle, todos]);

  return (
    <List
      className="TodoList"
      width={todoWidth}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
}

export default React.memo(TodoList);