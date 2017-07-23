import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_WikiSearch')
import A_Container from 'A_Container'
import A_H from 'A_H'
import M_NoResults from 'M_NoResults'
import {} from "utils/index"
import A_Link from 'A_Link'
class SE_WikiSearch extends Component {

  getResults(articles){
    return (
      articles.map( article => {
        const _text = article.highlight.article.join('...').replace(/<\/?p>/g, '')
        const __html = `...${_text}...`
        return(
          <div className={cn('item')} key={"key_" + article.title} >
            <A_Link to={article.url}><A_H type="wiki-result">{article.title}</A_H></A_Link>

            <p className={cn('item-text')}dangerouslySetInnerHTML={{__html}} />
          </div>
        )
      })
    )
  }
  render() {
    const {articles, total, request, show} = this.props
    let result

    if(show){
      result = total === 0 ?
        <M_NoResults>{request}</M_NoResults>
        : this.getResults(articles)
    }

    return (
      <div>
        <A_Container type="section-long-text">
          <div className={cn('root')}>
            {result}
          </div>
        </A_Container>
      </div>
    )
  }
}

SE_WikiSearch.propTypes = {
  articles: T.array.isRequired,
  total: T.number.isRequired,
  request: T.string
};

SE_WikiSearch.defaultProps = {
}

export default SE_WikiSearch
