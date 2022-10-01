import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from 'react-icons/md';
import '../style/TodoListItem.scss';

function TodoListItem() {
  return (
    <div className='TodoListItem'>
      <div className='checkbox'>
        <MdCheckBoxOutlineBlank />
        <div className='text'>todo</div>
      </div>
      <div className='remove'>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
}

export default TodoListItem;