import React, {Component} from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Header')
import A_Link from 'A_Link'
import  A_ButtonLink from 'A_ButtonLink'
import A_logo from 'A_Logo'
import ConnerBtn from './btn'
import {Motion, spring} from 'react-motion';

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
              <div className="l-container-wide">
                <div className={cn('inner', {menuOpen})}>
                  <A_logo darkTheme={darkThemeLogo}/>
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
                    <A_ButtonLink size="xs" color={"primary_dark_theme_" + darkThemeLogo}
                                  to="/#">Subscribe</A_ButtonLink>
                  </span>
                    <span className={cn('nav-extra-mobile')}>
                    <A_ButtonLink size="xs" color={"primary_dark_theme_" + darkThemeLogo}
                                  to="/#">Subscribe</A_ButtonLink>
                  </span>
                    <span className={cn('connerBtn')}>
                    <ConnerBtn {...{onClick, x, max, darkTheme: darkThemeLogo}}/>
                  </span>
                  </nav>
                </div>
              </div>
            </header>)
        }}
      </Motion>
    )
  }
}

O_Header.propTypes = {};

O_Header.defaultProps = {}

export default O_Header
