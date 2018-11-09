import React from 'react'
import * as T from 'prop-types'
import './styles.scss'
import {cssClassName} from 'utils'
import axios from 'axios';
import Intercom from "react-intercom";


const cn = cssClassName('TeleFooter')

class TeleFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
  }

  toggleTelegramBar = e => {
    e.preventDefault();
    this.setState({isHidden: !this.state.isHidden});
  };

  handleLinkClick = () => {
    if(window.ga) window.ga('send', 'event', 'other', 'telegram-btn-click');
    if (window.fbq) window.fbq('trackCustom', 'telegramToolBarClick');
  }

  componentDidMount() {
    axios.get("https://json.geoiplookup.io/")
            .then(res => {
              console.log(res.data);
              if (res.data.continent_code != 'AF') this.setState({isHidden: false});
            })
            .catch(function (error) {
                // handle error
              this.setState({isHidden: false});
              console.log(error);
            });
  }

  render() {
    return (
        <div>
        { this.state.isHidden ? ""
            :
            <div>
                <Intercom appID="y9l4iy41" />
                <!--
                <div className={cn('tele-footer', this.state.isHidden ? 'is-hidden' : '')}>
                    <a className="tele left" href="https://t.me/HMQtrader" target="_blank" onClick={() => { this.handleLinkClick() }}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                                fill="url(#paint0_linear)"/>
                            <path
                                d="M-1.55174e-07 5.91102L1.77966 10.8369C1.77966 10.8369 2.00212 11.297 2.23983 11.297C2.47754 11.297 6.02161 7.61059 6.02161 7.61059L9.96229 -1.55174e-07L0.0635592 4.63983L-1.55174e-07 5.91102Z"
                                transform="translate(10.1543 10.186)" fill="#C8DAEA"/>
                            <path
                                d="M0.347863 1.55174e-07L0.00591483 3.62669C0.00591483 3.62669 -0.136458 4.73898 0.97583 3.62669C2.08812 2.51441 3.1521 1.65636 3.1521 1.65636"
                                transform="translate(12.1655 17.3607)" fill="#A9C6D8"/>
                            <path
                                d="M3.98479 7.79426L0.325041 6.60189C0.325041 6.60189 -0.112246 6.42392 0.0275842 6.02223C0.0568215 5.93833 0.115296 5.86841 0.29072 5.74638C1.10174 5.1807 15.3034 0.0756164 15.3034 0.0756164C15.3034 0.0756164 15.7039 -0.0591302 15.939 0.0311241C15.9971 0.0490814 16.0494 0.082041 16.0907 0.126677C16.132 0.171314 16.1608 0.226048 16.1742 0.285361C16.1998 0.390986 16.2104 0.499661 16.206 0.608243C16.206 0.702311 16.1933 0.790022 16.1856 0.926039C16.0979 2.32434 13.5161 12.7379 13.5161 12.7379C13.5161 12.7379 13.3611 13.3468 12.8055 13.3735C12.6691 13.378 12.5332 13.355 12.4059 13.3058C12.2786 13.2567 12.1625 13.1824 12.0644 13.0875C10.975 12.1506 7.21233 9.62096 6.38097 9.06545C6.36222 9.05277 6.3464 9.03622 6.33456 9.01693C6.32272 8.99764 6.31514 8.97604 6.31233 8.95358C6.30089 8.89511 6.36445 8.82646 6.36445 8.82646C6.36445 8.82646 12.9174 3.00189 13.0916 2.39045C13.1055 2.34341 13.0547 2.31926 12.9861 2.3396C12.55 2.49977 5.00555 7.26545 4.17292 7.79045C4.11146 7.80704 4.04687 7.80835 3.98479 7.79426Z"
                                transform="translate(6.19727 8.47824)" fill="white"/>
                        </svg>
                    </a>
                    Join our community in&nbsp;
                    <a href="https://t.me/HMQtrader" target="_blank" onClick={() => { this.handleLinkClick() }}>
                        Telegram
                    </a>
                    <a className="tele right" href="https://t.me/HMQtrader" target="_blank" onClick={() => { this.handleLinkClick() }}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                                fill="url(#paint0_linear)"/>
                            <path
                                d="M-1.55174e-07 5.91102L1.77966 10.8369C1.77966 10.8369 2.00212 11.297 2.23983 11.297C2.47754 11.297 6.02161 7.61059 6.02161 7.61059L9.96229 -1.55174e-07L0.0635592 4.63983L-1.55174e-07 5.91102Z"
                                transform="translate(10.1543 10.186)" fill="#C8DAEA"/>
                            <path
                                d="M0.347863 1.55174e-07L0.00591483 3.62669C0.00591483 3.62669 -0.136458 4.73898 0.97583 3.62669C2.08812 2.51441 3.1521 1.65636 3.1521 1.65636"
                                transform="translate(12.1655 17.3607)" fill="#A9C6D8"/>
                            <path
                                d="M3.98479 7.79426L0.325041 6.60189C0.325041 6.60189 -0.112246 6.42392 0.0275842 6.02223C0.0568215 5.93833 0.115296 5.86841 0.29072 5.74638C1.10174 5.1807 15.3034 0.0756164 15.3034 0.0756164C15.3034 0.0756164 15.7039 -0.0591302 15.939 0.0311241C15.9971 0.0490814 16.0494 0.082041 16.0907 0.126677C16.132 0.171314 16.1608 0.226048 16.1742 0.285361C16.1998 0.390986 16.2104 0.499661 16.206 0.608243C16.206 0.702311 16.1933 0.790022 16.1856 0.926039C16.0979 2.32434 13.5161 12.7379 13.5161 12.7379C13.5161 12.7379 13.3611 13.3468 12.8055 13.3735C12.6691 13.378 12.5332 13.355 12.4059 13.3058C12.2786 13.2567 12.1625 13.1824 12.0644 13.0875C10.975 12.1506 7.21233 9.62096 6.38097 9.06545C6.36222 9.05277 6.3464 9.03622 6.33456 9.01693C6.32272 8.99764 6.31514 8.97604 6.31233 8.95358C6.30089 8.89511 6.36445 8.82646 6.36445 8.82646C6.36445 8.82646 12.9174 3.00189 13.0916 2.39045C13.1055 2.34341 13.0547 2.31926 12.9861 2.3396C12.55 2.49977 5.00555 7.26545 4.17292 7.79045C4.11146 7.80704 4.04687 7.80835 3.98479 7.79426Z"
                                transform="translate(6.19727 8.47824)" fill="white"/>
                        </svg>
                    </a>

                    <div className="close" onClick={this.toggleTelegramBar}>
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="-0.5" x2="25" y2="-0.5" transform="translate(0 1) rotate(45)" stroke="#ACACAC"/>
                            <line y1="-0.5" x2="25" y2="-0.5" transform="translate(17.6777 1) rotate(135)"
                                  stroke="#ACACAC"/>
                        </svg>
                    </div>
                </div>
                -->
            </div>
        }
        </div>
    );
  }
}

export default TeleFooter

TeleFooter.propTypes = {
  mix: T.string, //BEM mixin from parent block
}
