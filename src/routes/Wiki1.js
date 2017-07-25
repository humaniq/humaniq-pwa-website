import React, {Component} from 'react';
import Wiki1Container from 'containers/Wiki1Container'


class Wiki0Route extends Component {

  render() {
    const {params:{level0}} = this.props

    return (
      <div>
        <Wiki1Container level0={level0}/>
      </div>
    )
  }
}

export default Wiki0Route;