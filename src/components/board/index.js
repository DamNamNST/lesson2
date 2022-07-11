import React from 'react'
import Square from '../square'



class Board extends React.Component {
  // Phương thức này trả về class Square kèm giá trị đi theo là value 
  renderSquare(i) {
    const winner = this.props.winner;
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} winner={winner && winner.includes(i) ? 'winner' : ''} />
  }

  renderAllSquares() {
    const matrixSize = Math.sqrt(this.props.squares.length);
    const board = Array(matrixSize).fill(null);
    for (let i = 0; i < matrixSize; i++) {
      const squares = Array(matrixSize).fill(null);
      for (let j = 0; j < matrixSize; j++) {
        var squareKey = i * matrixSize + j;
        squares.push(<span key={squareKey}>{this.renderSquare(squareKey)}</span>);
      }
      board.push(<div key={i}>{squares}</div>);
    }
    return board;
  }

  render() {
    return (
      <div>
        <div>Board</div>
        <div>{this.renderAllSquares()}</div>
      </div>
    );
  }
}
// const Board = styled.div`
// display: grid;
// grid-template-columns: repeat(3,1fr);
// grid-gap: 5px;
// max-width: 250px;
// margin: auto;
// `
export default Board