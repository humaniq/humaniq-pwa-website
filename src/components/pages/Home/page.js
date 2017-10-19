import React, { Component } from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Home')
// import Meta from './meta.js'
import {isMobile} from 'utils/isMobile'

const sectionsNames = [
  'intro',
  'project',
  'situation',
  'changes',
  // 'platform',
  // 'perspective',
  // 'opportunities',
  // 'use cases',
  // 'challenge',
  // 'expedition',
  // 'timeline',
  // 'team',
  // 'press',
  // 'extra'
]


const sectionsObj = {
  'intro': <div className={cn('section', {bg:'blue'})} key='intro'>text intro</div>,
  'project': <div className={cn('section')}  key='project'>text project</div>,
  'situation': <div className={cn('section', {bg:'blue'})}  key='situation'>text situation</div>,
  'changes': <div className={cn('section')}  key='changes'> changes</div>,

}

class Home extends Component {

  state = {
    showIndex: this.props.showIndex || 0,
    scroll: true,
    slowScroll: true
  }

  // on(){
  //   window.onscroll = window.ontouchmove = window.onwheel = () => true
  // }
  //
  // off(){
  //   window.onscroll = window.ontouchmove = window.onwheel = (e) => { e.preventDefault(); }
  // }

  getSideMenu(showIndex){
    const hashLinks = sectionsNames.map((name, i) => (
      <div
        key={name}
        className={cn('side-menu-item')}
        onClick={() => this.setState({showIndex:i})}
      >
        <div className={cn('dot', {selected: showIndex === i})}/>
        <span className={cn('text')}>{name}</span>
      </div>
    ))
    return(
      <aside className={cn('side-menu')}>
        {hashLinks}
      </aside>
    )
  }

  handleWeel = ({deltaY}) => {
    const {showIndex: oldIndex, slowScroll} = this.state
    console.log(deltaY)
    if(!slowScroll && Math.abs(deltaY) < 500) return;

    const showIndex = deltaY > 0 ? oldIndex + 1: oldIndex - 1
    setTimeout(() => this.setState({scroll: true}), 400);
    setTimeout(() => this.setState({slowScroll: true}), 600);

    if(showIndex >= 0 && showIndex < sectionsNames.length){
      this.setState({showIndex, scroll:false, slowScroll: false})
    }

  }

  render() {
    const {showIndex, scroll} = this.state
    const positionY = showIndex * 100
    const sideMenu = this.getSideMenu(showIndex)
    const onWheel = (scroll && !isMobile.any) ? this.handleWeel : undefined

    return (
      <div
        className={cn({'is-mobile': isMobile.any})}
        onWheel = {onWheel}
      >
        <div
          className={cn('inner')}
          style={isMobile.any ? {} : {transform: `translate3d(0, ${-positionY}vh, 0px`}}
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