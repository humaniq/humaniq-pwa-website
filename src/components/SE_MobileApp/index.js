import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('SE_MobileApp');
import A_Container from 'A_Container';
import A_GooglePlay from 'A_GooglePlay';
import A_H from 'A_H';
import A_P from 'A_P'

class MobileApp extends Component {

  render() {
    return (
      <div>

        <section className={cn('android')}>
          <A_Container type='wide'>
            <div className={cn('container')}>
              <div className={cn('description')}>
                <A_H type="android-white">Get Humaniq for Android</A_H>
                <A_P type="android-white">Transact, interact and socialize right from your android smartphone.</A_P>
                <A_GooglePlay />
              </div>
              <div className={cn('imgage')}>
                <img className={cn('img')} src="/img/mobile-app/download-app-desktop.png" alt=""/>
              </div>
            </div>
          </A_Container>
        </section>

        <section className={cn('reminder')}>
          <div className={cn('reminder-bg')}>
            <A_Container type='wide'>
              <div className={cn('card-form')}>
                <form action="" className={cn('form')}>
                  <A_H type="android-black">Humaniq Easy Reminder</A_H>
                  <A_P type="android-black">Send an email to your friends or yourself so that you can easily download Humaniq app from the Play Market.</A_P>
                  <input type="text"
                         label="Email"
                         placeholder="Enter your email"
                         className={cn('mail-input')}
                  />
                  <input type="submit"
                         value="Subscribe"
                         className={cn('subscribe-bt')}
                  />
                </form>
              </div>
            </A_Container>
          </div>
        </section>

      </div>
    )
  }

}

MobileApp.propTypes = {};

export default MobileApp