import React, {Component} from 'react';
import Wiki1Container from 'containers/Wiki1Container'


class Wiki0Route extends Component {

  render() {
    const {params:{section}} = this.props

    return (
      <div>
        <Wiki1Container section={section}/>
      </div>
    )
  }
}

export default Wiki0Route;