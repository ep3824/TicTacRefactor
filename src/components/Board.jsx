import React from 'react';
import Piece from './Piece'

function Board() {
  const boardState = [
    null, null, null,
    null, null, null,
    null, null, null
  ]

  return (
  <div id="board">
    {boardState.map(el => <p boardState={boardState}><Piece /></p>)}
  </div>
  )
}

export default Board;