import React, {Component} from 'react'
import AboutContainer from 'components/pages/About/container'
import {setTheme} from 'store/entities/navigation/actions'
import initialLoad from 'utils/initialLoad'


class AboutRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    dispatch(setTheme('dark'))
  }

  render() {
    return (
      <AboutContainer />
    )
  }
}

export default AboutRoute