import React , { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('O_Timeline');
import A_Container from 'A_Container';
import A_H from 'A_H';



class O_Timeline extends Component {

  renderEvent = (month, event) => {
    return (
      <section className={cn('month')} key={event}>
        <h4 className={cn('month-name')}>{month.name}</h4>
        <ul className={cn('month-list')}>
          <li className={cn('month-list__li')}>
            <p className={cn('month-list__p')}>{event}</p>
          </li>
        </ul>
      </section>
    );
  };

  renderMonth = (month) => {
    return month.events.map((event) => this.renderEvent(month, event))
  };

  renderYear = (year) => {
    const months = year.months.map(this.renderMonth);
    return (
      <section className={cn('year')} key={year.year}>
        <h3 className={cn('year-date')}>{year.year}</h3>
        { months }
      </section>
    )
  };

  render() {
    const {timeLineData} = this.props
    const renderedTimeLine = timeLineData.map(this.renderYear);
    return (
      <div>
        <A_Container type='wide'>
          <div className={cn('timeline')}>
            <A_H type='section-c'>A quick walk through our history as a company:</A_H>
            <div className={cn('border-line')}>
              { renderedTimeLine }
            </div>
          </div>
        </A_Container>
      </div>
    )
  }

}


O_Timeline.propTypes = {
  timeLineData: T.array.isRequired
};

O_Timeline.defaultProps = {
  timeLineData: []
}


export default O_Timeline