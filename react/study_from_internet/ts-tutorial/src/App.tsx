import './styles/App.css';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';

function App() {
  const onClick = (name: string) => {
    alert(`${name} say hello`);
  };
  return (
    <div className="App">
      <h1>React TypeScript</h1>
      <hr />
      <Greetings name="jeong" onClick={onClick} />
      <hr />
      <Counter initialCount={0} />
      <hr />
      <MyForm />
      <hr />
      <ReducerSample />
      <hr />
    </div>
  );
}

export default App;
