import './css/Counter.css';
import { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);
  const onClickPlus = () => setNumber(number + 1);
  const onClickMinus = () => setNumber(number - 1);

  const [color, setColor] = useState('black');
  const onClickChangeColor = () => setColor('blue');

  return (
    <div className='counter'>
      <div style={{ color }}>{number}</div>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
      <button onClick={onClickChangeColor}>Change Color</button>
    </div>
  );
}

export default Counter;