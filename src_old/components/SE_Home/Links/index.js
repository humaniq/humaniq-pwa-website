import React from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HomeLinks')
import A_Btn from 'A_Btn'
import A_Container from 'A_Container'
import A_H from 'A_H'
const links = [
  {
    img: '/img/placeholder-squared.svg',
    text: 'HMQ Explorer',
    url: '#'
  },
  {
    img: '/img/placeholder-squared.svg',
    text: 'Humaniq Blog',
    url: '#'
  },
  {
    img: '/img/placeholder-squared.svg',
    text: 'Open Source',
    url: '#'
  }
]

const SE_HomeLinks = () =>{
  const rederedLink = links.map(({img, text, url})=>(
    <A_Btn type="interactive" img={{src: img, alt: text}} to={url} key={'key_' + text}>
      {text}
    </A_Btn>
  ))

  rederedLink.push(
    <div className={cn('links-item')} key={'key_empty'}></div>
  )
  return (
    <A_Container>
      <div className={cn('root')}>
        <A_H type="section-c" center >Banking with HMQ</A_H>
        <div className={cn('links')}>
          {rederedLink}
        </div>
      </div>
    </A_Container>
  )
}

export default SE_HomeLinks