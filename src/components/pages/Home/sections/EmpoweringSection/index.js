import React from 'react'
import * as T from 'prop-types'
import A_Title from 'A_Title_H'
import SectionCounter from '../common/SectionCounter/index.js'
import './styles.scss'
import { cssClassName } from 'utils'
//import A_Image from 'A_Image'
const cn = cssClassName('SE_Home_Empowering')

const formatUserNum = (users) => {
  let usersD = users.toString();
  usersD = usersD.slice(0,usersD.length-3) + "  " + usersD.slice(usersD.length-3);
  return usersD
}

const SE_Home_Empowering = ({ mix, users_number }) => (
  <section className={cn([mix])}>
    <div className={cn('left-side')}>
      <div className={cn('map')}>
        <div className={cn('map-img-div')}>
        <img
          className={cn('map-img', { type: 'desktop' })}
          src="/img/v1/home/africa-map-desktop.jpg"
          alt="EMPOWERING THE UNBANKED"
        />
        <img
          className={cn('map-img', { type: 'mobile' })}
          src="/img/v1/home/africa-map-mobile.jpg"
          alt="EMPOWERING THE UNBANKED"
        />
        <div className={cn('point', { number: 1 })}>
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className={cn('point', { number: 2 })}>
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className={cn('point', { number: 3 })}>
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className={cn('point', { number: 4 })}>
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className={cn('point', { number: 5 })}>
          <span />
          <span />
          <span />
          <span />
        </div>
        </div>
      </div>
    </div>

    <div className={cn('right-side')}>
      <div className={cn('report-link')}>
         <a className={cn('report-link-a')} href="/report-2018">Annual Report 2018</a>
      </div>

      <div className={cn('text')}>
        <img src="/humaniq_logo.svg" />
        <A_Title type="hero" mix={cn('text-title')} theme="bright">
          Humaniq Care is a charity and fundraising platform<br />built around our application and infrastructure
        </A_Title>
        <p className={cn('text-subtitle')}>
          <a className={cn('text-hmqcarebtn')} href="http://care.humaniq.com" target="_blank">Check it out!</a>
        </p>
      </div>
    </div>
    <p className={cn('hmq-description')}>      
    </p>


    {/*<div className={cn('members')}>*/}
      {/*<div className={cn('members-number')}>505  528</div>*/}
      {/*<p className={cn('members-text')}>people have already joined HMQ<br /> in 46 countries</p>*/}
    {/*</div>*/}

    <SectionCounter sectionNum={1} theme="dark" />
  </section>
)

export default SE_Home_Empowering

SE_Home_Empowering.propTypes = {
  mix: T.string, //BEM mixin from parent block
}

//.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')