import React, {Component} from 'react';
import PersonalHomeContainer from 'containers/PersonalHomeContainer'
import initialLoad from 'utils/initialLoad'

class HomeRoute extends Component {

  static prepareData() {
    if(initialLoad()) return;
  }

  render() {
    return (
      <div>
        <PersonalHomeContainer />
      </div>
    )
  }
}

export default HomeRoute;