import MyComponent from './component/MyComponent';
import Counter from './component/Counter';
import Say from './component/Say'
import Event from './component/Event';
import Validation from './component/Validation';
import ScrollBox from './component/ScrollBox';
import Iteration from './component/Iteration';
import Info from './component/Info';
import Average from './component/Average';
import './style/App.css'
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible(!visible);

  return (
    <>
      <h2 style={{textAlign: 'center', color: 'green', marginTop: '0px'}}>My App</h2>
      <div className='app'>
        <MyComponent name='Jeong' number={1}>children</MyComponent>
        <Counter />
        <Say />
        <Event />
        <Validation />
        <ScrollBox />
        <Iteration />
        <div className='visible'>
          <button onClick={onClick}>{visible ? 'hidden' : 'visible'}</button>
          {visible && <Info />}
        </div>
        <Average />
      </div>
    </>
  );
}

export default App;
