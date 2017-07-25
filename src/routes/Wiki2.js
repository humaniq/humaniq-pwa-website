import React, {Component} from 'react';
import Wiki2Container from 'containers/Wiki2Container'


class Wiki0Route extends Component {

  render() {
    const {params:{level0, id}} = this.props

    return (
      <div>
        <Wiki2Container {...{level0, id}}/>
      </div>
    )
  }
}

export default Wiki0Route;