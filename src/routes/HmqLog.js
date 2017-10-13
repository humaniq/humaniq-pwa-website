import React, {Component} from 'react';
import {fetchHmqLog} from 'store/entities/hmqLog/actions'
import initialLoad from 'utils/initialLoad'
import HmqLogContainer from 'containers/HmqLogContainer'

class HmqTxLog extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    return dispatch(fetchHmqLog())
  }

  render() {
    return (
      <HmqLogContainer />
    )
  }
}

export default HmqTxLog;