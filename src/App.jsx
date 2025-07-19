import { useState } from "react";
import Header from "./Header";
import "./App.css";
import Player from "./component/Player";
import GameBoard from "./component/GameBoard";
import Log from "./component/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./component/GameOver";

function deriveActivePlayer(gameTurns){
   let currentPlayer = 'X';

      if (gameTurns.length>0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O';
      }
      return currentPlayer
}

function App() {
  // consts
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)
  const [players,setPlayers] = useState({
    'X':'Player 1',
    'O':'Player 2'
  })

  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
let gameBoard = [...initialGameBoard.map(array =>[...array])];

for (const turn of gameTurns){
    const {square, player} = turn;
    
    const {row,col} = square;
    gameBoard[row][col] = player;
}
let winner;
for (const combinations of WINNING_COMBINATIONS){
  const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column]
  const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column]
  const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column]

if (firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
  winner = players[firstSquareSymbol]
}

}
const draw = gameTurns.length === 9 && !winner; 
  function handleSelectSquare(rowIndex,colIndex){
    
   
    setGameTurns(prevTurns=>{
      const currentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [{ square: {row : rowIndex, col: colIndex}, player : currentPlayer}, ...prevTurns,];

      return updatedTurns;
    });
  }

 const handlePlayerChange = (symbol,playerName) =>{
setPlayers((prev)=>{
  return { ...prev,
  [symbol]:playerName
  }
})
 }
  function handleRestart() {
    setGameTurns([]);
  }
 
  
  return (
    <>
    <Header />
      <div className="game-container">
        <ol className="player-list highlight-player">  
          <Player name={players.X} symbol="X" isActive={activePlayer === "X"} isChanged={handlePlayerChange} />
          <Player name={players.O} symbol="O" isActive={activePlayer === "O" } isChanged={handlePlayerChange} />
        </ol>
                {winner && <p>You won {winner}</p>}
         {draw && <p>It's a draw!</p>}
         <GameBoard onSelectSquare={handleSelectSquare}  turns={gameTurns} board={gameBoard}/>
        <button className="resetBtn" >
          Reset
        </button>
      </div>
      {(winner || draw) && <GameOver winner={winner} onRestart={handleRestart}/>}
      <Log turns={gameTurns}></Log>
    </>
  );
}

export default App;
