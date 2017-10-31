import React from 'react'
import * as T from "prop-types";
import './styles.scss'
import A_Logo_H from 'A_Logo_H'
import A_BurgerBtn_H from './BurgerBtn'
import {cssClassName} from 'utils'
import {Link} from 'react-router'

const cn = cssClassName('SE_MainLayoutHeader_H')

const _getMenuLinks= (links) => (
  links.map(link => (
    <li
      className={cn('menu-link')}
      key={`${link}-menu-link`}
    >
      {link}
    </li>
  ))
)

const SE_MainLayoutHeader_H = ({mix, theme, menuLinks, mobileMenuIsActive, toggleMobileMenu, sticky}) => (
  <header
    className={cn([mix], {'mob-menu-open': mobileMenuIsActive})}
  >
    <Link
      className={cn('logo')}
      to="/"
    >
      <A_Logo_H theme={theme}/>
    </Link>

    <ul className={cn('menu', {sticky})}>
      {_getMenuLinks(menuLinks)}
    </ul>

    <A_BurgerBtn_H
      mix = {cn('menu-btn')}
      onClick = {toggleMobileMenu}
      isActive = {mobileMenuIsActive}
    />
  </header>
)

export default SE_MainLayoutHeader_H

SE_MainLayoutHeader_H.propTypes = {
  mix: T.string, //BEM mixin from parent block
  menuLinks: T.array.isRequired, //links for header menu
  toggleMobileMenu: T.func.isRequired, //
};