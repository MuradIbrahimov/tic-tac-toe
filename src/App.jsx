import { useState } from "react";
import Header from "./Header";
import "./App.css";
import Player from "./component/Player";
import GameBoard from "./component/GameBoard";
function App() {
  const [winner, setWinner] = useState(null);
  let [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer) => curActivePlayer ==='X' ? 'O' : 'X')
  }
  const checkWinning = (data) => {
    const winPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winPositions.map((position) => {
      let [a, b, c] = position;
      if (data[a] && data[a] === data[b] && data[b] === data[c]) {
        setWinner(data[a]);
      }
    });
  };
  const resetGame = () => {
    setWinner(null);
  };
  return (
    <>
    <Header />
      <div className="game-container">
        <ol className="player-list highlight-player">  
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X" } />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O" }  />
        </ol>
        {winner && <h1>{winner + " Qalibdir"}</h1>}
       <GameBoard onSelectSquare={handleSelectSquare}  activePlayer={activePlayer}/>
        <button className="resetBtn" onClick={resetGame}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
