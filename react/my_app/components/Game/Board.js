import { useState } from "react";
import Square from "./Square";
import '../../style/Game/Board.scss';

function Board() {
  const [squares, setSquares] = useState({
    data: Array(9).fill(null),
    xIsNext: true
  });
  const status = `Next player: ${squares.xIsNext ? 'X' : 'O'}`;
  const onClick = (i) => {
    const nextData = squares.data.slice();
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