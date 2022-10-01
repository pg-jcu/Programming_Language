import MyComponent from './components/MyComponent';
import Counter from './components/Counter';
import Say from './components/Say'
import Event from './components/Event';
import Validation from './components/Validation';
import ScrollBox from './components/ScrollBox';
import Iteration from './components/Iteration';
import Info from './components/Info';
import Average from './components/Average';
import SassComponent from './components/SassComponent';
import Todo from './components/Todo';
import TodoInsert from './components/TodoInsert';
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
        <Todo>
          <TodoInsert />
        </Todo>
      </div>
    </>
  );
}

export default App;
