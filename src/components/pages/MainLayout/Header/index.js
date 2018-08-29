import React from 'react'
import * as T from 'prop-types'
import './styles.scss'
import A_Logo_H from 'A_Logo_H'
import A_BurgerBtn_H from './BurgerBtn2'
import { cssClassName } from 'utils'
import { Link } from 'react-router'

const cn = cssClassName('SE_MainLayoutHeader_H')

const SE_MainLayoutHeader_H = ({ mix, theme, mobileMenuIsActive, toggleMobileMenu, sticky }) => (
  <header className={cn([mix], { 'mob-menu-open': mobileMenuIsActive })}>
    <Link className={cn('logo')} to="/">
      <A_Logo_H  />
    </Link>

    <ul className={cn('menu', { sticky })}>
      {/*<li className={cn('menu-link')}>*/}
        {/*<Link to="/hmq-explorer">HMQ Explorer</Link>*/}
      {/*</li>*/}
      <li className={cn('menu-link')}>
        <Link to="/ambassadors">Ambassadors</Link>
      </li>
      <li className={cn('menu-link')}>
        <a href="http://humaniqchallenge.com" target="_blank">
          Challenge
        </a>
      </li>
      <li className={cn('menu-link')}>
        <a href="https://blog.humaniq.co/" target="_blank">
          Blog
        </a>
      </li>
      <li className={cn('menu-link')}>
          <Link to="/open-source">Open source</Link>
      </li>
        <li className={cn('menu-link')}>
            <Link to="/contact-us">Contact us</Link>
        </li>
        <Link  className={cn('menu-link')+" jointele"} to="https://t.me/HumaniqNews" target={"_blank"}>JOIN OUR TELEGRAM</Link>
    </ul>

    <A_BurgerBtn_H mix={cn('menu-btn')} onClick={toggleMobileMenu} isActive={mobileMenuIsActive} />
  </header>
)

export default SE_MainLayoutHeader_H

SE_MainLayoutHeader_H.propTypes = {
  mix: T.string, //BEM mixin from parent block
  toggleMobileMenu: T.func.isRequired, //
}
