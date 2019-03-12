import React from 'react'
import * as T from 'prop-types'
import './styles.scss'
import A_Logo_H from 'A_Logo_H'
import A_BurgerBtn_H from './BurgerBtn2'
import { cssClassName } from 'utils'
import { Link } from 'react-router'

const cn = cssClassName('SE_MainLayoutHeader_H')

const SE_MainLayoutHeader_H = ({ mix, theme, mobileMenuIsActive, toggleMobileMenu, sticky, hmqCareIsHidden, hmqCareHide }) => (
  <header className={cn([mix], { 'mob-menu-open': mobileMenuIsActive })}>

    <div className={cn('hcare-bar', { 'is-hidden': hmqCareIsHidden })}>
      Humaniq Care charity platform is live, <a href="https://humaniq.com" target="_blank" style={{'textDecoration':'underline'}}>check it out here!</a>

      <div className="close" onClick={hmqCareHide}>
         <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-0.5" x2="25" y2="-0.5" transform="translate(0 1) rotate(45)" stroke="#ACACAC"/>
            <line y1="-0.5" x2="25" y2="-0.5" transform="translate(17.6777 1) rotate(135)" stroke="#ACACAC"/>
         </svg>
      </div>

    </div>

    <div className={cn('header-content')}>
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
            <Link to="/exchange">Exchange</Link>
        </li>
        <li className={cn('menu-link')}>
            <Link to="/contact-us">Contact us</Link>
        </li>
        <Link  className={cn('menu-link')+" jointele"} to="https://t.me/humaniq_com" target={"_blank"}>JOIN OUR TELEGRAM</Link>
      </ul>

      <A_BurgerBtn_H mix={cn('menu-btn')} onClick={toggleMobileMenu} isActive={mobileMenuIsActive} />
    </div>
  </header>
)

export default SE_MainLayoutHeader_H

SE_MainLayoutHeader_H.propTypes = {
  mix: T.string, //BEM mixin from parent block
  toggleMobileMenu: T.func.isRequired, //
}
