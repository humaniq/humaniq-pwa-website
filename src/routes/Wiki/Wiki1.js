import React, {Component} from 'react';
import Wiki1Container from 'components/pages/Wiki1/container'


class Wiki0Route extends Component {

  render() {
    const {params:{level0}} = this.props

    return (
      <Wiki1Container level0={level0}/>
    )
  }
}

export default Wiki0Route;