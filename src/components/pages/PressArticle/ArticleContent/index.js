import React from 'react';
import './styles.scss';
import {cssClassName} from 'utils'

const cn = cssClassName('pa-article-content');

const ArticleContent = ({img, markup}) => (
  <div className={cn()}>
    <img className={cn('image')} src={img} />
    <div className={cn('content')} dangerouslySetInnerHTML={{__html: markup}}/>
  </div>
)

export default ArticleContent