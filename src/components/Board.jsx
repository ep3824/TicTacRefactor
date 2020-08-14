import React, { useState } from 'react';
import Piece from './Piece'

function Board() {
  const [boardState, setBoardState] = useState([
    '','','',
    '','','',
    '','',''
  ])

  let newBoardState = boardState;
  let clickCounter = 1;
  const handleClick = function(index) {
    if (clickCounter % 2 === 0) {
      newBoardState[index] = 'X'
    } else {
      newBoardState[index] = 'O'
    }
    setBoardState(newBoardState)
    clickCounter += 1;
  }

  return (
  <div id="board" className="container">
    <div className="row mt-5 justify-content-center">
      <div className="cell col-xs" ><Piece boardstate={boardState[0]} onClick={handleClick(0)}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[1]} onClick={handleClick(1)}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[2]} onClick={handleClick(2)}/></div>
    </div>
    <div className="row justify-content-center">
      <div className="cell col-xs " ><Piece boardstate={boardState[3]} onClick={handleClick(3)}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[4]} onClick={handleClick(4)}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[5]} onClick={handleClick(5)}/></div>
    </div>
    <div className="row justify-content-center">
      <div className="cell col-xs" ><Piece boardstate={boardState[6]} onClick={handleClick(6)}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[7]} onClick={handleClick(7)}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[8]} onClick={handleClick(8)}/></div>
    </div>
  </div>
  )
}

export default Board;