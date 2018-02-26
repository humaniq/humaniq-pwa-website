import React from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'
import A_Title_H from 'A_Title_H'
import A_Btn from 'A_Btn'

const cn = cssClassName('PressReleases');

const PressReleases = () => (
  <A_Container type='section-clean' mix={cn()}>
    <div className={cn('header')}>
      <A_Title_H
        type='section'
        mix={cn('title')}
      >
        Press Releases
      </A_Title_H>
      <A_Btn
        type='material-r-btn-blue'
        mix={cn('show-all')}
      >
        All releases
      </A_Btn>
      <A_Btn
        type='material-r-btn-blue'
        mix={cn('download-presskit')}
      >
        Download presskit
      </A_Btn>
    </div>
  </A_Container>
)

export default PressReleases
