import "./GameBoard.css";

export default function GameBoard({onSelectSquare , board}) {
    return (
          <ol  className="game-board">
        {board.map((row,rowIndex) => <li key={rowIndex}>
        <ol>
            {row.map((playerSymbol,cellIndex) => <li key={cellIndex}>
                <button disabled={playerSymbol !==null} className="box" onClick={() => onSelectSquare(rowIndex,cellIndex)}>
                    <span>{playerSymbol}</span>
                </button>
            </li>)}
        </ol>
        </li>)} 
        </ol>
    )
}