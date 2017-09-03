import React from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_AnimationCoin')

const coins =[
  {
    delay: -10,
  },
  {
    delay: 5,
  },
  {
    delay: 2.2,
  },
  {
    delay: 3.5,
  },
  {
    delay: 0.4,
  },
  {
    delay: 4.1,
  },
  {
    delay: 5.2,
  },
  {
    delay: 2.5,
  },
  {
    delay: 1.5,
  },
  {
    delay: 3.1,
  },
  {
    delay: 4.5,
  },
  {
    delay: 1.3,
  },
  {
    delay: 2.2,
  },
  {
    delay: 4.8,
  },
  {
    delay: 6.5,
  },
  {
    delay: 4.1,
  },
  {
    delay: 3.2,
  },
  {
    delay: 1.9,
  },
  {
    delay: 3.6,
  },
  {
    delay: 1.2,
  },
  {
    delay: .1,
  },
  {
    delay: 2.4,
  },
  {
    delay: 7,
  },
  {
    delay: 4.2,
  },
  {
    delay: 5.2,
  },
  {
    delay: 1.5,
  },
  {
    delay: 3.5,
  },
  {
    delay: .4,
  },
  {
    delay: 2.8,
  },
  {
    delay: 3.8,
  },
  {
    delay: 4.2,
  },
  {
    delay: 5.3,
  },
  {
    delay: 2.2,
  },
  {
    delay: -4,
  },
  {
    delay: 1.3,
  },
  {
    delay: 3,
  },
  {
    delay: 6,
  },
  {
    delay: -7.9,
  },
  {
    delay: .3,
  },
  {
    delay: 1.1,
  }
]


const O_AnimationCoin = () =>{
  let delay = 0;
  const renderedCoin = coins.map( (coin, i) =>{
    delay += coin.delay;
    return(
      <div className={`${cn('nth-scale')} ${cn('even')}`}>
        <div
          className={cn('coin', [i % 2 !== 0 && 'odd']) }
          key={'key_' + i}
          style={{
            animation: `move 100s ${delay}s linear infinite forwards`,
          }}
          >
          <div className={cn('front')} />
          <div className={cn('slide')}>
            <div className={cn('c1')}><span/></div>
            <div className={cn('c2')}><span/></div>
            <div className={cn('c3')}><span/></div>
            <div className={cn('c4')}><span/></div>
            <div className={cn('c5')}><span/></div>
            <div className={cn('c6')}><span/></div>
            <div className={cn('c7')}><span/></div>
            <div className={cn('c8')}><span/></div>
            <div className={cn('c9')}><span/></div>
            <div className={cn('c10')}><span/></div>
            <div className={cn('c11')}><span/></div>
            <div className={cn('c12')}><span/></div>
          </div>
          <div className={cn('back')} />
        </div>
      </div>
    )
  });
  return(
    <div className={cn('bg')}>
      {renderedCoin}
    </div>
  )
}

export default O_AnimationCoin