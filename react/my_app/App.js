import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Practice from './components/Practice';
import Todo from './components/Todo';
import NewsViewer from './components/NewsViewer';
import Game from './components/Game/Game';
import { Routes, Route } from 'react-router-dom';
import './style/App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='practice/*' element={<Practice />} />
        <Route path='todo' element={<Todo />} />
        <Route path='newsViewer/*' element={<NewsViewer />} />
        <Route path='game' element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
