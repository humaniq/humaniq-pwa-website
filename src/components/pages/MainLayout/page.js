import React, { Component } from 'react'
import * as T from 'prop-types'
import './styles.scss'
import Header from './Header'
import Sidebar from './Sidebar'
import MobileMenu from './MobileMenu'
import O_Popup from 'O_Popup_H'
import { cssClassName } from 'utils'
const cn = cssClassName('SE_MainLayout_H')
import O_Footer_H from 'O_Footer_H'
import PeopleModal from './PeopleModal'

class SE_MainLayout_H extends Component {
  state = {
    headerLinks: ['Humaniq Wiki', 'HMQ Explorer', 'Challenge', 'Ambassadors'],
    sidebarLinks: ['Open source', 'Contact us', 'Subscribe'],
  }

  render() {
    const { headerLinks, sidebarLinks } = this.state
    const {
      children,
      popupType,
      theme,
      isPopupOpened,
      closePopup,
      openRoute,
      openPopup,
      isMenuOpened,
      toggleMenu,
      isPeopleModalOpened,
      closePeopleModal,
      personData,
    } = this.props
    const homePage = openRoute.length === 0 //home page
    const mobileMenuLinks = [...headerLinks, ...sidebarLinks]

    return (
      <div className={cn()}>
        <MobileMenu
          mix={cn('mobile-menu')}
          menuLinks={mobileMenuLinks}
          toggleMenu={toggleMenu}
          mobileMenuIsActive={isMenuOpened}
        />

        <Header
          mix={cn('header', { sticky: homePage })}
          mobileMenuIsActive={isMenuOpened}
          toggleMobileMenu={toggleMenu}
          theme={theme}
          sticky={homePage}
          openRoute={openRoute}
        />

        <div className={cn('body')}>{children}</div>
        {homePage || (
          <O_Footer_H
            mix="home__section home__section_type_half-height"
            openPopup={this.props.openPopup}
          />
        )}

        <Sidebar mix={cn('sidebar')} menuLinks={sidebarLinks} theme={theme} openPopup={openPopup} />
        <PeopleModal isActive={isPeopleModalOpened} closeModal={closePeopleModal} personData={personData}/>
        <O_Popup isActive={isPopupOpened} closePopup={closePopup} popupType={popupType} />
      </div>
    )
  }
}

SE_MainLayout_H.propTypes = {
  children: T.any.isRequired,
}

export default SE_MainLayout_H
