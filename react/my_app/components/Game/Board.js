import { useState } from "react";
import Square from "./Square";
import '../../style/Game/Board.scss';
import { useMemo } from "react";

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

function Board() {
  const [squares, setSquares] = useState({
    data: Array(9).fill(null),
    xIsNext: true
  });
  const winner = useMemo(() => calculateWinner(squares.data), [squares.data]);
  const status = winner ? 
    'Winner: ' + winner : 
    `Next player: ${squares.xIsNext ? 'X' : 'O'}`;
  const onClick = (i) => {
    const nextData = squares.data.slice();

    if (calculateWinner(nextData) || nextData[i]) {
      return;
    }

    nextData[i] = squares.xIsNext ? 'X' : 'O';
    setSquares({
      data: nextData,
      xIsNext: !squares.xIsNext
    });
  };

  return (
    <div className="Board">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square 
          value={squares.data[0]} 
          onClick={() => onClick(0)}
        />
        <Square 
          value={squares.data[1]} 
          onClick={() => onClick(1)}
        />
        <Square 
          value={squares.data[2]} 
          onClick={() => onClick(2)}
        />
      </div>
      <div className="board-row">
        <Square 
          value={squares.data[3]} 
          onClick={() => onClick(3)}
        />
        <Square 
          value={squares.data[4]} 
          onClick={() => onClick(4)}
        />
        <Square 
          value={squares.data[5]} 
          onClick={() => onClick(5)}
        />
      </div>
      <div className="board-row">
        <Square 
          value={squares.data[6]} 
          onClick={() => onClick(6)}
        />
        <Square 
          value={squares.data[7]} 
          onClick={() => onClick(7)}
        />
        <Square 
          value={squares.data[8]} 
          onClick={() => onClick(8)}
        />
      </div>
    </div>
  );
}

export default Board;