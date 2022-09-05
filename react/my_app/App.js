import MyComponent from './MyComponent';
import Counter from './Counter';
import Event from './Event';
import Validation from './Validation';
import ScrollBox from './ScrollBox';
import Iteration from './Iteration';
import Info from './Info';
import './css/App.css';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible(!visible);

  return (
    <div className='base'>
      <MyComponent name='Jeong' number={1}>children</MyComponent>
      <Counter className='counter' />
      <Event />
      <Validation />
      <ScrollBox />
      <Iteration />
      <div className='visible'>
        <button onClick={onClick}>{visible ? 'hidden' : 'visible'}</button>
        {visible && <Info />}
      </div>
    </div>
  );
}

export default App;
