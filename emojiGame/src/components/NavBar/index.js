// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgess, topScore} = props

  return (
    <div className="nav-bar-container">
      <div className="title-with-score-container">
        <div className="logo-and-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgess && (
          <div className="scores-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
