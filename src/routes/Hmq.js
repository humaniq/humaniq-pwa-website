import React, {Component} from 'react';
import HmqContainer from 'containers/HmqContainer'
import {fetchGraphicData} from 'AC/hmqExp'

import initialLoad from 'utils/initialLoad'

class PostRoute extends Component {

  static prepareData({dispatch}) {
    // if(initialLoad()) return;

    fetchGraphicData('1h')
    fetchGraphicData('1d')
    fetchGraphicData('1y')
    fetchGraphicData('1w')

  }

  render() {
    return (
      <div>
        <HmqContainer />
      </div>
    )
  }
}

export default PostRoute;