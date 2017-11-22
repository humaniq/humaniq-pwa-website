import React, {Component} from 'react';
import {fetchHmqHolder, fetchHmqHolderT} from 'store/entities/hmqHolder/actions'
import initialLoad from 'utils/initialLoad'
import HmqHolderContainer from 'components/pages/HmqHolder/container'

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