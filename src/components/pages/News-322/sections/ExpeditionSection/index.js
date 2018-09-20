import React from 'react'
import A_Title_H from 'A_Title_H'
import A_Btn_H from 'A_Btn_H'
import SectionCounter from '../common/SectionCounter/index.js'
import InfoColumns from '../common/InfoColumns'
import './styles.scss'
import { cssClassName } from 'utils'

const cn = cssClassName('SE_Home_Expedition')

const SE_Home_Expedition = ({ mix }) => (
  <section className={cn([mix])}>
    <div className={cn('content')}>
      <A_Title_H mix={cn('title')} type="section" theme="dark">
        Humaniq expedition: the first<br /> step in financial inclusion
      </A_Title_H>

      <InfoColumns mix={cn('info-columns')} columns={infoColumns} type="narrow" />

      <div className={cn('button')}>
        <A_Btn_H to="http://humaniqchallenge.com">About expedition</A_Btn_H>
      </div>
    </div>
    <SectionCounter sectionNum={11} theme="bright" />
  </section>
)

export default SE_Home_Expedition

const infoColumns = [
  {
    title: 'Startup contest',
    text:
      'In order to bring together a network of like-minded individuals and then choose 10 projects for entry into the Humaniq system, we are launching the Humaniq Global Challenge for entrepreneurs, developers, marketing specialists and economists.',
  },
  {
    title: 'Benefits',
    text:
      '10 Finalists will receive expert advice from top consultants in their field, as well as the chance to gain investment and to enter the Humaniq accelerator.',
  },
  {
    title: 'Trip to Kenya',
    text:
      'The three best teams will go on a trip to Kenya to learn more about the lives of the unbanked and put the finishing touches to their projects ahead of an ICO, which will be supported by Humaniq.',
  },
]
