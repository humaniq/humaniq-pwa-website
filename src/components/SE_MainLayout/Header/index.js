import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_MainLayoutHeader')
import A_Link from 'A_Link'
import A_logo from 'A_Logo'
import MenuBtn from './menuBtn'
import {Motion, spring} from 'react-motion';
import A_Container from 'A_Container'

const main = [{
  url: '/contacts',
  name: 'Contact Us'
}]

const extra = {
  url: '/subcribe',
  name: 'Subscribe'
}


class SE_MainLayoutHeader extends Component {

  getMainNav(mainNav, theme) {
    return mainNav.map(menuItem => this.getNavLink(menuItem, theme))
  }

  getNavLink({name, url}, theme) {
    return (
      <span className={cn('nav-btn')} key={'key=' + name} >
        <A_Link to={url} {...{type: (theme === 'dark' ? 'primary' : 'white')}}>{name}</A_Link>
      </span>
    )
  }

  render() {
    const {isMenuOpened: menuOpen, onClick, headerTheme} = this.props
    const theme = headerTheme === 'blue' ? 'light' : 'dark' //theme of inner elements
    const mainNav = this.getMainNav(main, theme)
    const extraNav = this.getNavLink(extra, theme)
    const slide = (this.navExtraNode && this.navExtraNode.clientWidth || 70)
    const max = 100;

    return (

            <header
              className={cn('root', {headerTheme})}
            >
              <A_Container type="wide">
                <div className={cn('inner', {menuOpen})}>
                  <div className={cn('logo')}>
                    <A_logo {...{theme}} />
                  </div>
                    <Motion
                      defaultStyle={{x: 0}}
                      style={{
                        x: spring(menuOpen ? max : 0),
                      }}
                    >
                      {({x}) => {
                        return (
                          <nav className={cn('nav')}>
                            <span
                              className={cn('nav-main')}
                              style={{
                                transform: `translate(${(slide / 100 * x)}px,0)`
                              }}
                            >{mainNav}
                            </span>
                            <span
                              className={cn('nav-extra')}
                              style={{
                                opacity: x === 0 ? 1 : (x === max ? 0 : 1 / x)
                              }}
                              ref={ node => this.navExtraNode = node}
                            >{extraNav}
                            </span>
                            <span className={cn('menu-btn')} onClick={() => onClick()}>
                              <MenuBtn {...{x, max, theme}}/>
                            </span>
                          </nav>
                        )
                      }}
                    </Motion>
                </div>
              </A_Container>
            </header>
    )
  }
}

SE_MainLayoutHeader.propTypes = {
  headerTheme: T.oneOf([
    'blue', // blue background, white buttons and logo
    'white', // white background, black buttons and logo
  ]).isRequired,
  isMenuOpened: T.bool.isRequired,
  onClick: T.func.isRequired
};

SE_MainLayoutHeader.defaultProps = {
  isMenuOpened: false,
}

export default SE_MainLayoutHeader
