import React from 'react';
import Piece from './Piece'

function Board() {
  const boardState = [
    'X', 'X', 'X',
    null, null, null,
    null, null, null
  ]

  return (
  <div id="board" className="container">
    <div className="row mt-5 justify-content-center">
      <div className="cell col-xs" ><Piece boardstate={boardState[0]}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[1]}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[2]}/></div>
    </div>
    <div className="row justify-content-center">
      <div className="cell col-xs " ><Piece boardstate={boardState[3]}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[4]}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[5]}/></div>
    </div>
    <div className="row justify-content-center">
      <div className="cell col-xs" ><Piece boardstate={boardState[6]}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[7]}/></div>
      <div className="cell col-xs" ><Piece boardstate={boardState[8]}/></div>
    </div>
  </div>
  )
}

export default Board;