import React, { Component } from 'react';
import * as T from "prop-types";
import A_H from 'A_H'
import A_P from 'A_P'
import M_InfoBlock from 'M_InfoBlock'
import O_Сrumbs from 'O_Сrumbs'
import O_Transaction from 'O_Transaction'
import M_ScrollScreen from 'M_ScrollScreen'
import A_Container from 'A_Container'
import O_ScrollUp from "O_ScrollUp";
import Waypoint from 'react-waypoint'

class SE_HmqHolder extends Component {

  getTransactions(entities, loadMore, load){
    return (entities.map( (props, i) => {

      const entitiesCount = entities.length
      const addWayPoint = load && (i + 30 === entitiesCount || i + 5 === entitiesCount)
      return (
        <div key={'key_' + props.txHash}>
          <O_Transaction {...props} type="log" onTop={i === 0}/>
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
    const {totalTransactions, balance, address, loadMore, transactions:{entities, complete, loading}} = this.props
    const load = !complete && !loading
    const renderedTransactions = this.getTransactions(entities, loadMore, load)
    return (
      <div>
        <A_Container type='section-clean'>
          <O_Сrumbs
            notLink
            path={[
              {name: 'Token Holders'},
              {name: address}
            ]}
          />
          <M_InfoBlock>
            <A_H type='hmq-e'>Balance</A_H>
            <A_P type='hmq-e'>{balance}</A_P>
            <A_H type='hmq-e'>Total Transactions</A_H>
            <A_P type='hmq-e'>{totalTransactions}</A_P>
          </M_InfoBlock>
        </A_Container>
        <O_ScrollUp initTop={50} showAfter={700}>
          <M_ScrollScreen desabled={complete}>
            {renderedTransactions}
          </M_ScrollScreen>
        </O_ScrollUp>
      </div>

    )
  }
}

SE_HmqHolder.propTypes = {
  totalTransactions: T.number.isRequired,
  balance: T.string.isRequired,
  address: T.string.isRequired,
  loadMore: T.func.isRequired,
  transactions: T.shape({
    entities: T.array.isRequired,
    complete: T.bool.isRequired,
    loading: T.bool.isRequired
  }).isRequired,
}

SE_HmqHolder.defaultProps = {
}

export default SE_HmqHolder