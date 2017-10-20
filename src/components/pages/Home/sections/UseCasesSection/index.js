import React from 'react'
import A_Title from 'A_Title_H'
import SectionCounter from '../common/SectionCounter/index.js'
import InfoColumns from '../common/InfoColumns'
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_Home_UseCases');

const SE_Home_UseCases = ({mix}) => (
  <section className={cn([mix])}>
    <div className={cn('content')}>
      <A_Title
        mix={cn('title')}
        type='section'
        theme='dark'
      >
        Humaniq use cases
      </A_Title>

      <div className={cn('slider-wrap')}>
        <InfoColumns
          mix={cn('slider')}
          type='slider'
          columns={infoColumns}
        />
      </div>

    </div>
    <SectionCounter
      sectionNum={9}
      theme='bright'
    />
  </section>
)

export default SE_Home_UseCases

const infoColumns = [
  {
    title: 'Zero fee money transfers',
    text: 'Blockchain technology allows users to carry out direct money transfers, cutting out the middleman. The money is transferred as our HMQ cryptocurrency and withdrawn via authorised exchange points. Users can choose the point with the best exchange rate, therefore avoiding any financial monopolies.'
  },
  {
    title: 'Remote work',
    text: 'Companies can utilise Humaniq\'s ever growing user base to carry out tasks involving the processing of information. Users can decode and translate texts, identify photographs, locate geotags and so on, in return for renumeration.'
  },
  {
    title: 'Charity without corruption',
    text: 'Charity, carried out in the traditional way, often leads to a large proportion of donated money falling into the wrong hands. Blockchain technology, combined with the infrastructure of Humaniq, ensures that donations are completely transparent: stakeholders are able to see what every penny is spent on and can be sure that all of their money is going to help people.'
  },
  {
    title: 'Guarantor lending',
    text: 'Grameen Bank in Bangladesh has created a system of loans based on honesty and trust, which guarantees over 90% repayment. The Humaniq system allows for the creation of a similar system but on a global scale: every person on Earth will be able to take out a commission-free loan using nothing but a smartphone and the Humaniq app.'
  },
  {
    title: 'Direct lending to entrepreneurs',
    text: 'Following the principle of the non-profit organisation Kiva Microfunds, which enables loans for entrepreneurs on low incomes, Humaniq will become a platform for both donations and loans. You can lend money to a business you\'d like to support, either as a grant or with the expectation of a return – the blockchain technology makes this process incredibly simple and effective for both parties.'
  }
]