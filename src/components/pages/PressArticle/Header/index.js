import React from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import A_Title_H from 'A_Title_H'

const cn = cssClassName('pa-header');

const PrHeader = ({mix, source, date}) => (
  <div className={cn([mix])}>
    <A_Title_H
      type='section'
      mix={cn('path')}
    >
      Press Releases/All/<span>{source}</span>
    </A_Title_H>
    <div className={cn('bottom')}>
      <div className={cn('article-info')}>
        <A_Title_H
          type='subtitle'
          theme='blue'
          mix={cn('article-source')}
        >
          {source}
        </A_Title_H>
        <div className={cn('article-date')}>{date}</div>
      </div>
    </div>
  </div>
)

export default PrHeader