import Board from "./Board";
import '../../style/Game/Game.scss';
import { useState, useMemo } from "react";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Game() {
  const [state, setState] = useState({
    history: [{
      squares: Array(9).fill(null)
    }],
    xIsNext: true
  });
  const { history, xIsNext } = state;
  const current = history.at(-1);
  const winner = useMemo(() => calculateWinner(current.squares), [current.squares]);
  const status = winner ? 
    'Winner: ' + winner : 
    `Next player: ${xIsNext ? 'X' : 'O'}`;
  const onClick = (i) => {
    const nextState = current.squares.slice();

    if (calculateWinner(nextState) || nextState[i]) {
      return;
    }

    nextState[i] = xIsNext ? 'X' : 'O';
    setState({
      history: history.concat([{
        squares: nextState
      }]),
      xIsNext: !xIsNext
    });
  };

  return (
    <div className="Game">
      <div className="game-board">
        <Board 
          squares={current.squares} 
          onClick={(i) => onClick(i)}
        />
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ol>ol</ol>
      </div>
    </div>
  );
}

export default Game;