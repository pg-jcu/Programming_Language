import './styles/App.css';
import Greetings from './components/Greetings';
import Counter from './components/Counter';
import MyForm from './components/MyForm';
import ReducerSample from './components/ReducerSample';
import TodoForm from './components/todo/TodoForm';

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
      <TodoForm />
    </div>
  );
}

export default App;
