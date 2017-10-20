import React from 'react'
import * as T from "prop-types";
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_MainLayout_MobileMenu');

const _getMenuLinks = (links) => (
  links.map(link => (
    <li
      className={cn('links-link')}
      key={`${link}-mobile-menu-link`}
    >
      {link}
    </li>
  ))
)

const SE_MainLayout_MobileMenu = ({mix, menuLinks, mobileMenuIsActive}) => (
  <nav className={cn([mix], {isActive: mobileMenuIsActive})}>
    <ul className={cn('links')}>
      {_getMenuLinks(menuLinks)}
    </ul>
  </nav>
)

export default SE_MainLayout_MobileMenu

SE_MainLayout_MobileMenu.propTypes = {
  menuLinks: T.array.isRequired, //links for mobile menu
};