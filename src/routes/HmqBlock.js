import React, {Component} from 'react';
import HmqBlockContainer from 'containers/HmqBlockContainer'
import {fetchHmqBlock} from 'store/entities/hmqBlock/actions'
import initialLoad from 'utils/initialLoad'

class HmqBlock extends Component {

  static prepareData({dispatch, getState}, query, params) {
    if(initialLoad() || !params.block) return;
    return dispatch(fetchHmqBlock(params.block))
  }

  render() {
    return (
      <HmqBlockContainer />
    )
  }
}

export default HmqBlock;