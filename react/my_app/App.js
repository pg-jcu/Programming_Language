import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Practice from './components/Practice';
import Todo from './components/Todo';
import './style/App.css'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
