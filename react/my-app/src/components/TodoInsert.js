import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import '../styles/TodoInsert.scss';

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(e => {
    onInsert(value);
    setValue('');

    e.preventDefault();
  }, [onInsert, value]);

  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input 
        placeholder='Insert Todo'
        value={value}
        onChange={onChange}
      />
      <button type='submit'>
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;