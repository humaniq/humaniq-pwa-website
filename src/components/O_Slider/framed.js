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
          <div
            className={cn('texts-item-div', [isActive && 'active'])}
            onClick={() => this.onClick(i)}
            key={'key_' + i}
          >
            <div
              dangerouslySetInnerHTML={{__html: slide.html}}/>
          </div>

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
    const isInit = past === present
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
                x: spring(present, {stiffness: 50, damping: 17}),
              }}
            >{ ({x}) => {
              const oneM = Math.abs((past - x) / ((past - present) === 0 ? 1 : past - present))
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
                      opacity: isInit ? 1 : oneM,
                      transform: `translate(0, ${isInit ? 0 : (8 - (oneM * 8))}px)`,
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
