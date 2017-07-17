import React, {Component} from 'react';
import CasesContainer from 'containers/CasesContainer'
import initialLoad from 'utils/initialLoad'

class CasesRoute extends Component {
  render() {
    return (
      <div>
        <CasesContainer />
      </div>
    )
  }
}

export default CasesRoute;