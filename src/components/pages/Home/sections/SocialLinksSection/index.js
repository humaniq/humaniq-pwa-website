import React from 'react'
import A_Title from 'A_Title_H'
import M_SocialLinks_H from 'M_SocialLinks_H'
import O_SimpleForm_H from '../../../../widgets/O_SimpleForm_H_2';
import SectionCounter from '../common/SectionCounter/index.js'
import InfoColumns from '../common/InfoColumns'
import './styles.scss'
import { cssClassName } from 'utils'

const cn = cssClassName('SE_Home_SocialLinks')

const SE_Home_SocialLinks = ({ mix }) => (
  <section className={cn([mix])}>    
    <div className={cn('content')}>
      <A_Title mix={cn('title')} type="section" theme="dark">
        Join the global Humaniq<br /> community
      </A_Title>
      <M_SocialLinks_H mix={cn('social-links')} type="section2">        
      </M_SocialLinks_H>

      {/*<div className={cn('subscribe')}>*/}
      {/*Subscribe to our mailing list to receive quality content from Humaniq!*/}
          {/*<O_SimpleForm_H formType="subscribe" />*/}
      {/*</div>*/}

    </div>
    <SectionCounter sectionNum={6} theme="bright" />
  </section>
)

export default SE_Home_SocialLinks
