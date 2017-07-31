import React, {Component} from 'react';
import Blog0Container from 'containers/Blog0Container'
class Blog0Route extends Component {
  render() {
    return (
      <div>
        <Blog0Container >
          {this.props.children}
        </Blog0Container>
      </div>
    )
  }
}

export default Blog0Route;