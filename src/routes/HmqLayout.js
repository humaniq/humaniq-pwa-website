import React, {Component} from 'react';
import HmqLayoutContainer from 'containers/HmqLayoutContainer'
class HmqLayoutRoute extends Component {
  render() {
    return (
      <div>
        <HmqLayoutContainer >
          {this.props.children}
        </HmqLayoutContainer>
      </div>
    )
  }
}

export default HmqLayoutRoute;