import React, {Component} from 'react';
import HmqLayoutKherelContainer from 'containers/HmqLayoutKherelContainer'

class HmqLayoutRoute extends Component {

  render() {
    return (
      <div>
        <HmqLayoutKherelContainer >
          {this.props.children}
        </HmqLayoutKherelContainer>
      </div>
    )
  }
}

export default HmqLayoutRoute;