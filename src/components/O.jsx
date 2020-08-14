import React from 'react';


function X(props) {
  return (
    <div>
      {props.boardstate === 'O' ?   
      <div className="O">
        O
      </div> 
      : 
      <div className="empty">{' '}</div> 
      }
    </div>
  )
}

export default X;