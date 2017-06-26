import React, {Component} from 'react';
import SubscribeContainer from 'containers/SubscribeContainer'
import initialLoad from 'utils/initialLoad'
import {setPage} from 'AC/navigation'

class SubscribeRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    dispatch(setPage('subscribe'))
  }

  render() {
    return (
      <div>
        <SubscribeContainer />
      </div>
    )
  }
}

export default SubscribeRoute;