import React from 'react'
import A_Title_H from 'A_Title_H'
import M_SocialLinks_H from 'M_SocialLinks_H'
import SectionCounter from '../common/SectionCounter/index.js'
import InfoColumns from '../common/InfoColumns'
import './styles.scss'
import { cssClassName } from 'utils'

const cn = cssClassName('SE_Home_GlobalChallenge')

const SE_Home_GlobalChallenge = ({ mix }) => (
  <section className={cn([mix])}>
    <div className={cn('content')}>
      <A_Title_H mix={cn('title')} type="section" theme="bright">
        Humaniq global<br /> challenge
      </A_Title_H>

      <InfoColumns
        mix={cn('info-columns')}
        columns={infoColumns}
        type="narrow"
        layout="global-challenge"
      />
    </div>
    <SectionCounter sectionNum={11} theme="dark" />
  </section>
)

export default SE_Home_GlobalChallenge

const infoColumns = [
  {
    title: 'Life-changing technology',
    text:
      'Humaniq grew out of the idea that advanced technologies should benefit everybody. Now, we want to inspire developers from all over the world to come and join our movement.',
  },
  {
    title: 'Humanitarian impact',
    text:
      'Humaniq is not just a commercial project. It is a worldwide mission, aiming to give people in developing nations more power to change their lives.',
  },
]
