import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HmqHome')
import A_P from 'A_P'
import A_Container from 'A_Container'
import A_H from 'A_H'
// import Chart from './Chart'

class SE_HmqHome extends Component {

  render() {
    const {chartProps,
      hmqStatistic} = this.props

    return (
      <div>
        <A_Container type="mob-wide-line">
          <A_H type="hmq" >HMQ Explorer</A_H>
          <hr className={cn('hr')}/>
        </A_Container>
        <div className={cn('title-tablet')}>
          <A_Container type="section-hmq">
            <A_H type="section">Explore the HMQ</A_H>
            <A_P type="third">Humaniq token is the core of the banking ecosystem that the Humaniq has developed. We are eager to be transparent and provide real time updates of the HMQ.</A_P>
          </A_Container>
        </div>
        <A_Container type="section-hmq">
          <div className={cn('root')}>
            <div className={cn('chart')}>
              <div className={cn('title-desctop')}>
                <A_H type="section">Explore the HMQ</A_H>
                <A_P type="third">Humaniq token is the core of the banking ecosystem that the Humaniq has developed. We are eager to be transparent and provide real time updates of the HMQ.</A_P>
              </div>
              {/*<Chart {...{chartProps}} />*/}
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
              <A_H type='hmq-e'>Transactions 24h</A_H>
              <A_P type='hmq-e'>{hmqStatistic.totalTransactions24}</A_P>
              <A_H type='hmq-e'>Value 24h</A_H>
              <A_P type='hmq-e'>{hmqStatistic.volume24String}</A_P>
              <A_H type='hmq-e'>Participating Exchanges</A_H>
              <A_P type='hmq-e'>{hmqStatistic.participatingExchanges}</A_P>
            </div>
          </div>
        </A_Container>      </div>

    )
  }
}

SE_HmqHome.propTypes = {
  chartProps: T.object.isRequired,
  transactions: T.array.isRequired,
  hmqStatistic: T.object.isRequired
}

SE_HmqHome.defaultProps = {
}

export default SE_HmqHome
