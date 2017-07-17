import React from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('FlyingLogos')

const logos=[
  {
    url: 'img/logos/blockchainage@2x.jpg',
    height: 89,
    delay: .9
  },
  {
    url: 'img/logos/deepknowledgeventures@2x.jpg',
    height: 89,
    delay: .9
  },
  {
    url: 'img/logos/openbusinesscouncil@2x.jpg',
    height: 89,
    delay: .9
  },
  {
    url: 'img/logos/deloitte@2x.jpg',
    height: 89,
    delay: .9
  },
  {
    url: 'img/logos/riselondon@2x.jpg',
    height: 89,
    delay: .9
  },
  {
    url: 'img/logos/futurefintech@2x.jpg',
    height: 89,
    delay: .9
  },
  {
    url: 'img/logos/l39@2x.jpg',
    height: 89,
    delay: .9
  },
  {
    url: 'img/logos/intelligentHQ@2x.jpg',
    height: 89,
    delay: .9
  },
  {
    url: 'img/logos/blockchaincommunity@2x.jpg',
    height: 89,
    delay: .9
  },
  {
    url: 'img/logos/cointelegraph@2x.jpg',
    height: 89,
    delay: .9
  }
]


const FlyingLogos = () =>{
  let delay = 0
  const renderedLogos = logos.map( (logo, i) =>{
    delay += logo.delay
    return(
      <img
        className={cn('image', [i % 2 !== 0 && 'odd']) }
        key={'key_' + i}
        style={{
          animation: `flyup 8.9s ${delay}s linear infinite forwards`,
          height: logo.height
        }}
        src={logo.url}
      />
    )
  })
  return(
    <div className={cn('root')}>
      {renderedLogos}
      <div className={cn('first')}/>
    </div>
  )
}

export default FlyingLogos