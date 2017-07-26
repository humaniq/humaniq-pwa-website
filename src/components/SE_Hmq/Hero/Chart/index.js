import React, { Component } from 'react';
import * as T from "prop-types";
import './index.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HmqHeroChart')

import D3Chart from './D3Chart'

const periods = [
  '1h', '1d', '1w', '1m', '1y', 'all'
]

class SE_HmqHeroChart extends Component {

  state = {
    active: periods[1]
  }

  getNavItems(active){
    return(
      periods.map( period => (
        <div
          key={'key_' + period}
          onClick={() => this.setState({active: period})}
          className={cn('body__header-nav-item', {active: period === active})}
        >{period}</div>
      ))
    )
  }


  render() {
    const {active} = this.state
    const navItems = this.getNavItems(active)
    const {chartProps} = this.props
    console.log(active, chartProps)
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
            data={chartProps[active]}/>
        </div>
      </div>
    )
  }
}

SE_HmqHeroChart.propTypes = {
  chartProps: T.shape({
    year: T.array.isRequired,
    month: T.array.isRequired,
    week: T.array.isRequired,
    day: T.array.isRequired,
    hour: T.array.isRequired,
    all: T.array.isRequired,
  }).isRequired,
};

SE_HmqHeroChart.defaultProps = {
}

export default SE_HmqHeroChart
