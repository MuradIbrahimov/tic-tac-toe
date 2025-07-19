import "./GameBoard.css";

export default function GameBoard({onSelectSquare, turns}) {
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
let gameBoard = initialGameBoard;

for (const turn of turns){
    const {square, player} = turn;
    console.log();
    
    const {row,col} = square;
    gameBoard[row][col] = player;
}


    return (
          <ol  className="game-board">
        {gameBoard.map((row,rowIndex) => <li key={rowIndex}>
        <ol>
            {row.map((playerSymbol,cellIndex) => <li key={cellIndex}>
                <button className="box" onClick={() => onSelectSquare(rowIndex,cellIndex)}>
                    <span>{playerSymbol}</span>
                </button>
            </li>)}
        </ol>
        </li>)} 
        </ol>
    )
}