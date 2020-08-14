import React from 'react';
import X from './X'
import O from './O'

function Piece(props) {

  return (
  <div className="piece border">
    {props.boardstate === 'X' ? <X boardstate={props.boardstate}/> : <O boardstate={props.boardstate}/>}
  </div>
  )
}

export default Piece;