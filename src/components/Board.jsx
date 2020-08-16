import React, { useState, useEffect } from 'react';
import Piece from './Piece'

function Board() {
  const [boardState, setBoardState] = useState([
    '','','',
    '','','',
    '','',''
  ])

  
  function updateState(newState) {
    setBoardState(newState)
  }

  return (
  <div id="board" className="container">
    <div className="row mt-5 justify-content-center">
      <div className="cell col-xs" ><Piece updateState={updateState} boardstate={boardState} index={0} key={0}/></div>
      <div className="cell col-xs" ><Piece updateState={updateState} boardstate={boardState} index={1} key={1}/></div>
      <div className="cell col-xs" ><Piece updateState={updateState} boardstate={boardState} index={2} key={2}/></div>
    </div>
    <div className="row justify-content-center">
      <div className="cell col-xs" ><Piece updateState={updateState} boardstate={boardState} index={3} key={3}/></div>
      <div className="cell col-xs" ><Piece updateState={updateState} boardstate={boardState} index={4} key={4}/></div>
      <div className="cell col-xs" ><Piece updateState={updateState} boardstate={boardState} index={5} key={5}/></div>
    </div>
    <div className="row justify-content-center">
      <div className="cell col-xs" ><Piece updateState={updateState} boardstate={boardState} index={6} key={6}/></div>
      <div className="cell col-xs" ><Piece updateState={updateState} boardstate={boardState} index={7} key={7}/></div>
      <div className="cell col-xs" ><Piece updateState={updateState} boardstate={boardState} index={8} key={8}/></div>
    </div>
  </div>
  )
}

export default Board;