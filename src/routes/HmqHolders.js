import React, {Component} from 'react';
import {fetchHmqHolders} from 'store/entities/hmqHolders/actions'
import HmqHoldersContainer from 'containers/HmqHoldersContainer'

class HmqHolders extends Component {

  static prepareData({dispatch}) {

    if(!__CLIENT__) return;
    return dispatch(fetchHmqHolders())
  }

  render() {
    return (
      <div>
        <HmqHoldersContainer />
      </div>
    )
  }
}

export default HmqHolders;