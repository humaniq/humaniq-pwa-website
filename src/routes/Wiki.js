import React, {Component} from 'react';
import WikiLayoutContainer from 'containers/WikiLayoutContainer'

class WikiLayoutRoute extends Component {

  render() {
    return (
      <div>
        <WikiLayoutContainer >
          {this.props.children}
        </WikiLayoutContainer>
      </div>
    )
  }
}

export default WikiLayoutRoute;