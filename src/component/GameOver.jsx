import { useEffect, useState } from "react";
import "./GameOver.css";

const GameOver = ({ winner, onRestart }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);
    setShowConfetti(true);
    
    // Hide confetti after 3 seconds
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => clearTimeout(confettiTimer);
  }, []);

  const handleRestart = () => {
    if (onRestart) {
      onRestart();
    }
  };

  return (
    <div className={`game-over-overlay ${isVisible ? 'visible' : ''}`}>
      {showConfetti && <Confetti winner={winner} />}
      
      <div className="game-over-modal">
        <div className="game-over-content">
          <div className="trophy-container">
            <div className="trophy">
              <div className="trophy-cup">🏆</div>
              <div className="trophy-base"></div>
            </div>
          </div>
          
          <h1 className="game-over-title">
            <span className="title-text">Game Over!</span>
            <div className="title-underline"></div>
          </h1>
          
          <div className="winner-announcement">
            {winner ? (
              <>
                <div className="winner-symbol">{winner}</div>
                <p className="winner-text">
                  <span className="player-label">{winner}</span>
                  <span className="won-text">has won!</span>
                </p>
                <div className="celebration-emoji">🎉</div>
              </>
            ) : (
              <>
                <div className="draw-symbol">🤝</div>
                <p className="draw-text">It's a draw!</p>
                <div className="celebration-emoji">👏</div>
              </>
            )}
          </div>
          
          <button className="restart-button" onClick={handleRestart}>
            <span className="button-text">Play Again</span>
            <div className="button-glow"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

const Confetti = ({ winner }) => {
  const colors = winner === 'X' 
    ? ['#47ff94', '#13b9f0', '#ffffff'] 
    : ['#13b9f0', '#47ff94', '#ffffff'];
  
  return (
    <div className="confetti-container">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default GameOver;
