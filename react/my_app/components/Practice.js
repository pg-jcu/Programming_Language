import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say'
import Event from './Event';
import Validation from './Validation';
import ScrollBox from './ScrollBox';
import Iteration from './Iteration';
import Info from './Info';
import Average from './Average';
import SassComponent from './SassComponent';
import Immer from './Immer';
import Profiles from './Profiles';
import History from './History';
import Color from './Color';
import CounterContainer from '../containers/CounterContainer';
import TodosContainer from '../containers/TodosContainer';
import { useState } from 'react';
import '../style/Practice.scss';

function Practice() {
  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible(!visible);

  return (
    <div className='Practice'>
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
      <Immer />
      <Profiles />
      <History />
      <Color />
      <CounterContainer />
      <TodosContainer />
    </div>
  );
}

export default Practice;