import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('kb-menu')

const _createArticleLinks = (articleId, articleTitle, sections, setScrollTo) => (
  <li
    key={`${articleId}-links`}
    className={cn('article-links')}
  >
    <div
      onClick={() => setScrollTo(articleId)}
      className={cn('article-link')}
    >
      {articleTitle}
    </div>
    <nav className={cn('section-links')}>
      {sections.map(({title: sectionTitle}, index) => (
        <div
          onClick={() => setScrollTo(`${articleId}-section-${index + 1}`)}
          key={`${articleId}-section-link-${index + 1}`}
          className={cn('section-link')}
        >
          {sectionTitle}
        </div>
      ))}
    </nav>
  </li>
)

const Menu = ({mix, articles, setScrollTo}) => (
  <ul className={cn([mix])}>
    {articles.map(({id: articleId, title: articleTitle, sections}) => (
      _createArticleLinks(articleId, articleTitle, sections, setScrollTo)
    ))}
  </ul>
)

Menu.propTypes = {
  mix: T.string, //BEM mixin from parent block
};

export default Menu