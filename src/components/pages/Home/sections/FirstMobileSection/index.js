import React from 'react'
import A_Title_H from 'A_Title_H'
import A_Btn_H from 'A_Btn_H'
import SectionCounter from '../common/SectionCounter/index.js'
import InfoColumns from '../common/InfoColumns'
import './styles.scss'
import { cssClassName } from 'utils'

const cn = cssClassName('SE_Home_FirstMobile')

const SE_Home_FirstMobile = ({ mix }) => (
  <section className={cn([mix])}>
    <div className={cn('content')}>
      <A_Title_H mix={cn('title')} type="section" theme="dark">
        The first mobile service with<br />the capacity to change the world
      </A_Title_H>
      <p className={cn('subtitle')}>
        Humaniq is a new generation financial services<br/> with its own cryptocurrency, which is aimed at<br/> eradicating poverty amongst millions of people<br/> living in the emerging economies
      </p>
      <div className={cn('columns-wrapper')}>
        <InfoColumns mix={cn('info-columns')} columns={infoColumns} type="narrow" />
        <div className={cn('button')}>
          <A_Btn_H to="/pdf/humaniq-whitepaper-05.09.pdf">Project details</A_Btn_H>
        </div>
      </div>
    </div>

    <SectionCounter sectionNum={2} theme="bright" />
  </section>
)

export default SE_Home_FirstMobile

const infoColumns = [
  {
    imageSrc: '/img/design-v2/icons/sections/key.svg',
    title: 'For the unbanked people',
    text:
      'Humaniq opens up the benefits of financial inclusion and grants access to a series of financial services',
  },
  {
    imageSrc: '/img/design-v2/icons/sections/busness.svg',
    title: 'For businesses',
    text:
      'Humaniq enables start-ups and projects to offer their services to an audience of billions',
  },
]
