import React, {Component} from 'react';
import HmqContainer from 'containers/HmqContainer'
import {fetchGraphicData} from 'AC/hmqExp'

import initialLoad from 'utils/initialLoad'

class PostRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;

    dispatch(fetchGraphicData('1h'))
    dispatch(fetchGraphicData('1d'))
    dispatch(fetchGraphicData('1y'))
    dispatch(fetchGraphicData('1w'))
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