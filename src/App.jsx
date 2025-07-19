import { useState } from "react";
import Header from "./Header";
import "./App.css";
import Player from "./component/Player";
import GameBoard from "./component/GameBoard";
import Log from "./component/Log";

function deriveActivePlayer(gameTurns){
   let currentPlayer = 'X';

      if (gameTurns.length>0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O';
      }
      return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
 // let [activePlayer, setActivePlayer] = useState('X');
  const activePlayer = deriveActivePlayer(gameTurns)
  function handleSelectSquare(rowIndex,colIndex){
    
   
    setGameTurns(prevTurns=>{
      const currentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [{ square: {row : rowIndex, col: colIndex}, player : currentPlayer}, ...prevTurns,];

      return updatedTurns;
    });
  }
 
  
  return (
    <>
    <Header />
      <div className="game-container">
        <ol className="player-list highlight-player">  
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X" } />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O" }  />
        </ol>
       
       <GameBoard onSelectSquare={handleSelectSquare}  turns={gameTurns}/>
        <button className="resetBtn" >
          Reset
        </button>
      </div>
      <Log turns={gameTurns}></Log>
    </>
  );
}

export default App;
