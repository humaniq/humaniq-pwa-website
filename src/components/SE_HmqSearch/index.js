import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HmqSearch')
import A_Container from 'A_Container'
// import A_H from 'A_H'
import M_NoResults from 'M_NoResults'
// import {safeDA} from "utils/index"
// import A_Link from 'A_Link'
import O_Search from 'O_Search'
import history from 'history'

class SE_HmqSearch extends Component {

  handleSubmit = (searchString) => {
    history.push('/hmq-explorer/search?searchTerm=' + searchString)
  }

  render() {
    const {request} = this.props

    // const {articles, total, request, show} = this.props
    // let result
    // if(show){
    //   result = total === 0 ?
    //     <M_NoResults request={request} />
    //     : this.getResults(articles)
    // }

    const result = <M_NoResults request={request} />
    return (
      <div>
        <div className={cn('search')}>
          <O_Search
            placeholder="Search TxHash or Address"
            focus
            handleSubmit={this.handleSubmit}
          />
        </div>
        <A_Container type="section-long-text">
          <div className={cn('root')}>
            {result}
          </div>
        </A_Container>
      </div>
    )
  }
}

SE_HmqSearch.propTypes = {
  articles: T.array.isRequired,
  total: T.number.isRequired,
  request: T.string
};

SE_HmqSearch.defaultProps = {
}

export default SE_HmqSearch