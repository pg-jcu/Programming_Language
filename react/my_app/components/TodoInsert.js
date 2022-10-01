import { MdAdd } from 'react-icons/md';
import '../style/TodoInsert.scss';

function TodoInsert() {
  return (
    <form className='TodoInsert'>
      <input placeholder='Insert Todo' />
      <button type='submit'>
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;