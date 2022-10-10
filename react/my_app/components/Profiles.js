import Profile from "./Profile";
import { NavLink, Route, Routes } from "react-router-dom";
import '../style/Profiles.scss';

function Profiles() {
  return (
    <div className="Profiles">
      <h3>user list</h3>
      <ul>
        <li>
          <NavLink 
            to="profile/jeong"
            style={({ isActive }) => ({ color: isActive ? 'red' : 'green'})}>
            jeong profile
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="profile/gildong"
            style={({ isActive }) => ({ color: isActive ? 'red' : 'green'})}>
            gildong profile
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="profile/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default Profiles;