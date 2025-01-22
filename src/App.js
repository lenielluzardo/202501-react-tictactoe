import {useState} from "react";

import Square from "./Square.js";


export default function Board() {
const [squares, setSquares] = useState(Array(9).fill(null)); 

function onHandleClick (i) {
  const nextSquares = squares.slice();
  nextSquares[i] = "X";
  setSquares(nextSquares);
}

  return (
  <>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => onHandleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => onHandleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => onHandleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => onHandleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => onHandleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => onHandleClick(5)}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => onHandleClick(6)}/>  
      <Square value={squares[7]} onSquareClick={() => onHandleClick(7)}/>  
      <Square value={squares[8]} onSquareClick={() => onHandleClick(8)}/>  
    </div>
  </>
  )
}
