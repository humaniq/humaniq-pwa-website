import React, {Component} from 'react';
import PartnersContainer from 'containers/PartnersContainer'
import initialLoad from 'utils/initialLoad'
import {fetchPartners} from 'AC/otherAPI'

class PartnersRoute extends Component {

  static prepareData({dispatch}, query, params) {
    if(initialLoad()) return;
    return (
      dispatch(fetchPartners())
    )
  }

  render() {
    return (
      <div>
        <PartnersContainer />
      </div>
    )
  }
}

export default PartnersRoute;