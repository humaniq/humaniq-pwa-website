import React, {Component} from 'react';
import HmqLayoutContainer from 'HmqLayout/container.js'
import initialLoad from 'utils/initialLoad'
import {setTheme} from 'store/entities/navigation/actions'

class HmqLayoutRoute extends Component {

  static prepareData(store) {
    if(initialLoad()) return;
    store.dispatch(setTheme('dark'))
  }

  render() {
    return (
      <HmqLayoutContainer >
        {this.props.children}
      </HmqLayoutContainer>
    )
  }
}

export default HmqLayoutRoute;