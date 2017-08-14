import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('O_Timeline');
import A_Container from 'A_Container';
import A_H from 'A_H';

const data = [
  {
    year: '2016',
    month: {
      name: 'April',
      events: [
        'Inception of the Humaniq idea by Alex Fork.',
      ]
    }
  },
]

class O_Timeline extends Component {

  renderEvents = (events) => {
    const renderedEvents = events.map(event => (
      <li className={cn('month-list__li')}>
        <p className={cn('month-list__p')}>{event}</p>
      </li>
    ));

    return (
      <ul className={cn('month-list')}>
        {renderedEvents}
      </ul>
    )
  };

  renderYear = (year) => {
    return (
      <section className={cn('year')}>
        <h3 className={cn('year-date')}>{year.year}</h3>
        { this.renderMonth(year.month) }
      </section>
    )
  };

  renderMonth = (month) => {
    return (
      <section className={cn('month')}>
        <h4 className={cn('month-name')}>{month.name}</h4>
        {this.renderEvents(month.events)}
      </section>
    )
  };

  render() {
    return (
      <div>
        <A_Container type='wide'>
          <div className={cn('timeline')}>
            <A_H type='section-c'>A quick walk through our history as a company:</A_H>
            <div className={cn('border-line')}>
              {this.renderYear(data[0])}
            </div>
          </div>
        </A_Container>
      </div>
    )
  }

}


O_Timeline.propTypes = {};

export default O_Timeline