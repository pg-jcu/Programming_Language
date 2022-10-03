import { Link } from "react-router-dom";
import '../style/Nav.scss';

function Nav() {
  return (
    <div className="Nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/practice">Practice</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;