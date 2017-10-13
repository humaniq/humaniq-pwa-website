import React, {Component} from 'react';
import AmbassadorsContainer from 'containers/AmbassadorsContainer'
import {fetchAmbassadors} from 'store/entities/ambassadors/actions'

class AmbassadorsRoute extends Component {

  static prepareData({dispatch}) {
    if(__SERVER__) {
      return dispatch(fetchAmbassadors())
    }
  }

  render() {
    return (
      <AmbassadorsContainer />
    )
  }
}

export default AmbassadorsRoute;