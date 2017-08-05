import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'
const cn = cssClassName('SE_ContactUs');
import A_H from 'A_H';
import A_P from 'A_P';
import A_Link from 'A_Link';

class SE_ContactUs extends Component {

  render() {
    return (
      <div>
        <A_Container type='equal'>
          <div className={cn('contactus')}>

            <A_Container type='section-hmq'>
              <div className={cn('contactus-header')}>
                <div className={cn('contactus-header-image')}>
                  <img src="/img/contactus/contact-us-160-px.svg" />
                </div>
                <div className={cn('contactus-header-description')}>
                  <A_H type='hero'>Contact Humaniq</A_H>
                  <A_P type='hero'>Humaniq is proud of its wide partnership network which includes everybody from fintech companies and Blockchain communities to publishing media and app developers.</A_P>
                </div>
              </div>
            </A_Container>

            <section className={cn('support')}>
              <A_H type='section'>Customer Support</A_H>
              <A_P type='third'>For any questions you may have please contact:</A_P>
              <A_Link to="mailto:info@humaniq.com" type='primary' external>info@humaniq.com</A_Link>
            </section>

            <section className={cn('policy')}>
              <A_H type='section'>Questions regarding Privacy Policy</A_H>
              <A_P type='third'>If you have any questions regarding our user or data Privacy Policy, please <A_Link to="mailto:info@humaniq.com" type='primary' external>reach out to us.</A_Link></A_P>
            </section>


            <section className={cn('partnerships')}>
              <A_H type='section'>Partnerships</A_H>
              <A_P type='third'>For any inquires regarding partnerships, please <A_Link to="/form/join" type='primary'>fill out this form.</A_Link></A_P>
            </section>

            <section className={cn('program')}>
              <A_H type='section'>Ambassador’s Program</A_H>
              <A_P type='third'>If you want to become a part of Humaniq’s Global Initiative Program, please <A_Link to="/form/ambassadors" type='primary'>fill out this form.</A_Link></A_P>
            </section>

            <section className={cn('office')}>
              <A_H type='section'>Humaniq’s Legal Office</A_H>
              <A_P type='third'>Humaniq LLC.</A_P>
              <ul className={cn('address')}>
                <li>25C, Boulevard Royal</li>
                <li>Luxembourg, L-2449</li>
                <li>Luxembourg</li>
              </ul>
            </section>

          </div>
        </A_Container>
      </div>
    )
  }
}


export default SE_ContactUs;
