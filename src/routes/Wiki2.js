import React, {Component} from 'react';
import Wiki2Container from 'containers/Wiki2Container'


class Wiki0Route extends Component {

  render() {
    const {params:{section, article}} = this.props

    return (
      <div>
        <Wiki2Container {...{section, article}}/>
      </div>
    )
  }
}

export default Wiki0Route;