import MyComponent from './component/MyComponent';
import Counter from './component/Counter';
import Event from './component/Event';
import Validation from './component/Validation';
import ScrollBox from './component/ScrollBox';
import Iteration from './component/Iteration';
import Info from './component/Info';
import './style/App.css'
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible(!visible);

  return (
    <>
      <h2 style={{textAlign: 'center', color: 'green'}}>My App</h2>
      <div className='app'>
        <MyComponent name='Jeong' number={1}>children</MyComponent>
        <Counter />
        <Event />
        <Validation />
        <ScrollBox />
        <Iteration />
        <div className='visible'>
          <button onClick={onClick}>{visible ? 'hidden' : 'visible'}</button>
          {visible && <Info />}
        </div>
      </div>
    </>
  );
}

export default App;
