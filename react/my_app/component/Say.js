import { useState } from "react";
import '../style/Say.css';

function Say() {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('enter');
  const onClickLeave = () => setMessage('leave');

  const [color, setColor] = useState('green');

  return (
    <div className="say">
      <div>
        <button className="sayBtn" onClick={onClickEnter}>enter</button>
        <button className="sayBtn" onClick={onClickLeave}>leave</button>
      </div>
      <h2 style={{color}}>{message}</h2>
      <div>
        <button className="colorBtn" onClick={() => setColor('red')}>
          red
        </button>
        <button className="colorBtn" onClick={() => setColor('yellow')}>
          yellow
        </button>
        <button className="colorBtn" onClick={() => setColor('blue')}>
          blue
        </button>
      </div>
    </div>
  );
}

export default Say;