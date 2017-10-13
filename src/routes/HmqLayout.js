import React, {Component} from 'react';
import HmqLayoutContainer from 'containers/HmqLayoutContainer'
class HmqLayoutRoute extends Component {
  render() {
    return (
      <HmqLayoutContainer >
        {this.props.children}
      </HmqLayoutContainer>
    )
  }
}

export default HmqLayoutRoute;