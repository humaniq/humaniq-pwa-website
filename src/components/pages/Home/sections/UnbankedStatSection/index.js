import React from 'react'
import * as T from 'prop-types'
import SectionCounter from '../common/SectionCounter/index.js'
import './styles.scss'
import { cssClassName } from 'utils'

const cn = cssClassName('SE_Home_UnbankedStat')

const SE_Home_UnbankedStat = ({ mix }) => (
  <section className={cn([mix])}>
    <div className={cn('left-side')}>
      <div className={cn('map')} />
    </div>

    <div className={cn('right-side')}>
      <p className={cn('text')}>
        According to the World Bank's Global<br /> Financial Inclusion Database, there are<br />{' '}
        currently 1.7 billion people on Earth<br /> who do not have access to official<br />{' '}
        financial services
      </p>
      <div className={cn('stat-circle')}>
        <div className={cn('stat-circle-percentage')}>31%</div>
        <div className={cn('stat-circle-text')}>
          About 1.7<br />billion adults
        </div>
      </div>
    </div>

    <SectionCounter mix={cn('counter')} sectionNum={3} theme="bright" />
  </section>
)

export default SE_Home_UnbankedStat

SE_Home_UnbankedStat.propTypes = {
  mix: T.string, //BEM mixin from parent block
}
