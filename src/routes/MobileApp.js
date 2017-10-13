import React, {Component} from 'react';
import MobileAppContainer from 'containers/MobileAppContainer'
class MobileAppRoute extends Component {
  render() {
    return (
      <MobileAppContainer >
        {this.props.children}
      </MobileAppContainer>
    )
  }
}

export default MobileAppRoute;