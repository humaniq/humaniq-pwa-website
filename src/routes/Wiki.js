import React, {Component} from 'react';
import WikiContainer from 'containers/WikiContainer'
import initialLoad from 'utils/initialLoad'
import {setPage} from 'AC/navigation'

class WikiRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
  }

  render() {
    return (
      <div>
        <WikiContainer />
      </div>
    )
  }
}

export default WikiRoute;