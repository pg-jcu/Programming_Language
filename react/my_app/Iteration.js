import { useState } from "react";

function Iteration() {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid black',
    marginTop: '20px',
    padding: '5px'
  };

  const ulStyle = {
    listStyle: 'none',
    textAlign: 'center',
    margin: '0px',
    padding: '0px'
  }

  const inputStyle = {
    padding: '0px',
    height: '20px',
    marginRight: '-6px'
  }

  const btnStyle = {
    height: '24px',
    width: '40px',
    marginRight: '0px',
    marginTop: '0px'
  }

  const [names, setNames] = useState([
    {id: 1, text: 'Jeong'},
    {id: 2, text: 'Chan'},
    {id: 3, text: 'Uk'}
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(4);
  const onChange = event => setInputText(event.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }
  const nameList = names.map(name => 
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>
  );

  return (
    <div style={style}>
      <div style={{display: 'flex'}}>
        <input style={inputStyle} value={inputText} onChange={onChange} />
        <button style={btnStyle} onClick={onClick}>add</button>
      </div>
      <ul style={ulStyle}>{nameList}</ul>
    </div>
  );
}

export default Iteration;