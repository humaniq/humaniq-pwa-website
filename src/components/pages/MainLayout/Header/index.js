import React from 'react'
import * as T from "prop-types";
import './styles.scss'
import A_Logo_H from 'A_Logo_H'
import A_BurgerBtn_H from './BurgerBtn'
import {cssClassName} from 'utils'

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

const SE_MainLayoutHeader_H = ({mix, menuLinks, mobileMenuIsActive, toggleMobileMenu}) => (
  <header
    className={cn([mix])}
  >
    <a
      className={cn('logo')}
      href="#"
    >
      <A_Logo_H theme='bright'/>
    </a>

    <ul className={cn('menu')}>
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