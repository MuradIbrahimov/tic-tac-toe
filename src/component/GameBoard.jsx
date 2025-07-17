import { useState } from "react";
import "./GameBoard.css";

export default function GameBoard({onSelectSquare,activePlayer}) {
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

const [gameBoard, setGameBoard] = useState(initialGameBoard);

const handleClick = (rowIndex,cellIndex) => {
    setGameBoard((prevGameBoard)=> {
        const updatedBoard = [...prevGameBoard.map(innerArray =>[...innerArray])];
        updatedBoard[rowIndex][cellIndex] = activePlayer;
        return updatedBoard
    })
    onSelectSquare();
  };

    return (
          <ol  className="game-board">
        {gameBoard.map((row,rowIndex) => <li key={rowIndex}>
        <ol>
            {row.map((playerSymbol,cellIndex) => <li key={cellIndex}>
                <button className="box" onClick={() => handleClick(rowIndex,cellIndex)}>
                    <span>{playerSymbol}</span>
                </button>
            </li>)}
        </ol>
        </li>)} 
        </ol>
    )
}