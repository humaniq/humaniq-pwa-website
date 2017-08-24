import React, { Component } from 'react';
import * as T from "prop-types";
import O_Transaction from 'O_Transaction'
import Waypoint from 'react-waypoint'
import M_ScrollScreen from 'M_ScrollScreen'

import O_ScrollUp from "O_ScrollUp";

class SE_HmqHolders extends Component {

  getTransactions(entities, loadMore, loading){
    return (entities.map( (props, i) => {

      const entitiesCount = entities.length
      const addWayPoint = !loading && (i + 30 === entitiesCount || i + 5 === entitiesCount)
      return (
        <div key ={props.address}>
          <O_Transaction {...props} type="holder" up={i == 0}/>
          {addWayPoint &&
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
    const {entities, loadMore, children, loading} = this.props
    const renderedTransactions = this.getTransactions(entities, loadMore, loading)
    return (
      <div>
        {children}
        <O_ScrollUp initTop={50} showAfter={700}>
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
  loadMore: T.func.isRequired,
  children: T.any
}

SE_HmqHolders.defaultProps = {
}

export default SE_HmqHolders
