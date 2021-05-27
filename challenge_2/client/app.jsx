import React from "react";
import { Line } from "react-chartjs-2";
import axios from 'axios';
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        //isLoaded: false,
        labels: [],
        datasets: [
          {
            label: "USD",
            data: [],
            borderColor: "#742774",
          }
        ]
      }
    }
  }

  getHistoricalPrices() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2016-05-27&end=2021-05-27')
      .then(response => {
        let priceInfo = response.data.bpi;

        let newLabels = [];
        let newPrices = [];

        for (const property in priceInfo) {
          newLabels.push(property);
          newPrices.push(priceInfo[property]);
        }

        let newData = { ...this.state.data };
        newData.labels = newLabels;
        newData.datasets[0].data = newPrices;
        return newData;
      })
      .then(results => {
        this.setState(
          { data: results }
        );
      })
      .catch(error => {
        console.log(error);
      });
  }


  componentDidMount() {
    this.getHistoricalPrices();
  }

  render() {
    return (
      <div className="App">
        <h1>Historical Bitcoin Price</h1>
        <Line data={this.state.data} />
      </div>
    );
  }
}

export default App;