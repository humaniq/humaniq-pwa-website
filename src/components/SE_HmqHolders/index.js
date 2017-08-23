import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HmqHolders')
import O_Transaction from 'O_Transaction'
import Waypoint from 'react-waypoint'
import M_ScrollScreen from 'M_ScrollScreen'

import O_ScrollUp from "O_ScrollUp";

class SE_HmqHolders extends Component {

  getTransactions(entities, loadMore){
    return (entities.map( (props, i) => {
      return (
        <div key ={props.address}>
          <O_Transaction {...props} type="holder"/>
          {i + 30 === entities.length &&
            <Waypoint
              scrollableAncestor={'window'}
              onEnter={loadMore}
            />
          }
        </div>
      )
    }))
  }

  render() {
    const {entities, loadMore} = this.props
    const renderedTransactions = this.getTransactions(entities, loadMore)
    return (
      <div>
        <O_ScrollUp initTop={0} showAfter={700}>
          <M_ScrollScreen >
            {renderedTransactions}
          </M_ScrollScreen>
        </O_ScrollUp>
      </div>

    )
  }
}

SE_HmqHolders.propTypes = {
  entities: T.array.isRequired,
  loadMore: T.func.isRequired
}

SE_HmqHolders.defaultProps = {
}

export default SE_HmqHolders
