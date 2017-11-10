import React, { Component } from 'react';
import * as T from "prop-types";
import O_Transaction from 'O_Transaction'
import O_HmqContentPlaceholder from 'O_HmqContentPlaceholder'
import Waypoint from 'react-waypoint'
import M_ScrollScreen from 'M_ScrollScreen'
import A_Container from 'A_Container'
import O_ScrollUp from "O_ScrollUp";

class SE_HmqHolders extends Component {

  getTransactions(entities, loadMore, loading){
    return (entities.map( (props, i) => {

      const entitiesCount = entities.length;
      const addWayPoint = !loading && (i + 20 === entitiesCount || i + 5 === entitiesCount);
      return (
        <div key ={props.address}>
          <O_Transaction {...props} type="holder" onTop = {i === 0}/>
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
    const {entities, loadMore, children, loading} = this.props;
    const renderedTransactions = this.getTransactions(entities, loadMore, loading);

    return (
      <div>
        <O_ScrollUp initTop={50} showAfter={700}>
          <A_Container type='section-clean'>
            {children}
            <M_ScrollScreen >
              {renderedTransactions}
              {loading && <O_HmqContentPlaceholder layout='holders' amount = {20}/>}
            </M_ScrollScreen>
          </A_Container>
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
