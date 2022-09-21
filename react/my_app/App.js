import MyComponent from './component/MyComponent';
import Counter from './component/Counter';
import Say from './component/Say'
import Event from './component/Event';
import Validation from './component/Validation';
import ScrollBox from './component/ScrollBox';
import Iteration from './component/Iteration';
import Info from './component/Info';
import Average from './component/Average';
import SassComponent from './component/SassComponent';
import './style/App.css'
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible(!visible);

  return (
    <>
      <div className='App'>
        <div className='header'>
          <h2>My App</h2>
        </div>
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
        <SassComponent />
      </div>
    </>
  );
}

export default App;
