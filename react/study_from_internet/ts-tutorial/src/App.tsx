import './App.css';
import Greetings from './Greetings';

function App() {
  const onClick = (name: string) => {
    alert(`${name} say hello`);
  };
  return (
    <div className="App">
      <Greetings name="jeong" onClick={onClick} />
    </div>
  );
}

export default App;
