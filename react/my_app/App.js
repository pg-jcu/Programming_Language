import Header from './components/Header';
import Nav from './components/Nav';
import Practice from './components/Practice';
import Todo from './components/Todo';
import Immer from './components/Immer';
import './style/App.css'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Routes>
        <Route path='/practice' element={<Practice />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/immer' element={<Immer />} />
      </Routes>
    </div>
  );
}

export default App;
