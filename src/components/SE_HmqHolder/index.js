import React, { Component } from 'react';
import * as T from "prop-types";
import A_H from 'A_H'
import A_P from 'A_P'
import M_InfoBlock from 'M_InfoBlock'
import O_Сrumbs from 'O_Сrumbs'
import A_Container from 'A_Container';

class SE_HmqHolder extends Component {

  render() {
    const {totalTransactions, balance, address} = this.props

    return (
      <div>
        <A_Container type='equal'>
            <O_Сrumbs
              path={[
                {name: 'Token Holders', url: `/hmq-explorer/token-holders`},
                {name: address, url: `/hmq-explorer/token-holders/${address}`}
              ]}
            />
            <M_InfoBlock>
              <A_H type='hmq-e'>Balance</A_H>
              <A_P type='hmq-e'>{balance}</A_P>
              <A_H type='hmq-e'>Total Transactions</A_H>
              <A_P type='hmq-e'>{totalTransactions}</A_P>
            </M_InfoBlock>
        </A_Container>
      </div>

    )
  }
}

SE_HmqHolder.propTypes = {
  totalTransactions: T.number.isRequired,
  balance: T.string.isRequired,
  address: T.string.isRequired
}

SE_HmqHolder.defaultProps = {
}

export default SE_HmqHolder
