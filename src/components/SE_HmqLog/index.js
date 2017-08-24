import React, {Component} from 'react';
import * as T from "prop-types";
import O_Transaction from 'O_Transaction'
import M_ScrollScreen from 'M_ScrollScreen'

import O_ScrollUp from "O_ScrollUp";

class SE_HmqLog extends Component {

  getTransactions(entities) {
    return (entities.map((props, i) =>
      <O_Transaction key={'key_' + i} {...props} type="log" up={i == 0}/>
    ))
  }

  render() {
    const {entities} = this.props
    const renderedTransactions = this.getTransactions(entities)
    return (
      <div>
        <O_ScrollUp initTop={50} showAfter={700}>
          <M_ScrollScreen >
            {renderedTransactions}
          </M_ScrollScreen>
        </O_ScrollUp>
      </div>

    )
  }
}

SE_HmqLog.propTypes = {
  entities: T.array.isRequired,
}

SE_HmqLog.defaultProps = {
  entities: []
}

export default SE_HmqLog
