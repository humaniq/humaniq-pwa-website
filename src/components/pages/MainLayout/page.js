import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import Header from './Header'
import Sidebar from './Sidebar'
import MobileMenu from './MobileMenu'
import O_Popup from './../../h_widgets/O_Popup_H'
import {cssClassName} from 'utils'
const cn = cssClassName('SE_MainLayout_H')

class SE_MainLayout_H extends Component {

  state = {
    headerLinks: ['Humaniq Wiki', 'HMQ Explorer', 'Challenge', 'Ambassadors' ],
    sidebarLinks: ['Open source', 'Contact us', 'Subscribe'],
    mobileMenuIsActive: false
  }

  toggleMobileMenu = () => {
    this.setState({mobileMenuIsActive: !this.state.mobileMenuIsActive})
  }

  render() {
    const { headerLinks, sidebarLinks, mobileMenuIsActive } = this.state
    const { children, popupType, theme, isPopupOpened, closePopup} = this.props

    const mobileMenuLinks = [...headerLinks, ...sidebarLinks]

    return (
      <div className = {cn()}>
        <MobileMenu
          mix = {cn('mobile-menu')}
          menuLinks = {mobileMenuLinks}
          mobileMenuIsActive = {mobileMenuIsActive}
        />

        <Header
          mix = {cn('header')}
          menuLinks = {headerLinks}
          mobileMenuIsActive = {mobileMenuIsActive}
          toggleMobileMenu = {this.toggleMobileMenu}
          theme = {theme}
        />

        <div className = {cn('body')}>
          {children}
        </div>

        <Sidebar
          mix = {cn('sidebar')}
          menuLinks = {sidebarLinks}
          theme = {theme}
        />

        <O_Popup
          isActive = {isPopupOpened}
          closePopup = {closePopup}
          popupType = {popupType}
        />
      </div>
    )
  }
}


SE_MainLayout_H.propTypes = {
  children: T.any.isRequired,
};

export default SE_MainLayout_H
