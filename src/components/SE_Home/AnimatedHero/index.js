import React from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('AnimatedHero')
import A_H from 'A_H'
import A_P from 'A_P'
import A_Btn from 'A_Btn'
import A_Container from 'A_Container'

const AnimatedHero = () =>{
  return(
    <div className={cn()}>
      <A_Container type="video-hero">
        <div className={cn('inner')} style={{maxWidth: 600}}>
          <A_H type="video-hero">Empowering 3.5 Billion People in the world economy</A_H>
          <A_P type="video-hero">Humaniq is a simple and secure mobile app, delivering financial inclusion solutions to the 2.5 billion unbanked / 1 billion underbanked globally.</A_P>
          <A_Btn type="link-subscribe" to="/form/subscribe">Subscribe</A_Btn>
        </div>

      </A_Container>
      <div className="marker"></div>

      <div className="map">
        <div className="map_pattern">
          {/*<img*/}
            {/*className={'surface-map_pattern'}*/}
            {/*src={'/img/map/map_pattern.svg'}*/}
          {/*/>*/}

          <div className="surface-map_pattern"></div>
          <div className="freeway"></div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedHero