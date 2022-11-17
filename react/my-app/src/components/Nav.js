import { Link } from "react-router-dom";
import '../styles/Nav.scss';

function Nav() {
  return (
    <div className="Nav">
      <ul>
        <li>
          <Link to=".">Home</Link>
        </li>
        <li>
          <Link to="practice">Practice</Link>
        </li>
        <li>
          <Link to="todo">Todo</Link>
        </li>
        <li>
          <Link to="newsViewer">NewsViewer</Link>
        </li>
        <li>
          <Link to="game">Game</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;