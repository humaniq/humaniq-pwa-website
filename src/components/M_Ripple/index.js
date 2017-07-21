import React, { Component, cloneElement } from 'react';
import * as T from "prop-types";
import './styles.scss';
import Ripple from './Ripple'
import {cssClassName} from 'utils'
const cn = cssClassName('M_Ripple')
import {oneChild} from 'utils/propsValidationHelpers.js'
import {universalChildrenOnly} from 'utils/reactApiHelpers.js'


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

  delayClick = (onClick, delay) => {
    setTimeout(onClick, delay)
  }

  render() {
    const {children, className, onClick, delay, ...props} = this.props

    let _newChild
    if(onClick){
      _newChild = cloneElement(universalChildrenOnly(children), {onClick: () => this.delayClick(onClick, delay)})
    }

    return (
      <div
        className={cn('parent', [className])}
        {...props}
        onMouseUp={ this.handleClick }
        onTouchEnd={ this.handleClick }
      >
        {_newChild ? _newChild : children}
        <Ripple cursorPos={ this.state.cursorPos } />
      </div>
    )
  }
}

M_Ripple.propTypes = {
  delay: T.number, // custom delay
  className: T.string,
  children: oneChild.isRequired, // should be only one element array or a node(string, jsx, ...etc)
};

M_Ripple.defaultProps = {
  delay: 300 //default delay
}

export default M_Ripple