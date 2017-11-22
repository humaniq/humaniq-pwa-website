import React, {Component} from 'react';
import {fetchHmqHash} from 'store/entities/hmqHash/actions'
import HmqHashContainer from 'components/pages/HmqHash/container'


class HmqTxHash extends Component {

  static prepareData({dispatch, getState}, query, params) {
    if(!params.hash) return;
    return dispatch(fetchHmqHash(params.hash))
  }

  render() {
    return (
      <HmqHashContainer />
    )
  }
}

export default HmqTxHash;