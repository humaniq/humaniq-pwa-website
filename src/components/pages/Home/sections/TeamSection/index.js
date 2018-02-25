import React, { Component } from 'react'
import A_Title from 'A_Title_H'
import SectionCounter from '../common/SectionCounter/index.js'
import './styles.scss'
import { cssClassName } from 'utils'
// import A_Image from 'A_Image/index'
import SwipeHOC from 'HOC/Swipe'
const cn = cssClassName('SE_Home_Team')
import { getDelta, indexOfShow, pairSplit, findIndexesOfRedundantSlides } from './helpers'
import Slide from './Slide'
import { team, advisers, ambassadors } from './data'

const NORMAL_WIDTH = 136
const WIDE_WIDTH = NORMAL_WIDTH + 20 + 16
// import M_Tooltip from 'M_Tooltip'

class SE_Home_Team extends Component {
  state = {
    show: 0
  }

  widths = { container: 0 }

  right = () => this.changeShow(1)
  left = () => this.changeShow(-1)
  changeShow = n => this.setState(oldState => ({ show: oldState.show + n }))
  onSwipeRight = this.left
  onSwipeLeft = this.right
  threshold = 100
  slideGroups = [pairSplit(team, 'team'), pairSplit(advisers, 'advisers'), pairSplit(ambassadors, 'ambassadors')]
  slidesWidths = []
  slidesCount = this.slideGroups.reduce((sum, el) => sum + el.entities.length, 0)

  getStep = (slidesWidths, show) =>
    slidesWidths.length ? getDelta(slidesWidths, show) : WIDE_WIDTH

  getSlides(slideGroups, slidesCount, show, indexesOfRedundantSlides) {
    let res = []
    const genSlidesArray = (slideGroups, keys_name) => {
      let indexTotal = 0
      return slideGroups.map(({ title, entities }) => {
        return entities.map((slide, i) => {
          indexTotal += 1

          const first = i === 0
          if (keys_name === 'clone_before') {
            this.slidesWidths.push(first ? WIDE_WIDTH : NORMAL_WIDTH)
          }
          return (
            <Slide
              persons={slide}
              place = {keys_name + i}
              showGroupName={first}
              groupName={title}
              hidden = {indexesOfRedundantSlides.arr.includes(indexTotal)}
              mix={indexesOfRedundantSlides.arr.includes(indexTotal) ? cn('hidden-slide') : cn('showing-slide')}
              mouseSlideEnterHandler = {this.mouseSlideEnterHandler}
              mouseSlideLeaveHandler = {this.mouseSlideLeaveHandler}
              openPeopleModal = {this.props.openPeopleModal}
            />
          )
        })
      })
    }

    res = res.concat(genSlidesArray(slideGroups, 'clone_before'))
    res = res.concat(genSlidesArray(slideGroups, 'clone_middle'))
    res = res.concat(genSlidesArray(slideGroups, 'clone_after'))

    return res
  }

  handleResize = () => {
    this.forceUpdate()

  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    this.forceUpdate()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }


  render() {
    const { mix } = this.props
    const { slideGroups, slidesWidths, slidesCount } = this

    const { show } = this.state
    const move = (show / slidesCount) | 0
    const showingSlideIndex = indexOfShow(slidesCount, show)

    const indexesOfRedundantSlides = findIndexesOfRedundantSlides(
      slidesCount,
      show,
      this.slidesWidths,
      this.widths.container.offsetWidth
    )
    const {padding} = indexesOfRedundantSlides
    const renderedSlides = this.getSlides(slideGroups, slidesCount, show, indexesOfRedundantSlides)
    const step = this.getStep(slidesWidths, show)
    let active;
    if(showingSlideIndex < 0){
      active = 'ambassadors'
    } else if(showingSlideIndex < 6){
      active = 'team'
    } else if(showingSlideIndex < 10){
      active = 'advisers'
    } else{
      active = 'ambassadors'
    }

    return (
      <section className={cn([mix])}>
        <div
          className={cn('content')}
        >
          <div className={cn('nav-prev')} onClick={() => this.left()} />
          <div className={cn('nav-next')} onClick={() => this.right()} />

          <div className={cn('header')}>
            <A_Title mix={cn('title')} type="section" theme="dark">
              People behind Humaniq project
            </A_Title>
            <div>
              <span className={cn('slider-nav-groups', {active: active == 'team'})} onClick={() => this.setState({show:0})}>
                Team
              </span>
                <span className={cn('slider-nav-groups', {active: active == 'advisers'})} onClick={() => this.setState({show:6})}>
                Advisers
              </span>
                <span className={cn('slider-nav-groups', {active: active == 'ambassadors'})} onClick={() => this.setState({show:10})}>
                Ambassadors
              </span>
            </div>
          </div>


          <div
            className="wrapper1"
            onTouchStart={this.props.onTouchStart}
            onTouchMove={this.props.onTouchMove}
            ref={node => (this.widths.container = node)}
            style={{paddingLeft: padding}}
          >
            <div
              className="wrapper2"
              style={{ transform: `translate3d(${move * (this.widths.inner / 3)}px, 0px, 0px)` }}
            >
              <div
                className="inner"
                style={{ transform: `translate3d(${step - this.widths.inner / 3}px, 0px, 0px)` }}
                ref={node => (this.widths.inner = node ? node.offsetWidth : 0)}
              >
                {renderedSlides}
              </div>
            </div>
            <div className={cn('linner-gradient-left')}></div>
            <div className={cn('linner-gradient-right')}></div>
          </div>
        </div>
        <SectionCounter sectionNum={12} theme="bright" />
      </section>
    )
  }
}

SE_Home_Team.propTypes = {}

SE_Home_Team.defaultProps = {}

export default SwipeHOC(SE_Home_Team)
