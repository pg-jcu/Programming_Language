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
import CounterContainer from '../../containers/CounterContainer';
import TodosContainer from '../../containers/TodosContainer';
import SampleContainer from '../../containers/SampleContainer';
import { useState, Suspense, lazy } from 'react';
import '../../styles/Practice/Practice.scss';

const SplitMe = lazy(() => import('./SplitMe'));

function Practice() {
  const [visible, setVisible] = useState(false);
  const [split, setSplit] = useState(false);
  const onClickVisible = () => setVisible(!visible);
  const onClickSplit = () => setSplit(true);

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
        <button onClick={onClickVisible}>{visible ? 'hidden' : 'visible'}</button>
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
      <SampleContainer />
      <div className='split'>
        <p onClick={onClickSplit}>split</p>
        <Suspense fallback={<div>loading...</div>}>
          {split && <SplitMe />}
        </Suspense>
      </div>
    </div>
  );
}

export default Practice;