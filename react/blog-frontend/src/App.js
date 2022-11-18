import './App.css';
import { Routes, Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PostListPage />}>
          <Route path='/@:username' element={<PostListPage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/write' element={<WritePage />} />
        <Route path='/@:username/:postId' element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
