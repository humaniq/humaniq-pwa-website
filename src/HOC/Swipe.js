import React, { PureComponent as ReactComponent } from 'react'

export default Component =>
  class Swiper extends ReactComponent {
    originalX = 0

    onTouchStart = e => {
      const touch = e.changedTouches[0]
      const current = this.getCurrentPosition(touch)
      this.originalX = current.x
    }

    onTouchMove = e => {
      const touch = e.changedTouches[0]
      const delta = this.getDelta(touch)

      if (Math.abs(delta.x) > this.swipeComponent.threshold) {
        if (delta.x > 0) this.swipeComponent.onSwipeRight()
        if (delta.x < 0) this.swipeComponent.onSwipeLeft()
        const current = this.getCurrentPosition(touch)
        this.originalX = current.x
      }
    }

    getCurrentPosition = touch => ({ x: parseInt(touch.screenX) })
    getDelta = touch => ({ x: parseInt(touch.screenX) - this.originalX })

    componendDidUpdate() {
      this.forceUpdate()
    }

    render() {
      return (
        <Component
          {...this.props}
          ref={node => (this.swipeComponent = node)}
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
        />
      )
    }
  }
