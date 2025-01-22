import {useState} from "react";

import Square from "./Square.js";


export default function Board({xIsNext, squares, onPlay}) {

  function calculateWinner(squares){
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

    for (let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null
  }

  function onHandleClick (i) {
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    
    const nextSquares = squares.slice();
    if(xIsNext) {
      nextSquares[i] = "X"
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  
  if(winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const renderSquare = (i) => {
    return (
      <Square key={i} value={squares[i]} onSquareClick={()=>onHandleClick(i)} />
    )
  }

  const board = [];
  for(let row = 0; row < 3; row++){
    const rowSquares = [];
    for(let col= 0; col < 3; col++){
      rowSquares.push(renderSquare(row * 3 + col))
    }
    board.push(
      <div className="board-row">
        {rowSquares}
      </div>
    )
  }

  return (
  <>
    <div className="status">{status}</div>
    {board}
  </>
  )
}
