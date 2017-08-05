import React, {Component} from 'react';
import HmqContainer from 'containers/HmqContainer'
import {fetchHmqStatistics} from 'AC/hmqExp'

class PostRoute extends Component {

  static prepareData({dispatch}) {
    if(__SERVER__){
      dispatch(fetchHmqStatistics())
    }
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