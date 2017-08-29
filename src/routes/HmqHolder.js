import React, {Component} from 'react';
import {fetchHmqHolder, fetchHmqHolderT, cleanHmqHolderT} from 'store/entities/hmqHolder/actions'
import initialLoad from 'utils/initialLoad'
import HmqHolderContainer from 'containers/HmqHolderContainer'

class HmqHolder extends Component {

  static prepareData({dispatch, getState}, query, params) {
    if(initialLoad() || !params.holder) return;
    const state = getState()
    dispatch(cleanHmqHolderT())
    dispatch(fetchHmqHolderT(params.holder))

    // if(state.address !== params.holder){
    //   dispatch(cleanHmqHolderT())
    // } else {
    //   dispatch(fetchHmqHolderT(params.holder))
    // }
    return dispatch(fetchHmqHolder(params.holder))
  }

  render() {
    return (
      <HmqHolderContainer />
    )
  }
}

export default HmqHolder;