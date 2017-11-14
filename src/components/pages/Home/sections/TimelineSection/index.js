import React from 'react'
import A_Title from 'A_Title_H'
import SectionCounter from '../common/SectionCounter/index.js'
import './styles.scss'
import { cssClassName } from 'utils'

const cn = cssClassName('SE_Home_Timeline')

const _getTimelines = timelines =>
  timelines.map(({ date, event }, index) => (
    <li key={`timeline-event-${index + 1}`} className={cn('event')}>
      <h4 className={cn('event-date')}>{date}</h4>
      <p className={cn('event-descr')}>{event}</p>
    </li>
  ))

const SE_Home_Timeline = ({ mix }) => (
  <section className={cn([mix])}>
    <div className={cn('content')}>
      <A_Title mix={cn('title')} type="section" theme="bright">
        Project timeline
      </A_Title>

      <ul className={cn('event-list')}>{_getTimelines(timelineEvents)}</ul>
    </div>
    <SectionCounter sectionNum={12} theme="dark" />
  </section>
)

export default SE_Home_Timeline

const timelineEvents = [
  {
    date: 'September 2017',
    event: 'The Challenge is live',
  },
  {
    date: 'September 2017',
    event: 'Release of Humaniq 1.0',
  },
  {
    date: 'September 2017',
    event: 'Launch of the Humaniq accelerator',
  },
  {
    date: 'October 2017',
    event: 'Humaniq Expedition',
  },
  {
    date: 'November 2017',
    event: 'Launch of the first three projects',
  },
  {
    date: 'December 2017',
    event: 'Release of Humaniq 2.0',
  },
]
