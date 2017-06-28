import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import M_DotIndicator from 'M_DotIndicator'
import M_Swipe from 'M_Swipe'
const cn = cssClassName('O_SliderFramed')
import {Motion, spring} from 'react-motion';

class O_SliderFramed extends Component {
  state = {
    activeHistory: [this.props.default || 0]
  }

  getSlides(slides, active) {
    return (
      slides.map((slide, i) => {
        const isActive = i === active
        return (
          <p
            key={'key_' + i}
            className={cn('texts-item', [isActive && 'active'])}
            onClick={() => this.onClick(i)}
            dangerouslySetInnerHTML={{__html: slide.html}}/>
        )
      })
    )
  }

  onClick = (last) => {
    const first = this.state.activeHistory.slice(-1)[0]
    this.setState({activeHistory: [first, last]})
  }

  handleSwipe = (direction) => {
    const {slides} = this.props
    const first = this.state.activeHistory.slice(-1)[0]
    const slidesCount = slides.length
    let last = slidesCount + first + (direction === 'next' ? 1 : -1)
    last = last % slidesCount
    this.setState({activeHistory: [first, last]})
  }

  render() {
    const {slides} = this.props
    const {activeHistory} = this.state
    const past = activeHistory[0]
    const present = activeHistory.slice(-1)[0]

    const imgSrc = slides[present].img
    const renderedSlides = this.getSlides(slides, present)
    return (
      <section>
        <M_Swipe
          onSwipedRight={() => this.handleSwipe('prev')}
          onSwipedLeft={() => this.handleSwipe('next')}
        >
          <div className="l-container">
            <Motion
              defaultStyle={{x: 0}}
              style={{
                x: spring(past, {stiffness: 50, damping: 17}),
              }}
            >{ ({x}) => {
              // const forward = present > past
              const zeroM = Math.abs((past - x) / ((past - present) === 0 ? 1 : past - present))
              // const one = (1 - zeroM) * (forward ? 1 : -1)
              return (
                <div className={cn('inner')} >
                  <div className={cn('texts')}>
                    {renderedSlides}
                  </div>
                  <div className={cn('indicator')}>
                    <M_DotIndicator count={slides.length} active={present} onClick={this.onClick}/>
                  </div>
                  <img
                    className={cn('image')}
                    src={imgSrc}
                    width="450"
                    height="375"
                    style={{
                      opacity: 1 - zeroM,
                      // transform: `translate(${(8*(forward ? 1 : -1)) - (one * 8)}px, 0)`,
                      transform: `translate(0, ${(zeroM * 8)}px)`,
                    }}/>
                </div>
              )
            }}
            </Motion>
          </div>
        </M_Swipe>
      </section>
    )
  }
}

O_SliderFramed.propTypes = {
  default: T.number,
  slides: T.array.isRequired
};

O_SliderFramed.defaultProps = {
  slides: []
}

export default O_SliderFramed
