import React, {Component} from 'react';
import InstExchangeContainer from 'components/pages/InstExchange/container'
import {setTheme} from 'store/entities/navigation/actions'
import initialLoad from 'utils/initialLoad'

class ContactUsRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    dispatch(setTheme('dark'))
  }

  render() {
    return (
      <InstExchangeContainer />
    )
  }
}

export default ContactUsRoute;