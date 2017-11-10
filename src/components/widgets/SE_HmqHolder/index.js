import React, { Component } from 'react';
import * as T from "prop-types";
import A_H from 'A_H'
import A_P from 'A_P'
import M_InfoBlock from 'M_InfoBlock'
import O_Сrumbs from 'O_Сrumbs'
import O_Transaction from 'O_Transaction'
import M_ScrollScreen from 'M_ScrollScreen'
import M_Preloader from 'M_Preloader'
import A_Container from 'A_Container'
import O_ScrollUp from "O_ScrollUp";
import Waypoint from 'react-waypoint'
import O_HmqContentPlaceholder from 'O_HmqContentPlaceholder'

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
    const {holder, transactions, loadMore} = this.props;

    const load = !transactions.complete && !transactions.loading;
    const renderedTransactions = this.getTransactions(transactions.entities, loadMore, load);
    return (
      <div>
        <A_Container type='section-clean'>
          <O_Сrumbs
            notLink
            path={[
              {name: 'Token Holders'},
              {name: holder.address}
            ]}
          />
          {holder.loading ? (
            <M_Preloader />
          ) : (
            <M_InfoBlock>
              <A_H type='hmq-e'>Balance</A_H>
              <A_P type='hmq-e'>{holder.balance}</A_P>
              <A_H type='hmq-e'>Total Transactions</A_H>
              <A_P type='hmq-e'>{holder.totalTransactions}</A_P>
            </M_InfoBlock>
          )}

        </A_Container>
        <O_ScrollUp initTop={50} showAfter={700}>
          <A_Container type='section-clean'>
            <M_ScrollScreen desabled={transactions.complete}>
              {renderedTransactions}
              {transactions.loading && <O_HmqContentPlaceholder layout='holders' amount = {20}/>}
            </M_ScrollScreen>
          </A_Container>
        </O_ScrollUp>
      </div>

    )
  }
}

SE_HmqHolder.propTypes = {
  holder: T.shape({
    totalTransactions: T.number.isRequired,
    balance: T.string.isRequired,
    address: T.string.isRequired,
  }).isRequired,

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