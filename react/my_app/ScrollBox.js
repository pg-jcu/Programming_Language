import { createRef } from "react";

function ScrollBox() {
  const box = createRef();
  const border = {
    border: '2px solid black',
    marginTop: '30px',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
  const style = {
    border: '1px solid black',
    height: '300px',
    width: '300px',
    overflow: 'auto',
    position: 'relative'
  };
  const innerStyle = {
    width: '100%',
    height: '650px',
    background: 'linear-gradient(white, black)'
  };
  const scrollToBottom = () => {
    const {scrollHeight, clientHeight} = box.current;
    box.current.scrollTop = scrollHeight - clientHeight;
  }
  const onClick = () => scrollToBottom();
  
  return (
    <div style={border}>
      <div
        style={style}
        ref={box}>
        <div style={innerStyle} />
      </div>
      <button onClick={onClick}>to bottom</button>
    </div>
  );
}

export default ScrollBox;