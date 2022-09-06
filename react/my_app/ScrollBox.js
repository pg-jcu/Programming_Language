import { createRef } from "react";
import './css/ScrollBox.css';

function ScrollBox() {
  const box = createRef();
  const border = {
    border: '2px solid green',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const style = {
    border: '1px solid green',
    height: '300px',
    width: '300px',
    overflow: 'auto',
    position: 'relative'
  };
  const innerStyle = {
    width: '100%',
    height: '650px',
    background: 'linear-gradient(green, black)'
  };
  const btnStyle = {
    border: '1px solid green',
    backgroundColor: 'black',
    color: 'green'
  };
  const scrollToBottom = () => {
    const {scrollHeight, clientHeight} = box.current;
    box.current.scrollTop = scrollHeight - clientHeight;
  };
  const onClick = () => scrollToBottom();
  
  return (
    <div style={border}>
      <div
        className="scroll"
        style={style}
        ref={box}>
        <div style={innerStyle} />
      </div>
      <button style={btnStyle} onClick={onClick}>to bottom</button>
    </div>
  );
}

export default ScrollBox;