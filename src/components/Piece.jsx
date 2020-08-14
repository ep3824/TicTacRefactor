import React from 'react';
import X from './X'
import O from './O'

function Piece(props) {
  return (
  <div className="piece">
    {(Math.random() > .5) ? <X /> : <O />}
  </div>
  )
}

export default Piece;