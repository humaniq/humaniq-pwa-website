import React, {Component} from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Header')
import A_Link from 'A_Link'
import NavBtn from './navBtn'
import A_logo from 'A_Logo'
import MenuBtn from './menuBtn'
import {Motion, spring} from 'react-motion';
import A_Container from 'A_Container'

class O_Header extends Component {

  state = {onTop: true}

  renderHeaderNav(navMenu) {
    return navMenu.map(({name, url, addClass, open}) => (
      <A_Link to={url} key={'key=' + name} open={open} addClassName={addClass}>{name}</A_Link>
    ))
  }

  componentDidMount() {
    __CLIENT__ && window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    __CLIENT__ && window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (this.state.onTop && (window.pageYOffset > 50)) {
      this.setState({onTop: false})
    } else if (!this.state.onTop && (window.pageYOffset < 50)) {
      this.setState({onTop: true})
    }
  }

  render() {
    const {navMenu, darkTheme, onClick, menuOpen} = this.props
    const {onTop} = this.state
    const sticky = !onTop
    const darkThemeLogo = darkTheme && !menuOpen && !sticky
    const headerNav = this.renderHeaderNav(navMenu)
    const slide = (this.navExtraNode && this.navExtraNode.clientWidth || 120) + 30
    const max = 100;
    return (
      <Motion
        defaultStyle={{x: 0, y: 0}}
        style={{
          x: spring(menuOpen ? max : 0),
          y: menuOpen ? 0 : spring((sticky ? max : 0), {stiffness: 300, damping: 40})
        }}
      >
        {({x, y}) => {
          const yy = y * 1.5
          const z = y < 50 ? 50 - (yy) : yy - 100
          const sticky = y > 50
          return (
            <header
              className={cn({menuOpen, darkTheme, sticky})}
              ref={node => this.node = node}
              style={{
                transform: `translate(0,${z - 50}px)`,
              }}
            >
              <A_Container wide>
                <div className={cn('inner', {menuOpen})}>
                  <div className={cn('logo')}>
                    <A_logo darkTheme={darkThemeLogo}/>

                  </div>
                  <nav className={cn('nav', {darkTheme: darkThemeLogo})}>
                  <span
                    className={cn('nav-main')}
                    style={{
                      transform: `translate(${(slide / 100 * x)}px,0)`
                    }}
                  >{headerNav}
                  </span>
                  <span
                    className={cn('nav-extra-desktop')}
                    style={{
                      opacity: x === 0 ? 1 : (x === max ? 0 : 1 / x)
                    }}
                    ref={ node => this.navExtraNode = node}
                  >
                    <NavBtn to="/#" dark={darkThemeLogo}>Subscribe</NavBtn>
                  </span>
                  <span className={cn('nav-extra-mobile')}>
                    <NavBtn to="/#" dark={darkThemeLogo}>Subscribe</NavBtn>
                  </span>
                  <span className={cn('menu-btn')}>
                    <MenuBtn {...{onClick, x, max, darkTheme: darkThemeLogo}}/>
                  </span>
                  </nav>
                </div>
              </A_Container>
            </header>)
        }}
      </Motion>
    )
  }
}

O_Header.propTypes = {};

O_Header.defaultProps = {}

export default O_Header
