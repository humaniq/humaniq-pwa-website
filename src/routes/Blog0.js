import React, {Component} from 'react';
import Blog0Container from 'containers/Blog0Container'
class Blog0Route extends Component {
  render() {
    return (
      <Blog0Container >
        {this.props.children}
      </Blog0Container>
    )
  }
}

export default Blog0Route;