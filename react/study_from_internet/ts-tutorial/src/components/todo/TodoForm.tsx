import React, { useState } from 'react';
import { useTodosDispatch } from '../../contexts/TodosContext';

function TodoForm() {
  const [value, setValue] = useState('');
  const dispatch = useTodosDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      text: value,
    });
    setValue('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          value={value}
          placeholder="What to do?"
          onChange={onChange}        
        />
        <button>add</button>
      </form>
    </div>
  )
}

export default TodoForm;
