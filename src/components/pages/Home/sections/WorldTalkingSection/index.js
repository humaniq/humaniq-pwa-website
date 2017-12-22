import React from 'react'
import A_Title_H from 'A_Title_H'
import SectionCounter from '../common/SectionCounter/index.js'
import './styles.scss'
import { cssClassName } from 'utils'

const cn = cssClassName('SE_Home_WorldTalking')

const _getMentions = mentions =>
  mentions.map(({ title, url, urlText }, index) => (
    <li key={`mention-${index + 1}`} className={cn('mention')}>
      <p className={cn('mention-title')}>{title}</p>
      <a className={cn('mention-link')} href={url} target="_blank">
        {urlText}
      </a>
    </li>
  ))

const SE_Home_WorldTalking = ({ mix }) => (
  <section className={cn([mix])}>
    <div className={cn('content')}>
      <A_Title_H mix={cn('title')} type="section" theme="bright">
        The world is talking
      </A_Title_H>

      <ul className={cn('mentions-list')}>{_getMentions(hmqMentions)}</ul>
    </div>
    <SectionCounter sectionNum={13} theme="dark" />
  </section>
)

export default SE_Home_WorldTalking

const hmqMentions = [
  {
    title: 'Huffingtonpost.com:',
    url:
      'http://www.huffingtonpost.com/entry/tackling-financial-exclusion-with-biometric-technology_us_591af1ace4b03e1c81b008bc?ncid=engmodushpmg00000004',
    urlText: 'Tackling Financial Exclusion With Biometric Technology',
  },
  {
    title: 'Thenextweb.com:',
    url:
      'https://thenextweb.com/guests/5-things-need-know-blockchain-technology/?utm_source=t.co&utm_medium=referral&utm_content=5%20Things%20You%20Need%20to%20Know%20About%20Blockchain%20Technology&utm_campaign=share%2Bbutton#.tnw_X4BwNKpu',
    urlText: '5 Things You Need to Know About Blockchain Technology',
  },
  {
    title: 'Forbes.com:',
    url:
      'https://www.forbes.com/sites/haroldstark/2017/04/21/from-here-to-where-bitcoin-and-the-future-of-cryptocurrency/#14428f594367',
    urlText: 'From Here To Where? Bitcoin And The Future Of Cryptocurrency',
  },
  {
    title: 'Cointelegraph.com:',
    url:
      'https://cointelegraph.com/news/ethereum-based-humaniq-to-deliver-banking-40-to-2-bln-unbanked',
    urlText: 'Ethereum-Based Humaniq To Deliver Banking 4.0 to 2 Bin Unbanked',
  },
  {
    title: 'Finance.yahoo.com:',
    url:
      'https://finance.yahoo.com/news/humaniq-blockchain-financial-platform-unbanked-185522211.html',
    urlText:
      'Humaniq, Blockchain Financial Platform for the Unbanked, Appoints CEO and 20 Members to Global Advisory Board',
  },
  {
    title: 'Nasdaq.com:',
    url:
      'http://www.nasdaq.com/article/humaniq-aims-to-tackle-barriers-to-economic-inclusion-with-blockchain-app-cm764760',
    urlText: 'Humaniq Aims to Tackle Barriers to Economic Inclusion With Blockchain App',
  },
]
