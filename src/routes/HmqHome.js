import React, {Component} from 'react';
import HmqHomeContainer from 'containers/HmqHomeContainer'
import {fetchHmqStatistics} from 'store/entities/hmqStatistic/actions'

class HmqHomeRoute extends Component {

  static prepareData({dispatch}) {
    if(__SERVER__){
      return dispatch(fetchHmqStatistics())
    }
  }

  render() {
    return (
      <div>
        <HmqHomeContainer />
      </div>
    )
  }
}

export default HmqHomeRoute;