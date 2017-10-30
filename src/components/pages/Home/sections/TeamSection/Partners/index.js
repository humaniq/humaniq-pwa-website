import React from 'react'
import * as T from "prop-types"
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('M_Partners_H');

const _createPartners = (partners) => (
  partners.map(({name,img}) => (
    <a
      href="#"
      key={`partner-${name}`}
      className={cn('partner-link')}
    >
      <img
        src={img}
        className={cn('partner-logo')}
      />
    </a>
  ))
)

const M_Partners_H = ({mix}) => (
  <div className={cn([mix])}>
    <nav className={cn('partners-container')}>
      {_createPartners(partnersList)}
    </nav>
  </div>
)

export default M_Partners_H

M_Partners_H.propTypes = {
  mix: T.string, //BEM mixin from parent block
}

const imgPath= `img/design-v2/sections/team/partners`
const partnersList = [
  {
    name: 'bitaps',
    img: `${imgPath}/bitaps_2x.jpg`
  },
  {
    name: 'blockchainage',
    img: `${imgPath}/blockchainage_2x.jpg`
  },
  {
    name: 'blockchaincommunity',
    img: `${imgPath}/blockchaincommunity_2x.jpg`
  },
  {
    name: 'deepknowledgeventures',
    img: `${imgPath}/deepknowledgeventures_2x.jpg`
  },
  {
    name: 'deloitte',
    img: `${imgPath}/deloitte_2x.jpg`
  },
  {
    name: 'futurefintech',
    img: `${imgPath}/futurefintech_2x.jpg`
  },
  {
    name: 'gemz',
    img: `${imgPath}/gemz2.png`
  },
  {
    name: 'hedgethink',
    img: `${imgPath}/hedgethink_2x.jpg`
  },
  {
    name: 'intelligenthq',
    img: `${imgPath}/intelligenthq_2x.jpg`
  },
  {
    name: 'L39',
    img: `${imgPath}/l39_2x.jpg`
  },
  {
    name: 'ntechlab',
    img: `${imgPath}/ntechlab_2x.jpg`
  },
  {
    name: 'openbusinesscouncil',
    img: `${imgPath}/openbusinesscouncil_2x.jpg`
  },
  {
    name: 'richtopia',
    img: `${imgPath}/richtopia_2x.jpg`
  },
  {
    name: 'theinvaders',
    img: `${imgPath}/theinvaders_2x.jpg`
  },
  {
    name: 'thinkrise',
    img: `${imgPath}/thinkrise_2x.jpg`
  },
  {
    name: 'tradersdna',
    img: `${imgPath}/tradersdna_2x.jpg`
  },
  {
    name: 'vexor',
    img: `${imgPath}/vexor_2x.jpg`
  }
]

