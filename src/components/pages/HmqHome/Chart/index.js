import React, { Component } from 'react';
import * as T from "prop-types";
import './index.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HmqHeroChart')

import D3Chart from './D3Chart'

const periods = [
  // '3hour',
  'day',
  'week',
  // 'month',
  // 'year',
  // 'all'
]

const periodTitles = {
  '3hour': '3h',
  day: '1d',
  week: '1w',
  month: '1m',
  year: '1y',
  all: 'all'
}

class SE_HmqChart extends Component {


  getNavItems(active, fetchGraphData, loading){
    return(
      periods.map( period => (
        <div
          key={'key_' + period}
          onClick={loading ? undefined : () => fetchGraphData(periodTitles[period])}
          className={cn('body__header-nav-item', {active: periodTitles[period] === active})}
        >{periodTitles[period]}</div>
      ))
    )
  }


  render() {
    const {loaded, entities, period, fetchGraphData, loading} = this.props
    const navItems = this.getNavItems(period, fetchGraphData, loading)

    if(!loaded) return null;
    return (
      <div className={cn('root')}>
        <div className={cn('body')}>
          <div className={cn('body__header')}>
            <div className={cn('body__header-title')}>HMQ Price</div>
            <nav className={cn('body__header-nav')}>
              {navItems}
            </nav>
          </div>
          <D3Chart
            width="680"
            height="306"
            data={entities}
          />

        </div>
      </div>
    )
  }
}

SE_HmqChart.propTypes = {
  period: T.string.isRequired,
  loaded: T.bool.isRequired,
  entities: T.array.isRequired
};

SE_HmqChart.defaultProps = {
}

export default SE_HmqChart
