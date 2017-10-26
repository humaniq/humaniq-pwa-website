import React, { Component } from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Home')
// import Meta from './meta.js'
import {isMobile} from 'utils/isMobile'
import O_Footer_H from 'O_Footer_H'
import EmpoweringSection from './sections/EmpoweringSection'
import FirstMobileSection from './sections/FirstMobileSection'
import UnbankedStatSection from './sections/UnbankedStatSection'
import QuotesSection from './sections/QuotesSection'
import WhatMakesSection from './sections/WhatMakesSection'
import SafetySection from './sections/SafetySection'
import OpportunitiesSection from './sections/OpportunitiesSection'
import GrowingSection from './sections/GrowingSection'
import UseCasesSection from './sections/UseCasesSection'
import GlobalChallengeSection from './sections/GlobalChallengeSection'
import ExpeditionSection from './sections/ExpeditionSection'
import TimelineSection from './sections/TimelineSection'
import WorldTalkingSection from './sections/WorldTalkingSection'
import TeamSection from './sections/TeamSection'

const sectionsNames = [
  'empowering',
  'mobile',
  'situation',
  'changes',
  'platform',
  'simplicity',
  'opportunities',
  'use cases',
  'challenge',
  'expedition',
  'timeline',
  'team',
  'press',
  'contacts'
]

const sectionsObj = {
  'empowering': <EmpoweringSection mix={cn('section')} key='empowering' />,
  'mobile': <FirstMobileSection mix={cn('section')} key='mobile' />,
  'situation': <UnbankedStatSection mix={cn('section')} key='situation' />,
  'changes': <QuotesSection mix={cn('section', {type: 'slider'})} key='changes' />,
  'platform': <WhatMakesSection mix={cn('section')} key='platform'/>,
  'simplicity': <SafetySection mix={cn('section')} key='simplicity'/>,
  'opportunities': <OpportunitiesSection mix={cn('section')} key='opportunities'/>,
  'userbase': <GrowingSection mix={cn('section')} key='userbase'/>,
  'use cases': <UseCasesSection mix={cn('section')} key='usecases'/>,
  'challenge': <GlobalChallengeSection mix={cn('section')} key='challenge'/>,
  'expedition': <ExpeditionSection mix={cn('section')} key='expedition'/>,
  'timeline': <TimelineSection mix={cn('section')} key='timeline'/>,
  'team': <TeamSection mix={cn('section')} key='team' />,
  'press': <WorldTalkingSection mix={cn('section')}  key='press'/>,
  'contacts': <O_Footer_H mix={cn('section', {type: 'half-height'})}  key='contacts'/>,
}

const dark = [
  'mobile',
  'situation',
  'platform',
  'opportunities',
  'use cases',
  'expedition',
  'team'
]

const showingWidth = 1120

class Home extends Component {

  state = {
    showIndex: this.props.showIndex || 0,
    scroll: true,
    slowScroll: true,
    widthBig: __CLIENT__ && window.innerWidth >= showingWidth
  }

  getSideMenu(showIndex){
    const hashLinks = sectionsNames.map((name, i) => (
      <div
        key={name}
        className={cn('side-menu-item')}
        onClick={() => this.handleSideMenu({showIndex:i})}
      >
        <div className={cn('dot', {selected: showIndex === i})}/>
      </div>
    ))
    return(
      <aside className={cn('side-menu')}>
        {hashLinks}
      </aside>
    )
  }

  handleSideMenu = ({showIndex, ...extra}) => {
    const {setTheme} = this.props
    this.setState({showIndex, ...extra})
    if(dark.includes(sectionsNames[showIndex])){
      setTheme('dark')
    }else{
      setTheme('bright')
    }
  }

  handleWeel = ({deltaY}) => {
    const {showIndex: oldIndex, slowScroll} = this.state
    if(!slowScroll && Math.abs(deltaY) < 500) return;

    const showIndex = deltaY > 0 ? oldIndex + 1: oldIndex - 1
    setTimeout(() => this.setState({scroll: true}), 400);
    setTimeout(() => this.setState({slowScroll: true}), 600);

    if(showIndex >= 0 && showIndex < sectionsNames.length){
      this.handleSideMenu({showIndex, scroll:false, slowScroll: false})
    }

  }
  componentDidMount(){
    window.addEventListener("resize", this.getWidth);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.getWidth)
  }

  getWidth = () => {
    const
      widthBig = window.innerWidth >= showingWidth,
      shorter = this.state.widthBig && !widthBig,
      bigger = !this.state.widthBig && widthBig

    if(shorter || bigger){
      this.setState({widthBig})
    }
  }

  getPositionY(showIndex){
    if(showIndex === sectionsNames.length -1){
      return(
        ((showIndex-1) * 100) + 50
      )
    }else{
      return showIndex * 100
    }
  }

  render() {
    const {showIndex, scroll, widthBig} = this.state

    const sideMenu = this.getSideMenu(showIndex)
    const controlledScroll =  !isMobile.any && widthBig
    const positionY = controlledScroll ? this.getPositionY(showIndex) : 0

    const onWheel = (scroll && controlledScroll) ? this.handleWeel : undefined

    return (
      <div
        className={cn({scroll: !controlledScroll})}
        onWheel = {onWheel}
      >
        <div
        className={cn('inner')}
        style={{transform: `translate3d(0, ${-positionY}vh, 0px`}}
        >
          {sectionsNames.map(name => sectionsObj[name])}
        </div>
        {isMobile.any || sideMenu}
      </div>
    )
  }
}

Home.propTypes = {
};

Home.defaultProps = {
}



export default Home