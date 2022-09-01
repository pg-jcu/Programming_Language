import MyComponent from './MyComponent';
import Counter from './Counter';
import './css/App.css';

function App() {
  return (
    <div id='base'>
      <MyComponent name='Jeong' number={1}>children</MyComponent>
      <Counter className='counter' />
    </div>
  );
}

export default App;
