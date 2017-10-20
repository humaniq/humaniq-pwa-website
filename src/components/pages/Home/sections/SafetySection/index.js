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
    imageSrc: 'http://via.placeholder.com/70x74',
    title: 'Biometric identification',
    text: 'Users are verified by their face and voice, eliminating the need for formal documentation '
  } ,
  {
    imageSrc: 'http://via.placeholder.com/70x74',
    title: 'Independent HMQ currency',
    text: 'Every new user receives $20 worth of HMQ in their account, the value of which bears no relation to their local currency'
  },
  {
    imageSrc: 'http://via.placeholder.com/70x74',
    title: 'The interface is simple to interact with',
    text: 'Even for those who have never used gadgets before'
  }
]