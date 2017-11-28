import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('kb-menu')

const _createArticleLinks = (articleId, articleTitle, sections) => (
  <li
    key={`${articleId}-links`}
    className={cn('article-links')}
  >
    <a
      href={`#${articleId}`}
      className={cn('article-link')}
    >
      {articleTitle}
    </a>
    <nav className={cn('section-links')}>
      {sections.map(({title: sectionTitle}, index) => (
        <a
          key={`${articleId}-section-link-${index + 1}`}
          href={`#${articleId}-section-${index + 1}`}
          className={cn('section-link')}
        >
          {sectionTitle}
        </a>
      ))}
    </nav>
  </li>
)

const Menu = ({mix, articles}) => (
  <ul className={cn([mix])}>
    {articles.map(({id: articleId, title: articleTitle, sections}) => (
      _createArticleLinks(articleId, articleTitle, sections)
    ))}
  </ul>
)

Menu.propTypes = {
  mix: T.string, //BEM mixin from parent block
};

export default Menu