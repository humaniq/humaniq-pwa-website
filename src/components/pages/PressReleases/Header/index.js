import React from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import A_Title_H from 'A_Title_H'
import A_Btn from 'A_Btn'

const cn = cssClassName('pr-header');

const PrHeader = ({mix, showAll, toggleView}) => (
  <div className={cn([mix])}>
    <A_Title_H
      type='section'
      mix={cn('title')}
    >
      Press Releases{showAll && <span><b>/</b>All</span>}
    </A_Title_H>
    <A_Btn
      type='material-r-btn-blue'
      mix={cn('show-all-btn')}
      onClick={toggleView}
    >
      All releases
    </A_Btn>
  </div>
)

export default PrHeader