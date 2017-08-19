import React, {Component} from 'react';
import InternalFormContainer from 'containers/InternalFormContainer'

class InternalRoute extends Component {
  render() {
    return (
      <div>
        <InternalFormContainer >
          {this.props.children}
        </InternalFormContainer>
      </div>
    )
  }
}

export default InternalRoute;