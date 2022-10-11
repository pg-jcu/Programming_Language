import { useEffect } from "react";
import useInputs from "../lib/useInputs.js";
import '../style/Info.css';

function Info() {
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });
  const {name, nickname} = state;

  useEffect(() => console.log('mount'), []);
  useEffect(() => console.log(name), [name]);
  useEffect(() => {
    console.log('effect');
    return () => {
      console.log('cleanup');
    };
  }, []);

  return (
    <div className="Info">
      <input 
        type="text"
        placeholder="name"
        name="name"
        value={name} 
        onChange={onChange} 
      />
      <input 
        type="text"
        placeholder="nickname"
        name="nickname"
        value={nickname} 
        onChange={onChange} 
      />
      <p>
        <b>name:</b> {name} <br />
        <b>nickname:</b> {nickname}
      </p>
    </div>
  );
}

export default Info;