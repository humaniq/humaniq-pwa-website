import React from 'react'
import * as T from "prop-types"
import './styles.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('kb-article')


const Article = ({mix, children, anchorRef, articleData: {id, title}}) => (
  <article
    ref={anchorRef}
    id={id}
    className={cn([mix])}
  >
    <h3 className={cn('title')}>
      {title}
    </h3>
    {children}
  </article>
)

Article.propTypes = {
  mix: T.string, //BEM mixin from parent block
  articleData: T.object.isRequired, //article data
};

export default Article