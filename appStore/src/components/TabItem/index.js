// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={onClickTab}
        className={isActive ? 'tab-button active' : 'tab-button'}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
