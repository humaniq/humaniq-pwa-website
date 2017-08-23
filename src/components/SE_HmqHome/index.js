import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HmqHome')
import A_P from 'A_P'
import A_Container from 'A_Container'
import A_H from 'A_H'
import Chart from './Chart'

class SE_HmqHome extends Component {

  render() {
    const {hmqGraph, hmqStatistic, fetchGraphData} = this.props
    return (
      <div>
        <A_Container type="equal">
          <A_H type="section">Explore the HMQ</A_H>
          <A_P type="third">Humaniq token is the core of the banking ecosystem that the Humaniq has developed. We are eager to be transparent and provide real time updates of the HMQ.</A_P>
        </A_Container>

        <A_Container type="equal">
          <div className={cn('root')}>
            <div className={cn('chart')}>
              <Chart fetchGraphData={fetchGraphData} {...hmqGraph} />
            </div>

            <div className={cn('stat')}>
              <A_H type='hmq-e'>Token Supply</A_H>
              <A_P type='hmq-e'>{hmqStatistic.tokenSupplyString}</A_P>
              <A_H type='hmq-e'>Value per Token</A_H>
              <A_P type='hmq-e'>{hmqStatistic.tokenValueString}</A_P>
              <A_H type='hmq-e'>Total Holders</A_H>
              <A_P type='hmq-e'>{hmqStatistic.totalWallets}</A_P>
              <A_H type='hmq-e'>Total Transactions</A_H>
              <A_P type='hmq-e'>{hmqStatistic.totalTransactions}</A_P>
              <A_H type='hmq-e'>Value 24h</A_H>
              <A_P type='hmq-e'>{hmqStatistic.volume24String}</A_P>
              <A_H type='hmq-e'>Transactions 24h</A_H>
              <A_P type='hmq-e'>{hmqStatistic.totalTransactions24}</A_P>
              <A_H type='hmq-e'>Participating Exchanges</A_H>
              <A_P type='hmq-e'>{hmqStatistic.participatingExchanges}</A_P>
            </div>
          </div>

        </A_Container>
      </div>
    )
  }
}

SE_HmqHome.propTypes = {
  hmqGraph: T.object.isRequired,
  hmqStatistic: T.object.isRequired,
  fetchGraphData: T.func.isRequired
}

SE_HmqHome.defaultProps = {
}

export default SE_HmqHome
