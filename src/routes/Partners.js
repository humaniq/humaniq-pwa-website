import React, {Component} from 'react';
import PartnersContainer from 'containers/PartnersContainer'
import {fetchPartners} from 'store/entities/partners/actions'

class PartnersRoute extends Component {

  static prepareData({dispatch}) {
    if(__SERVER__) {
      return dispatch(fetchPartners())
    }
  }

  render() {
    return (
      <PartnersContainer />
    )
  }
}

export default PartnersRoute;