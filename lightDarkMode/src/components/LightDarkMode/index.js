// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onCLickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click to Change mode</h1>
          <button type="button" className="button" onClick={this.onCLickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
