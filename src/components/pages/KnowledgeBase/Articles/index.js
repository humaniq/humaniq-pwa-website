import React from 'react';
import * as T from "prop-types";
import Code from 'react-code-prettify';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('articles-kb')

const _createArticle = (articleId, articleTitle, sections) => (
  <article
    key={articleId}
    id={articleId}
    className={cn('article')}
  >
    <p
      className={cn('article-title')}
    >
      {articleTitle}
    </p>
    <div className={cn('article-sections')}>
      {sections.map(({title: sectionTitle, content, sampleCode}, index) => (
        <div
          key={`${articleId}-section-${index + 1}`}
          id={`${articleId}-section-${index + 1}`}
          className={cn('article-section')}
        >
          <h4>{sectionTitle}</h4>
          <p>{content}</p>
          <Code
            codeString = {sampleCode}
          />
        </div>
      ))}
    </div>
  </article>
)


const Articles = ({mix, articles}) => (
  <div className={cn([mix])}>
    {articles.map(({id: articleId, title: articleTitle, sections}) => (
      _createArticle(articleId, articleTitle, sections)
    ))}
  </div>
)

Articles.propTypes = {
  mix: T.string, //BEM mixin from parent block
  articles: T.array.isRequired, //BEM mixin from parent block
};

export default Articles