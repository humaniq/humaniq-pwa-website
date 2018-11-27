import React, {Component} from 'react';
import InstExchange2Container from 'components/pages/InstExchange2/container'
import {setTheme} from 'store/entities/navigation/actions'
import initialLoad from 'utils/initialLoad'

class InstExchange2Route extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    dispatch(setTheme('dark'))
  }

  render() {
    return (
      <InstExchange2Container />
    )
  }
}

export default InstExchange2Route;