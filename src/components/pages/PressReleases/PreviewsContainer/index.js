import React from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import A_Title_H from 'A_Title_H'
import PressPreview from '../PressPreview'

const cn = cssClassName('pr-previews-container');

const PreviewsContainer = ({mix, news, showAll}) => (
  <div className={cn([mix], {showAll} )}>

    <div className={cn('left-side')}>
      <A_Title_H
        type='subtitle'
        theme='blue'
        mix={cn('title')}
      >
        The most popular
      </A_Title_H>
      <div className={cn('previews-wrapper')}>
        {news.map(({title, date, text}, index) => (
          <PressPreview
            key={`popular-${index}`}
            mix={cn('left-side-preview')}
            title={title}
            date={date}
            text={text}
          />
        ))}
      </div>
    </div>

    {showAll &&
    <div className={cn('right-side')}>
      <A_Title_H
        type='subtitle'
        theme='blue'
        mix={cn('title')}
      >
        Latest press releases
      </A_Title_H>
      <div className={cn('previews-wrapper')}>
        {news.map(({title, date, text}, index) => (
          <PressPreview
            key={`latest-${index}`}
            mix={cn('right-side-preview')}
            title={title}
            date={date}
            text={text}
          />
        ))}
      </div>
    </div>
    }
  </div>
)

export default PreviewsContainer