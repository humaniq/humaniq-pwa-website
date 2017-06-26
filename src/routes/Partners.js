import React, {Component} from 'react';
import PartnersContainer from 'containers/PartnersContainer'
import initialLoad from 'utils/initialLoad'
import {setPage} from 'AC/navigation'

class PartnersRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    dispatch(setPage('partners'))
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