import React from 'react'
import A_Title from 'A_Title_H'
import SectionCounter from '../common/SectionCounter/index.js'
import InfoColumns from '../common/InfoColumns'
import './styles.scss'
import { cssClassName } from 'utils'

const cn = cssClassName('SE_Home_WhatMakes')

const SE_Home_WhatMakes = ({ mix }) => (
  <section className={cn([mix])}>
    <img className={cn('background')} src="/img/design-v2/sections/common/head.svg" />
    <div className={cn('content')}>
      <A_Title mix={cn('title')} type="section" theme="dark">
        What makes Humaniq<br /> a big thing
      </A_Title>

      <InfoColumns mix={cn('info-columns')} columns={infoColumns} type="narrow" />
    </div>
    <SectionCounter sectionNum={5} theme="bright" />
  </section>
)

export default SE_Home_WhatMakes

const infoColumns = [
  {
    imageSrc: '/img/design-v2/icons/sections/connect-unbanked.svg',
    title: 'Connecting the unbanked',
    text:
      '10 years of research across Asia and Africa, carried out by the authors of Portfolios of the Poor, showed that poverty proliferates in regions whose inhabitants do not have access to financial services. Humaniq is becoming the simplest route to financial inclusion for billions of people.',
  },
  {
    imageSrc: '/img/design-v2/icons/sections/user-base-expo.svg',
    title: 'User base exponential growth',
    text:
      "According to Metcalfe's law, the value of a network is proportional to the square of the number of its users. For Humaniq, this means that the more unbanked people who join the system, the greater the motivation will be for other people to join.",
  },
]
