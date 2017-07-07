import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_Image from 'A_Image'
const cn = cssClassName('O_FlyingLogos')

const logos=[
  {
    url: 'img/logos/1.png',
    height: 70,
    delay: 1
  },
  {
    url: 'img/logos/2.png',
    height: 150,
    delay: .7
  },
  {
    url: 'img/logos/3.png',
    height: 45,
    delay: 1.5
  },
  {
    url: 'img/logos/4.png',
    height: 35,
    delay: .9
  },
  {
    url: 'img/logos/5.png',
    height: 140,
    delay: .7
  },
  {
    url: 'img/logos/6.png',
    height: 90,
    delay: 1.7
  },
  {
    url: 'img/logos/7.png',
    height: 90,
    delay: 1.2
  },
  {
    url: 'img/logos/8.png',
    height: 65,
    delay: 1.1
  },
  {
    url: 'img/logos/9.png',
    height: 80,
    delay: .9
  },
  {
    url: 'img/logos/10.png',
    height: 50,
    delay: 1
  }
]


const O_FlyingLogos = () =>{
  let delay = 0
  const renderedLogos = logos.map( (logo, i) =>{
    delay += logo.delay
    return(
      <img
        className={cn('image', [i % 2 !== 0 && 'odd']) }
        key={'key_' + i}
        style={{
          animation: `flyup 10.5s ${delay}s linear infinite forwards`,
          height: logo.height
        }}
        src={logo.url}
      />
    )
  })
  return(
    <div className={cn('root')}>{renderedLogos}</div>
  )
}

O_FlyingLogos.propTypes = {
};

O_FlyingLogos.defaultProps = {
  logos: []
}
export default O_FlyingLogos