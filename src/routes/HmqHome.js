import React, {Component} from 'react';
import HmqHomeContainer from 'containers/HmqHomeContainer'

import {fetchHmqStatistics} from 'store/entities/expStatistic/actions'

class HmqRoute extends Component {

  static prepareData({dispatch}) {
    if(__SERVER__){
      dispatch(fetchHmqStatistics())
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

export default HmqRoute;