import React, {Component} from 'react';
import AmbassadorsContainer from 'components/pages/Ambassadors/container'
import {fetchAmbassadors} from 'store/entities/ambassadors/actions'
import {setTheme} from 'store/entities/navigation/actions'
import initialLoad from 'utils/initialLoad'

class AmbassadorsRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    dispatch(setTheme('dark'))

    //if(__SERVER__) {
    //  return dispatch(fetchAmbassadors())
    //}
  }

  render() {
    return (
      <AmbassadorsContainer />
    )
  }
}

export default AmbassadorsRoute;