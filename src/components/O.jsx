import React from 'react';


function O(props) {
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

export default O;