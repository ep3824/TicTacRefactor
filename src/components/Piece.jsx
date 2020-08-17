import React, { useEffect, useState } from 'react';
import X from './X'
import O from './O'


class Piece extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      board: props.boardstate,
      clickCounter: 1,
    }
    this.handleClick = this.handleClick.bind(this);
    this.pieceChecker = this.pieceChecker.bind(this);
  }

  handleClick(e) {
    let newBoardState = this.props.boardstate;
    console.log('clicked')
    console.log('props boardstate', this.props.boardstate)
    if (this.state.clickCounter % 2 === 0) {
      newBoardState[this.props.index] = 'X'
    } else {
      newBoardState[this.props.index] = 'O'
    }
    this.setState({
      clickCounter: this.state.clickCounter + 1
    })
    this.props.updateState(newBoardState)
  }


  pieceChecker(props) {
    if (props.boardstate[props.index] === 'X') {
      return <X boardstate={'X'}/>
    } else if (props.boardstate[props.index] === 'O') {
      return <O boardstate={'O'}/>
    } else {
      return <O boardstate={''}/>
    }
  }

  render() {
    return (
    <div className="piece border" onClick={this.handleClick}>
      {this.pieceChecker(this.props)}
    </div>
    )
  }
}

export default Piece;