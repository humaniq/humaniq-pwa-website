import React, {Component} from 'react';
import * as T from "prop-types";
import O_Transaction from 'O_Transaction'
import A_Container from 'A_Container'
import O_ScrollUp from "O_ScrollUp";

class SE_HmqMarkets extends Component {

  getTransactions(entities) {
    return (entities.map((props, i) =>
      <O_Transaction key={'key_' + i} {...props} type="market" up={i == 0}/>
    ))
  }

  render() {
    const {entities} = this.props
    const renderedTransactions = this.getTransactions(entities)
    return (
      <div>
        <A_Container type='section-clean'>
          <O_ScrollUp initTop={50} showAfter={700}>
            {renderedTransactions}
          </O_ScrollUp>
        </A_Container>
      </div>

    )
  }
}

SE_HmqMarkets.propTypes = {
  entities: T.array.isRequired,
}

SE_HmqMarkets.defaultProps = {
  entities: []
}

export default SE_HmqMarkets
