import React, {Component} from 'react'
import * as T from "prop-types";
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_MainLayoutSidebar')

class SE_MainLayoutSidebar extends Component {

  _getMenuLinks = (links) => (
    links.map(link => (
      <li
        className={cn('menu-link')}
        key={`${link}-menu-link`}
      >
        {link}
      </li>
    ))
  )

  render() {
    const {mix, menuLinks, theme} = this.props
    return (
      <nav
        className={cn([mix])}
      >
        <div className={cn('angle',{theme})} />
        <ul className={cn('menu')}>
          {this._getMenuLinks(menuLinks)}
        </ul>
      </nav>
    )
  }
}

export default SE_MainLayoutSidebar

SE_MainLayoutSidebar.propTypes = {
  mix: T.string, //BEM mixin from parent block
  menuLinks: T.array.isRequired, //links for sidebar menu
  theme: T.oneOf([
    'dark', // black angle
    'bright', // white angle
  ])
};

SE_MainLayoutSidebar.defaultProps = {
  theme: 'bright',
};