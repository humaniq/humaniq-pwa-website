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

  getSlide(present, past, oneM, forward, isInit) {
    oneM = isInit ? 1 : oneM
    // oneM = oneM === 1 ? 0 : oneM
    return (
      <div>
        <div
          className={cn('slide', ['present'])}
          style={{
            opacity: (oneM),
            transform: `translate(${
              forward ?
                (1 - oneM) * 800
                : (1 - oneM) * -800
            }px, 0)`,
            left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <img className={cn('image')} src={present.img} width="220" height="220"/>
          <div className={cn('text')}>
            <A_H type="h4" href="#">{present.title}</A_H>
            <div className={cn('description')} dangerouslySetInnerHTML={{__html: present.html}}/>
          </div>
        </div>
        <div
          className={cn('slide')}
          style={{
            opacity: (1 - oneM ),
            transform: `translate(${
              forward ?
                oneM * -800
                : oneM * 800
            }px, 0)`,
          }}
        >
          <img className={cn('image')} src={past.img} width="220" height="220"/>
          <div className={cn('text')}>
            <A_H type="h4" href="#">{past.title}</A_H>
            <div className={cn('description')} dangerouslySetInnerHTML={{__html: past.html}}/>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {slides} = this.props
    const {activeHistory} = this.state
    const past = activeHistory[0]
    const present = activeHistory.slice(-1)[0]
    const isInit = past === present

    return (
      <section className={cn()}>
        <div className="l-container">
          <M_Swipe onSwipedLeft={() => this.handleSwipe('next')} onSwipedRight={() => this.handleSwipe('prev')}>

            <div className={cn('inner')}>
              <div className={cn('prev')} onClick={() => this.handleSwipe('prev')}>{'  '}</div>
              <Motion
                defaultStyle={{x: 0}}
                style={{
                  x: spring(present, {stiffness: 50, damping: 17}),
                }}
              >{
                ({x}) => {
                  const oneM = Math.abs((past - x) / ((past - present) === 0 ? 1 : past - present))
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
                    this.getSlide(slides[present], slides[past], oneM, forward, isInit)
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