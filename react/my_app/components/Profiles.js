import Profile from "./Profile";
import { Link, Route, Routes } from "react-router-dom";
import '../style/Profiles.scss';

function Profiles() {
  return (
    <div className="Profiles">
      <h3>user list</h3>
      <ul>
        <li>
          <Link to="profile/jeong">jeong profile</Link>
        </li>
        <li>
          <Link to="profile/gildong">gildong profile</Link>
        </li>
      </ul>

      <Routes>
        <Route path="profile/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default Profiles;