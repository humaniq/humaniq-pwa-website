import React, {Component} from 'react';
import ContactUsContainer from 'containers/ContactUsContainer'
import {setTheme} from 'store/entities/navigation/actions'
import initialLoad from 'utils/initialLoad'

class ContactUsRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    dispatch(setTheme('dark'))
  }

  render() {
    return (
      <ContactUsContainer />
    )
  }
}

export default ContactUsRoute;