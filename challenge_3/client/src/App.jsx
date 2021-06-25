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
        { frame: 1, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, frameScore: 0 },
        { frame: 2, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, frameScore: 0 },
        { frame: 3, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, frameScore: 0 },
        { frame: 4, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, frameScore: 0 },
        { frame: 5, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, frameScore: 0 },
        { frame: 6, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, frameScore: 0 },
        { frame: 7, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, frameScore: 0 },
        { frame: 8, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, frameScore: 0 },
        { frame: 9, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, frameScore: 0 },
        { frame: 10, r1: 0, r2: 0, r3: 0, r4: 0, strike: false, spare: false, bonus: 0, frameScore: 0 }
      ],
      currentFrame: 1,
      currentRoll: 1,
      gameOver: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.updatePinsLeft = this.updatePinsLeft.bind(this);
    this.updateFrameScore = this.updateFrameScore.bind(this);
    this.checkForSpareStrike = this.checkForSpareStrike.bind(this);
    this.updateCumulativeScore = this.updateCumulativeScore.bind(this);
    this.updateRollAndFrame = this.updateRollAndFrame.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let pinsHit = Number(e.target.innerHTML);
    let updatedScore = this.state.score;

    this.updatePinsLeft(pinsHit);
    this.updateFrameScore(pinsHit);
    this.checkForSpareStrike();
    this.updateCumulativeScore(pinsHit);
    this.updateRollAndFrame();
  }

  updatePinsLeft(pins) {
    let newPins = this.state.pinsLeft - pins;
    this.setState(
      { pinsLeft: newPins }
    );
  }

  updateFrameScore(pinsHit) {
    let updatedScore = this.state.score;

    if (this.state.currentRoll === 1) {
      updatedScore[this.state.currentFrame - 1].r1 = pinsHit;
    }

    if (this.state.currentRoll === 2) {
      updatedScore[this.state.currentFrame - 1].r2 = pinsHit;
    }
  }

  checkForSpareStrike() {
    let scores = this.state.score;
    let frame = this.state.currentFrame;

    scores.map(score => {
      // Strike on 1st
      if (score.r1 === 10) {
        score.strike = true
      }

      // Spare
      if (score.r1 !== 10 && score.r1 + score.r2 === 10) {
        score.spare = true;
      }
    });
  }

  handleStrikeSeries() {
    let score = this.state.score;
    for (var i = 0; i < 10; i++) {
      if (score[i].strike && score[i+1].strike) {
        score[i].bonus += 10
      }
    }
    this.setState({
      scores: score
    })
  }

  updateCumulativeScore(pinsHit) {
    let scores = this.state.score;
    let currentRoll = this.state.currentRoll;
    let pinsLeft = this.state.pinsLeft;
    let frame = this.state.currentFrame - 1;

    // Calculates bonuses and cumulative score for each frame
    for (var i = 0; i < 10; i++) {

      if (scores[i].strike === true) {
        // Strikes
        // First frame
        if (i === 0) {
          scores[i].bonus = scores[i + 1].r1 + scores[i + 1].r2;
          scores[i].frameScore = scores[i].r1 + scores[i].r2 + scores[i].bonus;
        } else {
          // If last frame was not a strike
          scores[i].bonus = scores[i + 1].r1 + scores[i + 1].r2;
          scores[i].frameScore = scores[i].r1 + scores[i].r2 + scores[i - 1].frameScore + scores[i].bonus;
        }
      } else if (scores[i].spare === true) {
        // Spares
        // First frame
        if (frame === 0) {
          scores[i].bonus = scores[i + 1].r1;
          scores[i].frameScore = scores[i].r1 + scores[i].r2 + scores[i].bonus;
        } else {
          scores[i].bonus = scores[i + 1].r1;
          scores[i].frameScore = 10 + scores[i - 1].frameScore + scores[i].bonus;
        }
      }
    }

    // Score the current bowl for open frame
    if (scores[frame].strike === false && scores[frame].spare === false) {
      if (frame === 0) {
        scores[frame].frameScore = scores[frame].r1 + scores[frame].r2;
      } else {
        scores[frame].frameScore = scores[frame].r1 + scores[frame].r2 + scores[frame - 1].frameScore;
      }
    }

    // Update score state
    this.setState({ score: scores });
  }

  updateRollAndFrame() {
    let roll = this.state.currentRoll;
    let frame = this.state.currentFrame;
    let score = this.state.score;

    // Increment to roll 2
    if (roll === 1) {
      this.setState(
        { currentRoll: 2 }
      );
    }

    // If strike or spare
    // Start next frame, reset pins, reset currentRoll
    if (roll === 2 && this.state.pinsLeft || score[this.state.currentFrame - 1].strike === true) {
      this.setState(
        {
          currentFrame: frame + 1,
          currentRoll: 1,
          pinsLeft: 10
        }
      );
    }
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
