import React from 'react'
import A_Title from 'A_Title_H'
import SectionCounter from '../common/SectionCounter/index.js'
import InfoColumns from '../common/InfoColumns'
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_Home_Safety');

const SE_Home_Safety = ({mix}) => (
  <section className={cn([mix])}>
    <div className={cn('content')}>
      <A_Title
        mix={cn('title')}
        type='section'
        theme='bright'
      >
        Simplicity and safety for the unbanked
      </A_Title>

      <InfoColumns
        mix={cn('info-columns')}
        columns={infoColumns}
        type='narrow'
      />

    </div>
    <SectionCounter
      sectionNum={6}
      theme='dark'
    />
  </section>
)

export default SE_Home_Safety


const infoColumns = [
  {
    imageSrc: '/img/design-v2/icons/sections/card.svg',
    title: 'Biometric identification',
    text: 'Users are verified by their face and voice, eliminating the need for formal documentation '
  } ,
  {
    imageSrc: '/img/design-v2/icons/sections/access.svg',
    title: 'Independent HMQ currency',
    text: 'Every new user receives $20 worth of HMQ in their account, the value of which bears no relation to their local currency'
  },
  {
    imageSrc: '/img/design-v2/icons/sections/interface.svg',
    title: 'The interface is simple to interact with',
    text: 'Even for those who have never used gadgets before'
  }
]