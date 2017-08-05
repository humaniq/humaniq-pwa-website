import React, {Component} from 'react';
import AmbassadorsContainer from 'containers/AmbassadorsContainer'
import {fetchAmbassadors} from 'AC/otherAPI'

class AmbassadorsRoute extends Component {

  static prepareData({dispatch}) {
    if(__SERVER__) {
      return dispatch(fetchAmbassadors())
    }
  }

  render() {
    return (
      <div>
        <AmbassadorsContainer />
      </div>
    )
  }
}

export default AmbassadorsRoute;