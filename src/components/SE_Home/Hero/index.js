import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HomeHero')
import A_Container from 'A_Container'
import A_Image from 'A_Image'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Btn from 'A_Btn'
import Title from './title'

const SE_HomeHero = ({explorerData}) =>{

  const infoBlock = explorerData && explorerData.map( ({title, data}) => {
    return (
      <div className={cn('explorer-info-block')} key={'key_' + title}>
        <A_H type='xs'>{title}</A_H>
        <span className={cn('explorer-info-data')}>{data}</span>
      </div>

    )
  })

  return(
    <div className={cn('back-img')}>
      <A_Container>
        <div className={cn('root')}>
          <div className={cn('welcome')}>
            <Title />
            <div className={cn('welcome-text')}>
              <A_P type="first" >Humaniq is a simple and secure mobile banking app, based on Ethereum Blockchain. Humaniq tool of financial inclusion connects 2 billion unbanked people to the global economy. </A_P>
            </div>
            <A_Btn type="link-subscribe" to="/form/subscribe">Subscribe</A_Btn>
            <span className={cn('subscribe-text')}>
              <A_P type="second" >Want to be informed? Subscribe to our Newsletter </A_P>
          </span>
          </div>
          {explorerData &&
          <div className={cn('explorer')}>
            <div className={cn('explorer-info')}>
              <A_H type='bs'>HMQ Explorer</A_H>
              {infoBlock}
            </div>
            <div className={cn('explorer-img')}>
              <A_Image src="/img/illustrations/block-0.svg"/>
            </div>
          </div>
          }
        </div>
      </A_Container>
    </div>

  )
}
SE_HomeHero.propTypes = {
  explorerData: T.array.isRequired
};

SE_HomeHero.defaultProps = {
}
export default SE_HomeHero