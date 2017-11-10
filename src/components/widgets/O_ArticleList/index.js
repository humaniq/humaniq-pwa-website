import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_Link from 'A_Link'
const cn = cssClassName('O_ArticleList')
import A_H from 'A_H'
import A_Container from 'A_Container'


const O_ArticleList = ({articles, title}) =>{
  const getList = (articles, i) => {
    const renderedArticles = articles.map( (article, i) => (
      <li key={"key_" + i} className={cn('article-item')}>
        <A_Link to={article.url} type="article">{article.title}</A_Link>
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
  articles: T.arrayOf(T.shape({
    url: T.string.isRequired,
    title: T.string.isRequired
  })).isRequired,
  title: T.string.isRequired
};

O_ArticleList.defaultProps = {
  articles: [{url: '', title: ''}]
}
export default O_ArticleList