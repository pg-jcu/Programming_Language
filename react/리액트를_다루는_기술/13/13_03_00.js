import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/info" component={About} />
        {/* <Route path={['/about', '/info']} component={About} /> */}
      </Routes>
    </div>
  );
};

export default App;