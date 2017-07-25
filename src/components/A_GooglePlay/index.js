import React from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('A_GooglePlay');
import A_Btn from 'A_Btn';
import A_Image from 'A_Image';

const A_GooglePlay = () => (
  <div className={cn('div')}>
    <A_Btn type='link' to="#">
      <A_Image className={cn('google-bt')} src='/img/buttons/google-play-badge.png' alt='Google Play '/>
    </A_Btn>
  </div>
)

export default A_GooglePlay

A_GooglePlay.propTypes = {};