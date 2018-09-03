import React from 'react'
import * as T from 'prop-types'
import A_Title from 'A_Title_H'
import SectionCounter from '../common/SectionCounter/index.js'
import O_SimpleForm_H from '../../../../widgets/O_SimpleForm_H_2';
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
        <img
          className={cn('map-img', { type: 'desktop' })}
          src="/img/v1/home/map-bg.png"
          alt="EMPOWERING THE UNBANKED"
        />
        <img
          className={cn('map-img', { type: 'mobile' })}
          src="/img/v1/home/mobile-map.jpg"
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

    <div className={cn('right-side')}>
      <div className={cn('text')}>
        <A_Title type="hero" mix={cn('text-title')} theme="bright">
          Empowering<br /> the unbanked
        </A_Title>
        <p className={cn('text-subtitle')}>
          Self-deploying financial infrastructure:<br /> true hope for the unbanked, blue ocean<br className="d" /> for business
        </p>
        <div className={cn('subscribe')}>
            <O_SimpleForm_H formType="subscribe" />
        </div>
      </div>
    </div>

    <p className={cn('hmq-description')}>
      A project on a global scale, receiving<br /> support 10,000 contributors.
    </p>
    <div className={cn('members')}>
      <div className={cn('members-number')}>452  068</div>
      <p className={cn('members-text')}>people have already joined HMQ</p>
    </div>
    <SectionCounter sectionNum={1} theme="dark" />
  </section>
)

export default SE_Home_Empowering

SE_Home_Empowering.propTypes = {
  mix: T.string, //BEM mixin from parent block
}

//.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')