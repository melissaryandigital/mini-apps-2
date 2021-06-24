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
      total: 0,
      score: [
        { frame: 1, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, cumulative: 0 },
        { frame: 2, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, cumulative: 0 },
        { frame: 3, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, cumulative: 0 },
        { frame: 4, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, cumulative: 0 },
        { frame: 5, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, cumulative: 0 },
        { frame: 6, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, cumulative: 0 },
        { frame: 7, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, cumulative: 0 },
        { frame: 8, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, cumulative: 0 },
        { frame: 9, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, cumulative: 0 },
        { frame: 10, r1: 0, r2: 0, strike: false, spare: false, bonus: 0, cumulative: 0 }
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
    let pinsLeft = this.state.pinsLeft;
    let newPins = pinsLeft - pins;
    this.setState(
      { pinsLeft: newPins }
    );
  }

  updateFrameScore(pinsHit) {
    let updatedScore = this.state.score;
    let total = this.state.total;

    if (this.state.currentRoll === 1) {
      updatedScore[this.state.currentFrame - 1].r1 = pinsHit;
      total += pinsHit;
    }

    if (this.state.currentRoll === 2) {
      updatedScore[this.state.currentFrame - 1].r2 = pinsHit;
      total += pinsHit;
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

  updateCumulativeScore(pinsHit) {
    let scores = this.state.score;
    let currentRoll = this.state.currentRoll;
    let pinsLeft = this.state.pinsLeft;
    let frame = this.state.currentFrame - 1;
    let total = this.state.total;
    let lastCumulative;

    // Calculates bonuses
    for (var i = 0; i < 10; i++) {

      if (scores[i].strike === true) {
        scores[i].bonus = 10 + scores[i + 1].r1 + scores[i + 1].r2;
      }

      if (scores[i].spare === true) {
        scores[i].bonus = scores[i + 1].r1;
      }
    }

    total += scores[frame].r1 + scores[frame].r2 + scores[frame].bonus;

    if (frame === 0) {
      scores[frame].cumulative = total;
    } else {
      scores[frame].cumulative = total + scores[frame - 1].cumulative;
    }


    // Calculates cumulative


    // scores.map((score, index) => {
    //   if (score.frame === 1) {
    //     score.cumulative = score.r1 + score.r2 + score.bonus;

    //   } else if (score.frame === 10) {


    //   } else {
    //     score.cumulative = score.r1 + score.r2 + score.bonus + total;
    //   }

    // });

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
