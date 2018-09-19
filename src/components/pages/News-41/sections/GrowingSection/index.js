import React from 'react'
import A_Title from 'A_Title_H'
import SectionCounter from '../common/SectionCounter/index.js'
import './styles.scss'
import { cssClassName } from 'utils'

const cn = cssClassName('SE_Home_Growing')

const SE_Home_Growing = ({ mix }) => (
  <section className={cn([mix])}>
    <div className={cn('content')}>
      <A_Title mix={cn('title')} type="section" theme="bright">
        Humaniq's ever‑growing<br /> userbase is a blue ocean for<br /> thousands of new projects
      </A_Title>

      <div className={cn('columns-wrapper')}>
        <div className={cn('text-column')}>
          <div className={cn('text-column-top')}>
            1 <span>billion</span>
          </div>
          <div className={cn('text-column-bottom')}>
            new users in the<br /> coming years
          </div>
        </div>
        <div className={cn('text-column')}>
          <div className={cn('text-column-top')}>
            $4 <span>trillion</span>
          </div>
          <div className={cn('text-column-bottom')}>
            potentially in<br /> user accounts
          </div>
        </div>
        <div className={cn('text-column')}>
          <div className={cn('text-column-top')}>200+</div>
          <div className={cn('text-column-bottom')}>
            start-ups are planning<br /> to move onto the<br /> Humaniq platform
          </div>
        </div>
      </div>
    </div>
    <SectionCounter sectionNum={8} theme="dark" />
  </section>
)

export default SE_Home_Growing
