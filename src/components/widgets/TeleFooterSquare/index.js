import React from 'react'
import * as T from 'prop-types'
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('TeleFooter')

class TeleFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    };
  }

  setCookie = (cname, cvalue, exdays) => {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  toggleTelegramBar = e => {
    e.preventDefault();
    this.setState({isHidden: !this.state.isHidden});
    if(window.innerWidth<750){
      window.Intercom("boot", {app_id: "y9l4iy41"})
    }
  };

  handleLinkClick = e => {
    if(window.ga) window.ga('send', 'event', 'other', 'telegram-btn-click');
    if (window.fbq) window.fbq('trackCustom', 'telegramToolBarClick');
    this.setState({isHidden: !this.state.isHidden});
    if(window.innerWidth<750){
      window.Intercom("boot", {app_id: "y9l4iy41"})
    }
    this.setCookie("telegaHidden", 1, 100);
  };

  render() {
    return (
            <div className={cn('tele-footer', this.state.isHidden ? 'is-hidden' : '')}>
              <div className='tele-title'>Join Our Channel <br/>with Secret News</div>

                <a className="tele-button" href="https://t.me/hmqtalk" target="_blank" onClick={() => { this.handleLinkClick() }}>
                    Join our Telegram
                </a>

                <div className="close" onClick={this.toggleTelegramBar}>
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-0.5" x2="25" y2="-0.5" transform="translate(0 1) rotate(45)" stroke="#ffffff"/>
                        <line y1="-0.5" x2="25" y2="-0.5" transform="translate(17.6777 1) rotate(135)"
                              stroke="#ffffff"/>
                    </svg>
                </div>
            </div>
    );
  }
}

export default TeleFooter

TeleFooter.propTypes = {
  mix: T.string, //BEM mixin from parent block
}
