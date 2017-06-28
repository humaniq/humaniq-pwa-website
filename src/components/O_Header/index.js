import React, { Component } from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Header')
import A_Link from 'A_Link'
import  A_ButtonLink from 'A_ButtonLink'
import A_logo from 'A_Logo'
// import A_Button from 'A_Button'
import ConnerBtn from './btn'
import {Motion, spring} from 'react-motion';

class O_Header extends Component {

  renderHeaderNav(navMenu){
    return navMenu.map( ({name, url, addClass, open}) => (
      <A_Link to={url} key={'key=' + name} open={open} addClassName={addClass}>{name}</A_Link>
    ))
  }

  isDarkTheme(url){
    const darkThemeUrls = ['cases']
    return darkThemeUrls.indexOf(url) > -1
  }

  render() {
    const {navMenu, page, onClick, menuOpen} = this.props
    const darkTheme = this.isDarkTheme(page)
    const headerNav = this.renderHeaderNav(navMenu)
    const slide = (this.navExtraNode && this.navExtraNode.clientWidth || 120) + 30
    const max = 100;

    return (
      <header className={cn({menuOpen, darkTheme})}>
        <Motion
          defaultStyle={{x: 0}}
          style={{
            x: spring(menuOpen ? max : 0),
          }}
        >
          {({x}) =>
            <div className="l-container-wide">
              <div className={cn('inner', {menuOpen})}>
                <A_logo theme={darkTheme}/>
                <nav className={cn('nav', {darkTheme})}>

                  <span
                    className={cn('nav-main')}
                    style={{
                      transform: `translate(${(slide/100 * x)}px,0)`
                    }}
                  >
                    {headerNav}
                  </span>

                  <span
                    className={cn('nav-extra')}
                    style={{
                      opacity: x===0 ? 1 : (x===max ? 0 : 1/x)
                    }}
                    ref = { node => this.navExtraNode = node}
                  >
                    <A_ButtonLink size="xs" color={"primary_dark_theme_" + darkTheme} to="/#">Subscribe</A_ButtonLink>
                  </span>
                  <span className={cn('connerBtn')}>
                    <ConnerBtn {...{onClick, menuOpen, x, max}}/>
                  </span>
                </nav>
              </div>
            </div>
          }
        </Motion>
      </header>
    )
  }
}

O_Header.propTypes = {
};

O_Header.defaultProps = {
}

export default O_Header
