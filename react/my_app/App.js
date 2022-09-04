import MyComponent from './MyComponent';
import Counter from './Counter';
import Event from './Event';
import './css/App.css';

function App() {
  return (
    <div className='base'>
      <MyComponent name='Jeong' number={1}>children</MyComponent>
      <Counter className='counter' />
      <Event />
    </div>
  );
}

export default App;
