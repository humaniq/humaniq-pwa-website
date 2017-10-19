import React, {Component} from 'react';
import {fetchHmqMarkets} from 'store/entities/hmqMarkets/actions'
import initialLoad from 'utils/initialLoad'
import HmqMarketsContainer from 'containers/HmqMarketsContainer'

class HmqMarkets extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    return dispatch(fetchHmqMarkets())
  }

  render() {
    return (
      <HmqMarketsContainer />
    )
  }
}

export default HmqMarkets;