import React from 'react'
import A_Title_H from 'A_Title_H'
import A_Btn_H from 'A_Btn_H'
import SectionCounter from '../common/SectionCounter/index.js'
import InfoColumns from '../common/InfoColumns'
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_Home_FirstMobile');


const SE_Home_FirstMobile = ({mix}) => (
  <section className={cn([mix])}>
    <div className={cn('content')}>
      <A_Title_H
        mix={cn('title')}
        type='section'
        theme='dark'
      >
        The first mobile service with<br/>the capacity to change the world
      </A_Title_H>
      <p className={cn('subtitle')}>Humaniq is a fourth generation mobile bank with its own<br/>cryptocurrency, which is bringing millions of unbanked<br/>people into one financial network</p>

      <InfoColumns
        mix={cn('info-columns')}
        columns={infoColumns}
        type='narrow'
      />

    </div>

    <SectionCounter
      sectionNum={2}
      theme='bright'
    />

    <A_Btn_H
      mix={cn('button')}
    >
      Project details
    </A_Btn_H>

  </section>
)

export default SE_Home_FirstMobile

const infoColumns = [
  {
    imageSrc: 'http://via.placeholder.com/70x74',
    title: 'For unbanked people',
    text: 'Humaniq opens up the benefits of financial inclusion and grants access to a series of financial services'
  } ,
  {
    imageSrc: 'http://via.placeholder.com/70x74',
    title: 'For businesses',
    text: 'Humaniq enables start-ups and projects to offer their services an audience of billions'
  }
]