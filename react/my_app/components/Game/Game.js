import Board from "./Board";
import '../../style/Game/Game.scss';

function Game() {
  return (
    <div className="Game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>test</div>
        <ol>ol</ol>
      </div>
    </div>
  );
}

export default Game;