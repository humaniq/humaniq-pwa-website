import React, {Component} from 'react';
import Wiki2Container from 'components/pages/Wiki2/container'


class Wiki0Route extends Component {

  render() {
    const {params:{level0, id}} = this.props

    return (
      <Wiki2Container {...{level0, id}}/>
    )
  }
}

export default Wiki0Route;