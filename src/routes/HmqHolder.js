import React, {Component} from 'react';
import {fetchHmqHolder, fetchHmqHolderT} from 'store/entities/hmqHolder/actions'
import initialLoad from 'utils/initialLoad'
// import HmqHoldersContainer from 'containers/HmqHoldersContainer'
import HmqHolderContainer from 'containers/HmqHolderContainer'

class HmqHolder extends Component {

  static prepareData({dispatch, getState}, query, params) {
    if(initialLoad() || !params.holder) return;
    dispatch(fetchHmqHolderT(params.holder))
    return dispatch(fetchHmqHolder(params.holder))
  }

  render() {
    return (
      <HmqHolderContainer />
    )
  }
}

export default HmqHolder;