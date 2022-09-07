import { useEffect, useReducer } from "react";
import '../style/Info.css';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

function Info() {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });
  const {name, nickname} = state;
  const onChange = event => {
    dispatch(event.target);
  };

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
        name="name"
        value={name}
        className="infoInput" 
        onChange={onChange} 
      />
      <input 
        type="text"
        placeholder="nickname"
        name="nickname"
        value={nickname}
        className="infoInput" 
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