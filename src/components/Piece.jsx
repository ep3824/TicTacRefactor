import React from 'react';
import X from './X'
import O from './O'

function Piece(props) {
  function pieceChecker(props) {
    if (props.boardstate === 'X') {
      return <X boardstate={'X'}/>
    } else if (props.boardstate === 'O') {
      return <O boardstate={'O'}/>
    } else {
      return <O boardstate={''}/>
    }
  }
  

  return (
  <div className="piece border">
    {pieceChecker(props)}
  </div>
  )
}

export default Piece;