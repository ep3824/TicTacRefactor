import React from 'react';
import X from './X'
import O from './O'

function Piece(props) {
  return (
  <div className="piece border">
    {props.boardstate === 'X' ? <X /> : <O />}
  </div>
  )
}

export default Piece;