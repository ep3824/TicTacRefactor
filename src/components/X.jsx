import React from 'react';


function X(props) {
  return (
    <div>
      {props.boardstate === 'X' ?   
      <div className="X">
        X
      </div> 
      : 
      <div className="empty">''</div> 
      }
    </div>
  )
}

export default X;