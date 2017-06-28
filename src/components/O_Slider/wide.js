import React, {Component} from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_SliderWide')
import M_Swipe from 'M_Swipe'
import A_H from 'A_H'
import {Motion, spring} from 'react-motion';

class O_SliderWide extends Component {

  state = {
    activeHistory: [this.props.default || 0]
  }

  handleSwipe = (direction) => {
    const {slides} = this.props
    const first = this.state.activeHistory.slice(-1)[0]
    const slidesCount = slides.length
    let last = slidesCount + first + (direction === 'next' ? 1 : -1)
    last = last % slidesCount
    this.setState({activeHistory: [first, last]})
  }

  getSlide(slide, zeroM, forward) {
    return (
      <div
        className={cn('slide')}
        style={{
          opacity: 0.5 + (0.5 * (1 - zeroM)),
          // transform: `translate(${(100 * (forward ? 1 : -1))}px, 0)`,
          transform: `translate(${(100 * (forward ? 1 : -1)) + ( (1 -zeroM) * 100 * (forward ? -1 : 1))}px, 0)`,
        }}
      >
        <img className={cn('image')} src={slide.img} width="220" height="220"/>
        <div className={cn('text')}>
          {forward ? 'вперед' : 'назад'}
          <A_H type="h4" href="#">{slide.title}</A_H>
          <div className={cn('description')} dangerouslySetInnerHTML={{__html: slide.html}}/>
        </div>
      </div>
    )
  }

  render() {
    const {slides} = this.props
    const {activeHistory} = this.state
    const past = activeHistory[0]
    const present = activeHistory.slice(-1)[0]

    return (
      <section className={cn()}>
        <div className="l-container">
          <M_Swipe onSwipedLeft={() => this.handleSwipe('prev')} onSwipedRight={() => this.handleSwipe('next')}>

          <div className={cn('inner')}>
              <div className={cn('prev')} onClick={() => this.handleSwipe('prev')}>{'  '}</div>
              <Motion
                defaultStyle={{x: -1}}
                style={{
                  x: spring(past, {stiffness: 50, damping: 17}),
                }}
              >{
                ({x}) => {
                  const zeroM = Math.abs((past - x) / ((past - present) === 0 ? 1 : past - present))
                  let forward;
                  switch(present){
                    case past:
                      forward = true
                      break
                    case slides.length - 1:
                      forward = past === slides.length - 2
                      break
                    case 0:
                      forward = past === slides.length - 1
                      break
                    default:
                      forward = present - past === 1
                  }
                  return (
                    this.getSlide(slides[present], zeroM, forward)
                  )
                }
              }
              </Motion>
              <div className={cn('next')} onClick={() => this.handleSwipe('next')}>{'  '}</div>
          </div>
          </M_Swipe>
        </div>
      </section>
    )
  }
}

O_SliderWide.propTypes = {};

O_SliderWide.defaultProps = {}

export default O_SliderWide
