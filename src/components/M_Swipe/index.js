import React, {Component} from 'react';
import * as T from "prop-types";

class M_Swipe extends Component {

  state = { originalX: 0, originalY: 0 }

  onTouchStart = (e) => {
    const touch = e.changedTouches[0]
    const current = this.getCurrentPosition(touch)

    this.setState({ originalX: current.x, originalY: current.y })
  }

  onTouchMove = (e) => {
    const touch = e.changedTouches[0]
    const delta = this.getDelta(touch)
    const current = this.getCurrentPosition(touch)
    this.props.onSwiping && this.props.onSwiping(e, this.state.originalX, this.state.originalY, current.x, current.y, delta.x, delta.y)
  }

  onTouchEnd = (e) => {
    const touch = e.changedTouches[0]
    const delta = this.getDelta(touch)
    const current = this.getCurrentPosition(touch)

    if (Math.abs(delta.x) > this.props.threshold) {
      if (delta.x > 0) this.props.onSwipedRight && this.props.onSwipedRight(e, this.state.originalX, current.x)
      if (delta.x < 0) this.props.onSwipedLeft && this.props.onSwipedLeft(e, this.state.originalX, current.x)
    }

    if (Math.abs(delta.y) > this.props.threshold) {
      if (delta.y > 0) this.props.onSwipedDown && this.props.onSwipedDown(e, this.state.originalY, current.y)
      if (delta.y < 0) this.props.onSwipedUp && this.props.onSwipedUp(e, this.state.originalY, current.y)
    }

    this.props.onSwiped && this.props.onSwiped(e, this.state.originalX, this.state.originalY, current.x, current.y, delta.x, delta.y)
    this.setState({ originalX: 0, originalY: 0 })
  }

  getCurrentPosition (touch) {
    return {
      x: parseInt(touch.screenX),
      y: parseInt(touch.screenY)
    }
  }

  getDelta = (touch) => {
    return {
      x: parseInt(touch.screenX) - this.state.originalX,
      y: parseInt(touch.screenY) - this.state.originalY
    }
  }

  getModifiedProps = () => {
    const props = {
      ...this.props,
      onTouchStart: this.onTouchStart,
      onTouchEnd: this.onTouchEnd,
      onTouchMove: this.onTouchMove
    }

    delete props.children
    delete props.onSwiping
    delete props.onSwiped
    delete props.onSwipedUp
    delete props.onSwipedDown
    delete props.onSwipedLeft
    delete props.onSwipedRight
    delete props.nodeName
    delete props.threshold

    return props
  }

  render () {
    const props = this.getModifiedProps()
    return React.createElement(
      this.props.nodeName,
      props,
      this.props.children
    )
  }
}

M_Swipe.defaultProps = {
  threshold: 30,
  nodeName: 'div'
}

M_Swipe.propTypes = {
  children: T.element.isRequired,
  onSwiping: T.func,
  onSwiped: T.func,
  onSwipedUp: T.func,
  onSwipedDown: T.func,
  onSwipedLeft: T.func,
  onSwipedRight: T.func,
  nodeName: T.string,
  threshold: T.number,
}

export default M_Swipe