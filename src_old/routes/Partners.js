import React, {Component} from 'react';
import PartnersContainer from 'containers/PartnersContainer'
import initialLoad from 'utils/initialLoad'

class PartnersRoute extends Component {

  static prepareData() {
    if(initialLoad()) return;
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