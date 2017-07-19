import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_Link from 'A_Link'
const cn = cssClassName('O_ArticleList')
import A_H from 'A_H'
import A_Container from 'A_Container'

const Oval = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7">
    <circle cx="2.5" cy="136.5" r="2.5" fill="#179cde" fillRule="evenodd" stroke="#179cde" transform="translate(.5 -133)"/>
  </svg>
)

const O_ArticleList = ({articles, title}) =>{
  const getList = (articles, i) => {
    const renderedArticles = articles.map( (article, i) => (
      <li key={"key_" + i} className={cn('article-item')}>
        <Oval className={cn('oval')} />
        <A_Link to={article.url} >{article.title}</A_Link>
      </li>
    ))
    return(
      <ul key={'key_' + i} className={cn('list')} >
        {renderedArticles}
      </ul>
    )
  }
  const lists = []

  for(let i = 0; i<3 ; i++){
    const arr = articles.splice(0, 4);
    const list = getList(arr, i)
    lists.push(list)
  }
  return(
    <A_Container>
      <div className={cn('root')}>
          <A_H type="section">{title}</A_H>
        <div className={cn('lists')}>
          {lists}
        </div>
      </div>
    </A_Container>
  )
}

O_ArticleList.propTypes = {
  articles: T.arrayOf(T.object).isRequired,
  title: T.string.isRequired
};

O_ArticleList.defaultProps = {
  articles: [{url: '', title: ''}]
}
export default O_ArticleList