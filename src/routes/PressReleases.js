import React, {Component} from 'react';
import PressReleasesContainer from 'PressReleases/container.js'
import {setTheme} from 'store/entities/navigation/actions'
import initialLoad from 'utils/initialLoad'

class PressReleasesRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    dispatch(setTheme('dark'))
  }

  render() {
    return (
      <PressReleasesContainer />
    )
  }
}

export default PressReleasesRoute;