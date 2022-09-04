import MyComponent from './MyComponent';
import Counter from './Counter';
import Event from './Event';
import Validation from './Validation';
import ScrollBox from './ScrollBox';
import Iteration from './Iteration';
import './css/App.css';

function App() {
  return (
    <div className='base'>
      <MyComponent name='Jeong' number={1}>children</MyComponent>
      <Counter className='counter' />
      <Event />
      <Validation />
      <ScrollBox />
      <Iteration />
    </div>
  );
}

export default App;
