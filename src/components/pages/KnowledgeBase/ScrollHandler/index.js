import { Component } from 'react';

class ScrollHandler extends Component {
  componentDidUpdate () {

    const {scrollContainer, scrollTo, scrollMotionProgress, finishScrollMotion} = this.props;


    if(scrollTo !== scrollMotionProgress) {
      scrollContainer.scrollTop = scrollMotionProgress + 5
    }
    else {
      finishScrollMotion()
    }

  }

  render () {
    return null
  }
}

export default ScrollHandler;