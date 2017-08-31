import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HmqSearch')
import A_Container from 'A_Container'
import M_NoResults from 'M_NoResults'
import O_Search from 'O_Search'
import history from 'history'
import O_Transaction from 'O_Transaction'

class SE_HmqSearch extends Component {

  handleSubmit = (searchString) => {
    history.push('/hmq-explorer/search?searchTerm=' + searchString)
  }

  getResults(entities){
    return(
      entities.map( ({type, ...props}, i) => (
        <O_Transaction key={'key_' + i} {...props} type={type} up={i == 0}/>
      ))
    )
  }

  render() {
    const {request, show, entities} = this.props

    let result
    if(show){
      result = entities.length === 0 ?
        <M_NoResults request={request} />
        : this.getResults(entities)
    }
    return (
      <div>
        <div className={cn('search')}>
          <O_Search
            value={request}
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
  entities: T.array.isRequired,
  request: T.string
};

SE_HmqSearch.defaultProps = {
}

export default SE_HmqSearch