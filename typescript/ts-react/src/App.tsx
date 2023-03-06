import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://seeyoujeong.github.io" target="_blank">
          <img src="../public/smile.png" className="logo smile" alt="My logo" />
        </a>
      </div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <Outlet />
    </div>
  );
}

export default App
