import { createRef } from "react";
import '../style/ScrollBox.css';

function ScrollBox() {
  const box = createRef();
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
  const scrollToBottom = () => {
    const {scrollHeight, clientHeight} = box.current;
    box.current.scrollTop = scrollHeight - clientHeight;
  };
  const onClick = () => scrollToBottom();
  
  return (
    <div className="scrollBox">
      <div
        className="scroll"
        style={style}
        ref={box}>
        <div style={innerStyle} />
      </div>
      <button onClick={onClick}>to bottom</button>
    </div>
  );
}

export default ScrollBox;