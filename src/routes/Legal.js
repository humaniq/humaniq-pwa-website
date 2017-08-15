import React, {Component} from 'react';
import LegalContainer from 'containers/LegalContainer'

class LegalRoute extends Component {
  render() {
    const page = this.props.route.path
    return (
      <div>
        <LegalContainer page={page}/>
      </div>
    )
  }
}

export default LegalRoute;