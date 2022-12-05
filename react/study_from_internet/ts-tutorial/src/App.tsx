import './styles/App.css';
import Greetings from './Greetings';
import Counter from './Counter';

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
      <Counter />
    </div>
  );
}

export default App;
