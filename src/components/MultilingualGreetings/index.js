import {Component} from 'react'
import Languages from '../Languages'
import './index.css'

class MultilingualGreetings extends Component {
  state = {
    currentLang: 'English',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    imageAltText: 'english',
  }

  updateState = buttonText => {
    const {languageGreetingsList} = this.props
    const filtered = languageGreetingsList.filter(
      each => each.buttonText === buttonText,
    )
    const newObj = filtered[0]
    const {imageUrl, imageAltText} = newObj
    this.setState({
      currentLang: buttonText,
      imageUrl,
      imageAltText,
    })
  }

  render() {
    const {languageGreetingsList} = this.props
    const {currentLang, imageUrl, imageAltText} = this.state
    console.log(currentLang, imageUrl, imageAltText)

    return (
      <div className="main-container">
        <h1 className="main-heading">Multilingual Greetings</h1>
        <ul className="list">
          {languageGreetingsList.map(each => (
            <Languages
              isActive={each.buttonText === currentLang}
              key={each.id}
              buttonDetails={each}
              updateState={this.updateState}
            />
          ))}
        </ul>
        <img className="image-edit" src={imageUrl} alt={imageAltText} />
      </div>
    )
  }
}

export default MultilingualGreetings
