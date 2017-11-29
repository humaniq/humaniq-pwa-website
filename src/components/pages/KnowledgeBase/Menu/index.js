import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('kb-menu')

const _createArticleLinks = (articleId, articleTitle, sections, currentAnchorId, setScrollTo) => {
  const activeArticle = currentAnchorId.includes(articleId)

  return (
    <li
      key={`${articleId}-links`}
      className={cn('article-links')}
    >
      <div
        onClick={() => setScrollTo(articleId)}
        className={cn('article-link', {active: activeArticle})}
      >
        {articleTitle}
      </div>
      <nav className={cn('section-links')}>
        {sections.map(({title: sectionTitle, id: sectionId}, index) => {
          const activeSection = currentAnchorId.includes(sectionId)
          return (
            <div
              onClick={() => setScrollTo(`${articleId}-section-${index + 1}`)}
              key={`${articleId}-section-link-${index + 1}`}
              className={cn('section-link', {active: activeSection})}
            >
              {sectionTitle}
            </div>
          )
        })}
      </nav>
    </li>
  )
}

const Menu = ({mix, articles, currentAnchorId, setScrollTo}) => (
  <ul className={cn([mix])}>
    {articles.map(({id: articleId, title, sections}) => (
      _createArticleLinks(articleId, title, sections, currentAnchorId, setScrollTo)
    ))}
  </ul>
)

Menu.propTypes = {
  mix: T.string, //BEM mixin from parent block
};

export default Menu