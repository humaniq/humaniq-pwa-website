import React, {Component} from 'react';
import moment from 'moment';
import Chart from './Chart';


class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: this.generateChartData(),
      chartDataSmall: this.generateChartData()
    }


  }


  generateChartData() {

    return function (start, end) {
      let cur = start;
      let result = [];
      while (cur <= end) {
        const lastVal = result.length ? result[result.length - 1].value : (Math.random() * 1.6)
        let value = lastVal + Math.random() - 0.5

        value = value > 0.6 ? value : 0.6
        value = value === lastVal ? lastVal + Math.random() - 0.5 : value
        result.push({
          date: cur.format('YYYY-MM-DD, HH:mm:ss'),
          value: value
          // dateShow: cur.format('LLLL')
        });
        cur.add(3, 'days')
      }
      return result;
    }(moment('2016-05-24, 00:00:00', 'YYYY-MM-DD, HH:mm:ss'), moment('2017-05-24, 00:00:00', 'YYYY-MM-DD, HH:mm:ss'));

  }


  handleTransition = () => {
    this.setState({

      chartData: this.generateChartData(),
      chartDataSmall: this.generateChartData()

    });
  }

  render() {

    return (
      <div>
        <button onClick={this.handleTransition}>test transition</button>

        <div>
          <Chart
            title="Data"
            width="680"
            height="280"
            data={this.state.chartData}
          />
        </div>

        <div>

          sss
          {/*<Chart*/}
          {/*title="DataSmall"*/}
          {/*width="100"*/}
          {/*height="50"*/}
          {/*useArea={false}*/}
          {/*isSmall={true}*/}
          {/*data={this.state.chartData}*/}
          {/*/>*/}
        </div>

      </div>
    );


  }
}

export default App;
