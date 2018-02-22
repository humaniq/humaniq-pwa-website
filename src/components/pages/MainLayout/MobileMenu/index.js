import React from 'react'
import * as T from 'prop-types'
import './styles.scss'
import { cssClassName } from 'utils'
import { Link } from 'react-router'
const cn = cssClassName('SE_MainLayout_MobileMenu')
const socialIcons = `/img/design-v2/icons/social/sprite.svg`

const SE_MainLayout_MobileMenu = ({ mix, mobileMenuIsActive }) => (
  <nav className={cn([mix], { isActive: mobileMenuIsActive })}>
    <ul className={cn('links')}>
      <li className={cn('links-link')}>
        <Link to="/hmq-explorer">HMQ Explorer</Link>
      </li>
      <li className={cn('links-link')}>
        <Link to="/ambassadors">Ambassadors</Link>
      </li>
      <li className={cn('links-link')}>
        <a href="http://humaniqchallenge.com" target="_blank">
          Challenge
        </a>
      </li>
      <li className={cn('links-link')}>
        <Link to="/wiki">wiki</Link>
      </li>
      <li className={cn('links-link')}>
        <Link to="/open-source">Open source</Link>
      </li>
      <li className={cn('links-link')}>
        <Link to="/contact-us">Contact us</Link>
      </li>
      <li className={cn('links-link')}>
        <a href="https://t.me/HumaniqNews" target="_blank">
          <svg><use xlinkHref={`${socialIcons}#telegram`} /></svg>
        </a>
      </li>
    </ul>
  </nav>
)

export default SE_MainLayout_MobileMenu

SE_MainLayout_MobileMenu.propTypes = {
  menuLinks: T.array.isRequired, //links for mobile menu
}
