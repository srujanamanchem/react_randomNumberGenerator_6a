import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onGenerate = () => {
    this.setState({randomNumber: this.getRandomNumber()})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="random-number-bg-container">
        <div className="random-number-card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random Number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.onGenerate}
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
