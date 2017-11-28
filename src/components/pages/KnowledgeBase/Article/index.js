import React from 'react'
import * as T from "prop-types"
import './styles.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('kb-article')


const Article = ({mix, children, articleData: {id: articleId, title: articleTitle}}) => (
  <article
    id={articleId}
    className={cn([mix])}
  >
    <h3 className={cn('title')}>
      {articleTitle}
    </h3>
    {children}
  </article>
)

Article.propTypes = {
  mix: T.string, //BEM mixin from parent block
  articleData: T.object.isRequired, //BEM mixin from parent block
};

export default Article