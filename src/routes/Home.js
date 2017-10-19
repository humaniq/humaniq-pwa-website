import React, {Component} from 'react';
import HomeContainer from 'Home/сontainer.js'
import initialLoad from 'utils/initialLoad'

class HomeRoute extends Component {

  static prepareData() {
    if(initialLoad()) return;
  }

  render() {
    return (
      <HomeContainer />
    )
  }
}

export default HomeRoute;