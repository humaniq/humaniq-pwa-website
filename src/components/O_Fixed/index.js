import React, { Component, cloneElement } from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Fixed')
import {oneChild} from 'utils/propsValidationHelpers.js'
import {universalChildrenOnly} from 'utils/reactApiHelpers.js'

class O_Fixed extends Component {
  state = {
    sticky: false,
    componentWidth: undefined,
    componentHeight: undefined
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const {width: componentWidth, height: componentHeight} = this.stickyNode.getBoundingClientRect()
    this.setState({componentWidth, componentHeight})
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (this.state.sticky && (this.root.getBoundingClientRect().top > 0)) {
      this.setState({sticky: false})
    } else if (!this.state.sticky && (this.root.getBoundingClientRect().top < 0)) {
      this.setState({sticky: true})
    }
  }

  render() {
    const {sticky, componentWidth, componentHeight} = this.state
    const {children} = this.props
    const _newChild = cloneElement(universalChildrenOnly(children), {sticky})

    const style = sticky ?
      { height: componentHeight, width: componentWidth}
      : { height: 'auto', width: 'auto'}

    return (
      <div ref={node => this.root = node} style={style} >
        <div className={cn({sticky})} ref={node => this.stickyNode = node}>
          {_newChild}
        </div>
      </div>
    )
  }
}

O_Fixed.propTypes = {
  children: oneChild.isRequired, // should be only one element array or a node(string, jsx, ...etc)
};

O_Fixed.defaultProps = {
}

export default O_Fixed
