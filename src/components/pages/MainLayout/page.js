import React, { Component } from 'react'
import * as T from 'prop-types'
import './styles.scss'
import Header from './Header'
//import Sidebar from './Sidebar'
import MobileMenu from './MobileMenu2'
import O_Popup from 'O_Popup_H'
import { cssClassName } from 'utils'
const cn = cssClassName('SE_MainLayout_H')
import O_Footer_H from 'O_Footer_H'
import PeopleModal from './PeopleModal'
import TeleFooter from '../../widgets/TeleFooterSquare'
import axios from "axios/index";

class SE_MainLayout_H extends Component {
  state = {
    headerLinks: ['Humaniq Wiki', 'HMQ Explorer', 'Challenge', 'Ambassadors'],
    sidebarLinks: ['Open source', 'Contact us'],// 'Subscribe'],
    TelegaIsHidden: true,
    HMQCareIsHidden: false
  };

  TelegaIsHidden = true;
  HMQCareIsHidden = false;
  IntercomIsHidden = true;
  checkCompleted = false;
  switchCompleted = false;

  setCookie = (cname, cvalue, exdays) => {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  getCookie = (cname) => {
    const name = cname + "=";
    var ca = decodeURIComponent(document.cookie).split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  handleScroll = (e) => {
    if(this.switchCompleted ) return;
    //console.log(window.scrollY );
    if(window.scrollY > 300) {

      if(this.checkCompleted) {
        this.switchCompleted = true;

        if(this.getCookie("telegaHidden")) {
          this.TelegaIsHidden = true;
          if(!this.IntercomIsHidden) {
            if (window.innerWidth < 750) {
              window.Intercom("boot", {app_id: "y9l4iy41"})
            }
          }
        }

        this.setState({TelegaIsHidden: this.TelegaIsHidden});
        if(!this.IntercomIsHidden){
          if(window.innerWidth>749){
            window.Intercom("boot", {app_id: "y9l4iy41"})
          }
        }
        this.checkCompleted = false;
      }

    }
  }

  handleWheel = (e) => {
    if(this.switchCompleted ) return;
    //console.log(e.deltaY , window.scrollY );
    if(e.deltaY>=100){
      if(window.scrollY<=0) {

        if (this.checkCompleted) {
          this.switchCompleted = true;

          if(this.getCookie("telegaHidden")) {
            this.TelegaIsHidden = true;
            if(!this.IntercomIsHidden) {
              if (window.innerWidth < 750) {
                window.Intercom("boot", {app_id: "y9l4iy41"})
              }
            }
          }

          this.setState({TelegaIsHidden: this.TelegaIsHidden });
          if (!this.IntercomIsHidden) {
            if(window.innerWidth>749){
              window.Intercom("boot", {app_id: "y9l4iy41"})
            }
          }
          this.checkCompleted = false;
        }
      }
    }
  }

  hmqCareHide = (e) => {
    this.setCookie('hmqCareHidden', '1', 30);
    this.HMQCareIsHidden = true;
    this.setState({HMQCareIsHidden: this.HMQCareIsHidden });
  }

  componentDidMount() {
    axios.get("https://ipapi.co/json/")
            .then(res => {
              console.log(res.data.continent_code);
              if (res.data.continent_code != 'AF') {
                this.TelegaIsHidden = false;
                this.IntercomIsHidden = false;
                this.checkCompleted = true;
              }
            })
            .catch( error => {
            // handle error
              this.TelegaIsHidden = true;
              this.IntercomIsHidden = false;
              this.checkCompleted = true;
              console.log(error);
            });
    window.addEventListener('scroll', this.handleScroll);
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
    let homePage = openRoute.length === 0 //home page
    if( openRoute.length ){
      if(openRoute[0].search("news-")!==-1) homePage = true;
    }

    let hmqCareIsHidden = this.HMQCareIsHidden;

    if(homePage || (!this.HMQCareIsHidden && this.getCookie("hmqCareHidden"))) {
       hmqCareIsHidden = true;
    }

    const mobileMenuLinks = [...headerLinks, ...sidebarLinks]

    return (
      <div className={cn()} onWheel={this.handleWheel}>
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
          hmqCareIsHidden={hmqCareIsHidden}
          hmqCareHide={this.hmqCareHide}
        />
        { this.TelegaIsHidden ? "" : <TeleFooter/> }

        <div className={cn('body')}>{children}</div>
        {homePage || (
          <O_Footer_H
            mix="home__section home__section_type_half-height"
            openPopup={this.props.openPopup}
          />
        )}

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
