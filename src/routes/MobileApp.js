import React, {Component} from 'react';
import MobileAppContainer from 'containers/MobileAppContainer'
class MobileAppRoute extends Component {
  render() {
    return (
      <div>
        <MobileAppContainer >
          {this.props.children}
        </MobileAppContainer>
      </div>
    )
  }
}

export default MobileAppRoute;