import React, { useState } from "react";

function TodoForm() {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(value);
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
