// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{isWon ? 'You Won' : 'You Lose'}</h1>
        <p className="current-score-label">{isWon ? 'Best Score' : 'Score'}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img
          className="win-or-lose-image"
          src={
            isWon
              ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
          }
          alt="win or lose"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
