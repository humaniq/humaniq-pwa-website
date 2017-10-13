import React, {Component} from 'react';
import LegalContainer from 'containers/LegalContainer'

class LegalRoute extends Component {
  render() {
    const page = this.props.route.path
    return (
      <LegalContainer page={page}/>
    )
  }
}

export default LegalRoute;