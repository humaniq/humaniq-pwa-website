import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import Ripple from './Ripple'
import {cssClassName} from 'utils'
const cn = cssClassName('M_Ripple')

class M_Ripple extends Component {
  state = {
    cursorPos: {}
  }

  handleClick = (e) => {
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    }
    this.setState({ cursorPos: cursorPos })
  }

  render() {
    const {children, className, ...props} = this.props
    return (
      <div
        className={cn('parent', [className])}
        {...props}
        onMouseUp={ this.handleClick }
        onTouchEnd={ this.handleClick }
      >
        {children}
        <Ripple cursorPos={ this.state.cursorPos } />
      </div>
    )
  }
}

M_Ripple.propTypes = {
  className: T.string,
  children: T.node.isRequired,
};

M_Ripple.defaultProps = {
}

export default M_Ripple