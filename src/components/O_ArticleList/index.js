import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_Link from 'A_Link'
const cn = cssClassName('O_ArticleList')
import A_H from 'A_H'
import Oval from '-!babel-loader!svg-react-loader!./oval.svg?name=Oval';

const O_ArticleList = ({articles}) =>{
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
    <div className="l-container">
      <div className={cn('root')}>
        <div className={cn('title')}>
          <A_H type="h2">Featured Articles</A_H>
        </div>
        <div className={cn('lists')}>
          {lists}
        </div>
      </div>
    </div>
  )
}

O_ArticleList.propTypes = {
  articles: T.arrayOf(T.object).isRequired
};

O_ArticleList.defaultProps = {
  articles: [{url: '', title: ''}]
}
export default O_ArticleList