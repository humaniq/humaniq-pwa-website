import React, {Component} from 'react';
import HomeContainer from 'containers/HomeContainer'
import initialLoad from 'utils/initialLoad'
import {setPage} from 'AC/navigation'

class HomeRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    dispatch(setPage('home'))
  }

  render() {
    return (
      <div>
        <HomeContainer />
      </div>
    )
  }
}

export default HomeRoute;