import React from 'react';
import * as T from "prop-types";

import './styles.scss';
import {cssClassName} from 'utils'
import moment from "moment";

const cn = cssClassName('Countdown');


class M_Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countTo: "2018-08-16T16:00:00+03:00",
      isHidden: false,
      hours: 0,
      hoursS: true,
      days: 0,
      daysS: true,
      minutes: 0,
      minutesS: true,
      seconds: 0,
      secondsS: true,
    };
  }

  setCountDown = () => {
    let counts = {
      isHidden: false,
      hours: 0,
      hoursS: true,
      days: 0,
      daysS: true,
      minutes: 0,
      minutesS: true,
      seconds: 0,
      secondsS: true,
    };

    let seconds = moment.utc(this.state.countTo).diff(moment(), 'seconds');

    if (seconds < 0){
      this.setState({isHidden: true});
      counts.isHidden = true;
    }

    counts.days = Math.floor(seconds / (24 * 60 * 60));
    counts.daysS = (counts.days > 1);

    seconds = seconds - (24 * 60 * 60) * counts.days;
    counts.hours = Math.floor(seconds / 3600);
    counts.hoursS = (counts.hours > 1);

    seconds = seconds - 3600 * counts.hours;
    counts.minutes = Math.floor(seconds / 60);
    counts.minutesS = (counts.minutes > 1);

    counts.seconds = seconds - 60 * counts.minutes;
    counts.secondsS = (counts.seconds > 1);

    counts.days = ((counts.days < 10) ? "0" : "") + counts.days;
    counts.hours = ((counts.hours < 10) ? "0" : "") + counts.hours;
    counts.minutes = ((counts.minutes < 10) ? "0" : "") + counts.minutes;
    counts.seconds = ((counts.seconds < 10) ? "0" : "") + counts.seconds;

    this.setState(counts);
  };


  componentDidMount() {
    this.timerID = setInterval(
            () => this.setCountDown(),
            1000
        );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
            <div className={"countdown" + (this.state.isHidden ? " hidden":"")}>
                <div className={"head"}>
                    <h3>Humaniq launches a token burn campaign</h3>
                    <div className={"text"}>Time left until the next Token Burn:</div>
                </div>
                <div className={"counter"}>
                    <div className="figures">
                        <div className="days">{this.state.days}</div>
                        <div className="units day">day
                            {this.state.daysS &&
                            <div className="days-s">s</div>
                            }
                        </div>
                    </div>
                    <div className="sep">:</div>
                    <div className="figures">
                        <div className="hours">{this.state.hours}</div>
                        <div className="units hour">hour
                            {this.state.hoursS &&
                            <div className="days-s">s</div>
                            }
                        </div>
                    </div>
                    <div className="sep">:</div>
                    <div className="figures">
                        <div className="minutes">{this.state.minutes}</div>
                        <div className="units minute">minute
                            {this.state.minutesS &&
                            <div className="days-s">s</div>
                            }
                        </div>
                    </div>
                    <div className="sep">:</div>
                    <div className="figures">
                        <div className="seconds">{this.state.seconds}</div>
                        <div className="units second">second
                            {this.state.secondsS &&
                            <div className="days-s">s</div>
                            }
                        </div>
                    </div>
                </div>
                <div className={"calendar"}>
                    <a className={"button"} target="_blank"
                       href="http://www.google.com/calendar/event?action=TEMPLATE&text=Humaniq launches a token burn campaign&dates=20180816T130003Z/20180817T130003Z&details=Time left until the next Token Burn:&location=&trp=false&sprop=&sprop=name:">
                        <img src="/img/calendar.svg"/>
                        Add to calendar
                    </a>
                </div>
            </div>
    )
  }
}

export default M_Countdown

M_Countdown.propTypes = {};
