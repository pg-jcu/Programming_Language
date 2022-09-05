import { useEffect, useState } from "react";
import './css/Info.css';

function Info() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const onChangeName = event => setName(event.target.value);
  const onChangeNickname = event => setNickname(event.target.value);

  useEffect(() => console.log('mount'), []);
  useEffect(() => console.log(name), [name]);
  useEffect(() => {
    console.log('effect');
    return () => {
      console.log('cleanup');
    };
  }, []);

  return (
    <div className="info">
      <input 
        type="text"
        placeholder="name"
        value={name}
        className="infoInput" 
        onChange={onChangeName} 
      />
      <input 
        type="text"
        placeholder="nickname"
        value={nickname}
        className="infoInput" 
        onChange={onChangeNickname} 
      />
      <p>
        <b>name:</b> {name} <br />
        <b>nickname:</b> {nickname}
      </p>
    </div>
  );
}

export default Info;