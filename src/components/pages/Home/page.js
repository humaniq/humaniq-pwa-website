import React, { Component } from 'react'
import * as T from "prop-types";
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('Home')
// import Meta from './meta.js'
import { isMobile } from 'utils/isMobile'
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
/*import TimelineSection from './sections/TimelineSection'*/
import WorldTalkingSection from './sections/WorldTalkingSection'
import TeamSection from './sections/TeamSection'

const serverNames = [
  'empowering',
  'mobile',
  'situation',
  'changes',
  'platform',
  'simplicity',
  'opportunities',
  'userbase',
  'use cases',
  'challenge',
  'expedition',
/*  'timeline',*/
  'press',
  'contacts',
]
const clientNames = [
  'empowering',
  'mobile',
  'situation',
  'changes',
  'platform',
  'simplicity',
  'opportunities',
  'userbase',
  'use cases',
  'challenge',
  'expedition',
/*  'timeline',*/
  'team',
  'press',
  'contacts',
]

const sectionsNames = __CLIENT__ ? clientNames : serverNames

const dark = ['mobile', 'situation', 'platform', 'opportunities', 'use cases', 'expedition', 'team']

const showingWidth = 1120

class Home extends Component {
  state = {
    showIndex: this.props.showIndex || 0,
    scroll: true,
    fastScroll: true,
    widthBig: __CLIENT__ && window.innerWidth >= showingWidth,
  }

  sectionsObj = {
    empowering: <EmpoweringSection mix={cn('section')} key="empowering" users_number={this.props.users_number} />,
    mobile: <FirstMobileSection mix={cn('section')} key="mobile" />,
    situation: <UnbankedStatSection mix={cn('section')} key="situation" />,
    changes: <QuotesSection mix={cn('section', { type: 'slider' })} key="changes" />,
    platform: <WhatMakesSection mix={cn('section')} key="platform" />,
    simplicity: <SafetySection mix={cn('section')} key="simplicity" />,
    opportunities: <OpportunitiesSection mix={cn('section')} key="opportunities" />,
    userbase: <GrowingSection mix={cn('section')} key="userbase" />,
    'use cases': <UseCasesSection mix={cn('section')} key="usecases" />,
    challenge: <GlobalChallengeSection mix={cn('section')} key="challenge" />,
    expedition: <ExpeditionSection mix={cn('section')} key="expedition" />,
    /*timeline: <TimelineSection mix={cn('section')} key="timeline" />,*/
    team: <TeamSection mix={cn('section')} key="team" />,
    press: <WorldTalkingSection mix={cn('section')} key="press" />,
    contacts: (
      <O_Footer_H
        mix={cn('section', { type: 'half-height' })}
        openPopup={this.props.openPopup}
        key="contacts"
      />
    ),
  }

  getSideMenu(showIndex) {
    const hashLinks = sectionsNames.map((name, i) => (
      <div
        key={name}
        className={cn('side-menu-item')}
        onClick={() => this.handleSideMenu({ showIndex: i })}
      >
        <div className={cn('dot', { selected: showIndex === i })} />
      </div>
    ))
    return <aside className={cn('side-menu')}>{hashLinks}</aside>
  }

  handleSideMenu = ({ showIndex, ...extra }) => {
    const { setTheme } = this.props
    this.setState({ showIndex, ...extra })
    if (dark.includes(sectionsNames[showIndex])) {
      setTheme('dark')
    } else {
      setTheme('bright')
    }
  }

  handleWeel = ({ deltaY }) => {
    const touchBar = deltaY - Math.round(deltaY) === 0

    if (touchBar) {
      this.handleTouchBar({ deltaY })
    } else {
      this.handleMouseWeel({ deltaY })
    }
  }

  handleTouchBar({ deltaY }) {
    const { showIndex: oldIndex, fastScroll } = this.state
    if (!fastScroll && Math.abs(deltaY) < 100) return
    const showIndex = deltaY > 0 ? oldIndex + 1 : oldIndex - 1
    setTimeout(() => this.setState({ scroll: true }), 400)
    setTimeout(() => this.setState({ fastScroll: true }), 1000)

    if (showIndex >= 0 && showIndex < sectionsNames.length) {
      this.handleSideMenu({ showIndex, scroll: false, fastScroll: false })
    }
  }

  _handleKeyPress({keyCode}) {
    const { showIndex: oldIndex} = this.state
    const
      nextCodes = [40, 34, 32, 39],
      prevCodes = [38, 33, 36, 37]
    if(nextCodes.includes(keyCode) && oldIndex < sectionsNames.length -1) {
      this.setState({ showIndex: oldIndex + 1})
    } else if(prevCodes.includes(keyCode) && oldIndex > 0) {
      this.setState({ showIndex: oldIndex - 1})
    }
  }

  handleMouseWeel({ deltaY }) {
    const { showIndex: oldIndex, fastScroll } = this.state
    if (!fastScroll && Math.abs(deltaY) < 900) return
    const showIndex = deltaY > 0 ? oldIndex + 1 : oldIndex - 1
    setTimeout(() => this.setState({ scroll: true }), 200)
    setTimeout(() => this.setState({ fastScroll: true }), 500)

    if (showIndex >= 0 && showIndex < sectionsNames.length) {
      this.handleSideMenu({ showIndex, scroll: false, fastScroll: false })
    }
  }

  handleScrollUp = () => {
    this.setState({ showIndex: 0 })
  }

  componentDidMount() {
    window.addEventListener('resize', this.getWidth)
    this.container.focus();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWidth)
  }

  getWidth = () => {
    const widthBig = window.innerWidth >= showingWidth,
      shorter = this.state.widthBig && !widthBig,
      bigger = !this.state.widthBig && widthBig

    if (shorter || bigger) {
      this.setState({ widthBig })
    }
  }

  getPositionY(showIndex) {
    if (showIndex === sectionsNames.length - 1) {
      return (showIndex - 1) * 100 + 50
    } else {
      return showIndex * 100
    }
  }

  render() {
    const { showIndex, scroll, widthBig } = this.state

    const sideMenu = this.getSideMenu(showIndex)
    const controlledScroll = !isMobile.any && widthBig
    const positionY = controlledScroll ? this.getPositionY(showIndex) : 0

    const onWheel = scroll && controlledScroll ? this.handleWeel : undefined

    return (
      <div
        className={cn({ scroll: !controlledScroll })}
        onWheel={onWheel}
        onKeyDown={(e) => this._handleKeyPress(e)}
        tabIndex='0'
        ref={el => {this.container = el}}
      >
        <div className={cn('inner')} style={{ transform: `translate3d(0, ${-positionY}vh, 0px` }}>
          {sectionsNames.map(name => this.sectionsObj[name])}
        </div>
        { isMobile.any || sideMenu }
        {showIndex > 0 && (<div className={cn('scroll-up')} onClick={this.handleScrollUp}/>)}
      </div>
    )
  }
}

Home.propTypes = {
  total_installations: T.number
}

Home.defaultProps = {}

export default Home
