import React, {Component} from 'react';
import HumaniqReport2018Container from 'components/pages/HumaniqReport2018/container'
import {setTheme} from 'store/entities/navigation/actions'
import initialLoad from 'utils/initialLoad'

class HumaniqReport2018Route extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    dispatch(setTheme('dark'))
  }

  render() {
    return (
      <HumaniqReport2018Container />
    )
  }
}

export default HumaniqReport2018Route;