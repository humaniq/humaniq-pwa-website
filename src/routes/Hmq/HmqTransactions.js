import React, {Component} from 'react';
import {fetchHmqLog} from 'store/entities/hmqLog/actions'
import initialLoad from 'utils/initialLoad'
import HmqTransactionsContainer from 'components/pages/HmqTransactions/container'

class HmqTransactionsRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    //return dispatch(fetchHmqLog())
  }

  render() {
    return (
      <HmqTransactionsContainer />
    )
  }
}

export default HmqTransactionsRoute;