import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Scoreboard from './components/Scoreboard.jsx';
import Status from './components/Status.jsx';
import RollerNums from './components/RollerNums.jsx'
import strikePins from './helpers/strikePins.js';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinsLeft: 10,
      score: [
        { frame: 1, r1: null, r2: null, cumulative: null },
        { frame: 2, r1: null, r2: null, cumulative: null },
        { frame: 3, r1: null, r2: null, cumulative: null },
        { frame: 4, r1: null, r2: null, cumulative: null },
        { frame: 5, r1: null, r2: null, cumulative: null },
        { frame: 6, r1: null, r2: null, cumulative: null },
        { frame: 7, r1: null, r2: null, cumulative: null },
        { frame: 8, r1: null, r2: null, cumulative: null },
        { frame: 9, r1: null, r2: null, cumulative: null },
        { frame: 10, r1: null, r2: null, cumulative: null }
      ],
      spareBonus: 0,
      strikeBonus: [],
      currentFrame: 1,
      currentRoll: 1,
      gameOver: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.updatePinsLeft = this.updatePinsLeft.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.updateRollAndFrame = this.updateRollAndFrame.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let pinsHit = strikePins(this.state.pinsLeft);
    console.log(`you hit ${pinsHit}`);

    this.updatePinsLeft(pinsHit);
    this.updateScore(pinsHit);
    this.updateRollAndFrame();
  }

  updateScore(pinsHit) {
    let updatedScore = this.state.score;
    let currentRoll = this.state.currentRoll;
    let lastCumulative;

    if (currentRoll === 1) {
      updatedScore[this.state.currentFrame - 1].r1 = pinsHit;
    }

    if (currentRoll === 2) {
      updatedScore[this.state.currentFrame - 1].r2 = pinsHit;
    }

    if (this.state.currentFrame === 1) {
      lastCumulative = 0;
    } else {
      lastCumulative = updatedScore[this.state.currentFrame - 2].cumulative;
    }

    let cumulativeScore = updatedScore[this.state.currentFrame - 1].r1 + updatedScore[this.state.currentFrame - 1].r2 + lastCumulative;

    updatedScore[this.state.currentFrame - 1].cumulative = cumulativeScore;

    this.setState(updatedScore);
  }

  updatePinsLeft(pins) {
    let pinsLeft = this.state.pinsLeft;
    let newPins = pinsLeft - pins;
    this.setState(
      { pinsLeft: newPins }
    );
  }

  updateRollAndFrame() {
    let roll = this.state.currentRoll;
    let frame = this.state.currentFrame;

    if (roll === 1) {
      this.setState(
        { currentRoll: 2 }
      );
    }

    if (roll === 2 && this.state.pinsLeft === 0) {
      // do some bonus stuff
    } else if (roll === 2 && this.state.pinsLeft) {
      this.setState(
        { currentFrame: frame + 1,
          currentRoll: 1 }
      );
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Bowling</h1>
        <Scoreboard score={this.state.score} />
        {/* <Status pinsLeft={this.state.pinsLeft} /> */}
        <RollerNums handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App;
