import { Link, Route, Routes } from "react-router-dom";
import '../style/Profiles.scss';

function Profiles() {
  return (
    <div className="Profile">
      <h3>user list</h3>
      <ul>
        <li>
          <Link to="/practice/jeong">jeong</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/practice" render={() => <div>test</div>} />
      </Routes>
    </div>
  );
}

export default Profiles;