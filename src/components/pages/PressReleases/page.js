import React from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'
import A_Title_H from 'A_Title_H'

const cn = cssClassName('PressReleases');

const PressReleases = () => (
  <A_Container type='section-clean'>
    <div className={cn()}>
      <A_Title_H type='section'>Press Releases</A_Title_H>
    </div>
  </A_Container>
)

export default PressReleases
