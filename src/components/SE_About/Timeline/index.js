import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('O_Timeline');
import A_Container from 'A_Container';
import A_H from 'A_H';

const data = [
  {
    year: '2016',
    months: [
      {
        name: 'April',
        events: [
          'Inception of the Humaniq idea by Alex Fork.',
        ]
      },
      {
        name: 'November',
        events: [
          'Humaniq Whitebook is written and the original project team is formed.',
        ]
      },
      {
        name: 'December',
        events: [
          'Humaniq.co website is launched and pre-ICO is announced',
        ]
      },
    ],
  },
  {
    year: '2017',
    months: [
      {
        name: 'February',
        events: [
          'Smart contracts are being developed, due diligence and marketing campaign take place.',
          'Humaniq team meets with project partners in India. Alex Fork conducts the first performance tests of the project in unbanked regions of India.',
          'Humaniq announces first online hackathon',
          'Pre-ICO (crowdsale) is launched',
        ]
      },
      {
        name: 'March',
        events: [
          'Alpha version of the app is available for testing on IOS and Android.',
        ]
      },
      {
        name: 'April',
        events: [
          'Humaniq collects $1.5 mln in the first hour of their ICO.',
        ]
      },
      {
        name: 'May',
        events: [
          'App with new enchanced biometrics is being released.',
        ]
      },
      {
        name: 'Now',
        events: [
          'Humaniq is 43 people now, working from 14 countries.',
        ]
      },
    ],
  },
]

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
    const years = data.map(this.renderYear);
    return (
      <div>
        <A_Container type='wide'>
          <div className={cn('timeline')}>
            <A_H type='section-c'>A quick walk through our history as a company:</A_H>
            <div className={cn('border-line')}>
              { years }
            </div>
          </div>
        </A_Container>
      </div>
    )
  }

}


O_Timeline.propTypes = {};

export default O_Timeline