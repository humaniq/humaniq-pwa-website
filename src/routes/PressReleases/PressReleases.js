import React, {Component} from 'react';
import PressReleases from 'components/pages/PressReleases/container'
import initialLoad from "utils/initialLoad";
import {fetchPressReleases} from "store/entities/pressReleases/actions";
import {setTheme} from "store/entities/navigation/actions";

class PressReleasesRoute extends Component {


  static prepareData({dispatch}) {
    dispatch(setTheme('dark'))

    return(
      dispatch(fetchPressReleases())
    )
  }

  render() {
    return (
      <PressReleases />
    )
  }
}

export default PressReleasesRoute;