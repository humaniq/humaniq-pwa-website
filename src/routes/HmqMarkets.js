import React, {Component} from 'react';
import {fetchHmqMarkets} from 'store/entities/hmqMarkets/actions'
import initialLoad from 'utils/initialLoad'

class HmqMarkets extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    return dispatch(fetchHmqMarkets())
  }

  render() {
    return (
      <div>
        список бирж
      </div>
    )
  }
}

export default HmqMarkets;