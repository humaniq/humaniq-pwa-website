import React, {Component} from 'react';
import PressReleasesItem from 'components/pages/PressReleasesItem/container'

class CareersItemRoute extends Component {

  render() {
    const {params:{jobId}} = this.props
    return (
      <PressReleasesItem id={jobId} />
    )
  }
}

export default CareersItemRoute;