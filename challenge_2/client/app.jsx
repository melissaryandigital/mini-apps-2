import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-05-25&end=2021-05-25


  render() {
    return (
      <div>
        <h1>Cryptocurrency Charting Tool</h1>
        <div>
          <canvas id="myChart"></canvas>
        </div>
      </div>
    )
  }
}

export default App;

