import React, { useState } from 'react';
import Piece from './Piece'

function Board() {
  const [boardState, setBoardState] = useState([
    'X','','O',
    '','X','',
    'O','','X'
  ])

  let newBoardState = boardState;
  let clickCounter = 1;
  function handleClick(index) {
    console.log('clicked')
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
      <div className="cell col-xs" ><Piece boardstate={boardState[0]} onClick={handleClick} index={0}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[1]} onClick={handleClick} index={1}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[2]} onClick={handleClick} index={2}/></div>
    </div>
    <div className="row justify-content-center">
      <div className="cell col-xs" ><Piece boardstate={boardState[3]} onClick={handleClick} index={3}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[4]} onClick={handleClick} index={4}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[5]} onClick={handleClick} index={5}/></div>
    </div>
    <div className="row justify-content-center">
      <div className="cell col-xs" ><Piece boardstate={boardState[6]} onClick={handleClick} index={6}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[7]} onClick={handleClick} index={7}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[8]} onClick={handleClick} index={8}/></div>
    </div>
  </div>
  )
}

export default Board;