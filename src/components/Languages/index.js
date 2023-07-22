import './index.css'

const Languages = props => {
  const {buttonDetails, updateState, isActive} = props
  const {buttonText} = buttonDetails

  const onClickLangButton = () => {
    updateState(buttonText)
  }

  return (
    <li className="list-item">
      <button
        onClick={onClickLangButton}
        type="button"
        className={isActive ? 'lang-button active' : 'lang-button'}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default Languages
