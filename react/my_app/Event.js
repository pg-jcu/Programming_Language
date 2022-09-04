import { useState } from 'react';
import './css/Event.css';

function Event() {
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  const {username, message} = form;
  const onChange = event => {
    const nextFrom = {
      ...form,
      [event.target.name]: event.target.value
    };
    setForm(nextFrom);
  };
  const onClick = () => {
    alert(`${username}: ${message}`);
    setForm({
      username: '',
      message: ''
    })
  };
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      onClick();
    }
  }

  return (
    <div className="event">
      <input
        type="text"
        name="username"
        placeholder="username"
        className="inputEvent"
        value={username}
        onChange={onChange}
      />
      <input 
        type="text" 
        name="message" 
        placeholder="message"
        className="inputEvent"
        value={message}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />  
      <button onClick={onClick}>alert</button>
    </div>
  );
}

export default Event;