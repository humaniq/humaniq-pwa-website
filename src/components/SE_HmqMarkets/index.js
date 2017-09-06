import React, {Component} from 'react';
import * as T from "prop-types";
import O_Transaction from 'O_Transaction'
import O_HmqContentPlaceholder from 'O_HmqContentPlaceholder'
import A_Container from 'A_Container'
import O_ScrollUp from "O_ScrollUp";

class SE_HmqMarkets extends Component {

  getTransactions(entities) {
    return (entities.map((props, i) =>
      <O_Transaction key={'key_' + i} {...props} type="market" onTop={i === 0}/>
    ))
  }

  render() {
    const {entities, loading} = this.props;
    const renderedTransactions = this.getTransactions(entities, loading);
    return (
      <div>
        <O_ScrollUp initTop={50} showAfter={700}>
          <A_Container type='section-clean'>
              {loading && <O_HmqContentPlaceholder layout='markets' amount = {8}/> || renderedTransactions}
          </A_Container>
        </O_ScrollUp>
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
