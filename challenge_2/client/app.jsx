import React from "react";
import { Line } from "react-chartjs-2";
import "./styles.css";

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       label: "USD",
//       data: [33, 25, 35, 51, 54, 76],
//       fill: false,
//       borderColor: "#742774"
//     }
//   ]
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
        datasets: [
          {
            label: "USD",
            data: [33, 25, 35, 51, 54, 76, 55],
            fill: false,
            borderColor: "#742774"
          }
        ]
      }
    }
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