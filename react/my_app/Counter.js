import './css/Counter.css';
import { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);
  const onClickPlus = () => setNumber(number + 1);
  const onClickMinus = () => setNumber(number - 1);

  const [color, setColor] = useState('green');
  const onClickChangeColor = () => setColor('yellow');

  return (
    <div className="counter">
      <div style={{ color }}>{number}</div>
      <div>
        <button className="btn" onClick={onClickPlus}>+</button>
        <button className="btn" onClick={onClickMinus}>-</button>
      </div>
      <button onClick={onClickChangeColor}>Change Color</button>
    </div>
  );
}

export default Counter;