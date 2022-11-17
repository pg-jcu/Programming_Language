import { useState } from "react";
import '../../styles/Practice/Say.css';

function Say() {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('enter');
  const onClickLeave = () => setMessage('leave');

  const [color, setColor] = useState('green');

  return (
    <div className="Say">
      <div className="enter">
        <button onClick={onClickEnter}>enter</button>
        <button onClick={onClickLeave}>leave</button>
      </div>
      <h2 style={{color}}>{message}</h2>
      <div className="color">
        <button onClick={() => setColor('red')}>
          red
        </button>
        <button onClick={() => setColor('yellow')}>
          yellow
        </button>
        <button onClick={() => setColor('blue')}>
          blue
        </button>
      </div>
    </div>
  );
}

export default Say;