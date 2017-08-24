import React, {Component} from 'react';
import {fetchHmqHash} from 'store/entities/hmqHash/actions'
import HmqHashContainer from 'containers/HmqHashContainer'


class HmqTxHash extends Component {

  static prepareData({dispatch, getState}, query, params) {
    if(!params.hash) return;
    return dispatch(fetchHmqHash(params.hash))
  }

  render() {
    return (
      <div>
        <HmqHashContainer />
      </div>
    )
  }
}

export default HmqTxHash;