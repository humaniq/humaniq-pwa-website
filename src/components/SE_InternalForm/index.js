import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
import O_Stepper from 'O_Stepper';
const cn = cssClassName('SE_InternalForm');


class SE_InternalForm extends Component {


  render() {
    return (
      <div className={cn('flex')}>

        <header className={cn('header')}>
          <div className={cn('header-bg')}></div>
          <div className={cn('header-overflow')}>
            <div className={cn('header-content')}>
              <div className={cn('header-top')}>
                <div className={cn('header-stepper')}>
                  <O_Stepper />
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className={cn('outlet')}>
          <div className={cn('outlet-content')}>
            <form action="" className={cn('form')}>
              <div className={cn('form-wrap')}>
                <h2 className={cn('form-title')}>Let’s start by verifying your contact information.</h2>
                <fieldset className={cn('form-fieldset')}>
                  <div className={`${cn('form__row')} ${cn('')}`}> {/* add class form__row--invalid */}
                    <label className={cn('form__label')}>Phone</label>
                    <div className={cn('form__fields')}>
                      <input className={cn('form__input')} type="tel" placeholder="(123) 123-4567" />
                      <span className={cn('form__message')}>Your phone number is required.</span>
                    </div>
                  </div>
                  <div className={`${cn('form__row')} ${cn('')}`}> {/* add class form__row--invalid */}
                    <label className={cn('form__label')}>Email</label>
                    <div className={cn('form__fields')}>
                      <input className={cn('form__input')} type="email" placeholder="me@example.com" />
                      <span className={cn('form__message')}>Your email is required.</span>
                    </div>
                  </div>
                </fieldset>
                <div className={cn('form-footer')}>
                  <button className={cn('form-bt')}>
                    <span className={cn('form-bt-span')}>Continue</span>
                  </button>
                </div>
                <footer className={cn('footer-mobile')}>
                  <ul>
                    <li className={cn('footer-mobile__title')}>Powered by Stripe</li>
                    <li className={cn('footer-mobile__text')}>Thousands of companies trust Stripe to send payments across the globe to users like you.</li>
                    <li className={cn('footer-mobile__text')}>
                      <a href="#" className={cn('footer-mobile__a')}>Privacy Policy</a>
                      <a href="#" className={cn('footer-mobile__a')}>Contact Us</a>
                    </li>
                  </ul>
                </footer>
              </div>
            </form>
          </div>
        </section>

        <footer className={cn('footer')}></footer>

      </div>
    )
  }
}


SE_InternalForm.propTypes = {};

export default SE_InternalForm