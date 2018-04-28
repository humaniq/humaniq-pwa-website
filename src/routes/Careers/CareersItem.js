import React, {Component} from 'react';
import CareersItemContainer from 'components/pages/CareersItem/container'

class CareersItemRoute extends Component {

  render() {
    const {params:{jobId}} = this.props
    return (
      <CareersItemContainer id={jobId} />
    )
  }
}

export default CareersItemRoute;