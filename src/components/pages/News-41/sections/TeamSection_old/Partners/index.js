import React from 'react'
import * as T from 'prop-types'
import './styles.scss'
import { cssClassName } from 'utils'

const cn = cssClassName('M_Partners_H')

const _createPartners = partners =>
  partners.map(({ name, img, url, title }) => (
    <a href={url} target="_blank" key={`partner-${name}`} className={cn('partner-link')}>
      <img src={img} className={cn('partner-logo')} title={title} />
    </a>
  ))

const _handleWheel = e => {
  e.stopPropagation()
}

const M_Partners_H = ({ mix }) => (
  <div onWheel={_handleWheel} className={cn([mix])}>
    <nav className={cn('partners-container')}>{_createPartners(partnersList)}</nav>
  </div>
)

export default M_Partners_H

M_Partners_H.propTypes = {
  mix: T.string, //BEM mixin from parent block
}

const imgPath = `img/design-v2/sections/team/partners`
const partnersList = [
  {
    name: 'bitaps',
    img: `${imgPath}/bitaps_2x.jpg`,
    title: 'Bitaps - Technical Partners',
    url: 'https://bitaps.com/',
  },
  {
    name: 'blockchainage',
    img: `${imgPath}/blockchainage_2x.jpg`,
    title: 'Blockchain Age - Media Partners',
    url: 'https://blockchainage.com/',
  },
  {
    name: 'blockchaincommunity',
    img: `${imgPath}/blockchaincommunity_2x.jpg`,
    title: 'Blockchain Community - Business Partners',
    url: 'http://blockchain.community/',
  },
  {
    name: 'deepknowledgeventures',
    img: `${imgPath}/deepknowledgeventures_2x.jpg`,
    title: 'Deep Knowledge Ventures - Business Partners',
    url: 'http://www.deepknowledgeventures.com/',
  },
  {
    name: 'deloitte',
    img: `${imgPath}/deloitte_2x.jpg`,
    title: 'Deloitte - Business Partners',
    url: 'https://www2.deloitte.com/us/en.htm',
  },
  {
    name: 'futurefintech',
    img: `${imgPath}/futurefintech_2x.jpg`,
    title: 'Future Fintech - Business Partners',
    url: 'http://www.futurefintech.org/',
  },
  {
    name: 'gemz',
    img: `${imgPath}/gemz2.png`,
    title: 'GEMZ',
    url: 'http://gemsww.com/',
  },
  {
    name: 'hedgethink',
    img: `${imgPath}/hedgethink_2x.jpg`,
    title: 'Hedge Think - Media Partners',
    url: 'https://www.hedgethink.com/',
  },
  {
    name: 'intelligenthq',
    img: `${imgPath}/intelligenthq_2x.jpg`,
    title: 'Intelligent HQ - Media Partners',
    url: 'https://www.intelligenthq.com/',
  },
  {
    name: 'L39',
    img: `${imgPath}/l39_2x.jpg`,
    title: 'Level39 - Business Partners',
    url: 'http://www.level39.co/',
  },
  {
    name: 'ntechlab',
    img: `${imgPath}/ntechlab_2x.jpg`,
    title: 'NTechLab - Technical Partners',
    url: 'http://ntechlab.com/',
  },
  {
    name: 'openbusinesscouncil',
    img: `${imgPath}/openbusinesscouncil_2x.jpg`,
    title: 'Open Business Council - Media Partners',
    url: 'https://www.openbusinesscouncil.org/',
  },
  {
    name: 'richtopia',
    img: `${imgPath}/richtopia_2x.jpg`,
    title: 'Richtopia - Media Partners',
    url: 'https://richtopia.com/',
  },
  {
    name: 'theinvaders',
    img: `${imgPath}/theinvaders_2x.jpg`,
    title: 'The Invaders - Technical Partners',
    url: 'http://theinvaders.ru/',
  },
  {
    name: 'thinkrise',
    img: `${imgPath}/thinkrise_2x.jpg`,
    title: 'Think Rise by Barclays - Business Partners',
    url: 'https://thinkrise.com/',
  },
  {
    name: 'tradersdna',
    img: `${imgPath}/tradersdna_2x.jpg`,
    title: 'TradersDNA - Media Partners',
    url: 'https://www.tradersdna.com/',
  },
  {
    name: 'vexor',
    img: `${imgPath}/vexor_2x.jpg`,
    title: 'Vexor - Technical Partners',
    url: 'https://vexor.io/',
  },
]
