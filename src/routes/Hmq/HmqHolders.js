import React, {Component} from 'react';
import {fetchHmqHolders} from 'store/entities/hmqHolders/actions'
import HmqHoldersContainer from 'components/pages/HmqHolders/container'

class HmqHolders extends Component {

  static prepareData({dispatch, getState}) {
    const state = getState()

    if(!__CLIENT__ || state.hmqHolders.entities.length) return;

    return dispatch(fetchHmqHolders())
  }

  render() {
    return (
      <HmqHoldersContainer />
    )
  }
}

export default HmqHolders;