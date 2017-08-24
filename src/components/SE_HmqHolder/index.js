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

class SE_HmqHolder extends Component {

  getTransactions(entities) {
    return (entities.map((props, i) =>
      <O_Transaction key={'key_' + i} {...props} type="log" up={i == 0}/>
    ))
  }

  render() {
    const {totalTransactions, balance, address} = this.props
    const {entities} = this.props
    const renderedTransactions = this.getTransactions(entities)
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

        <A_Container type='section-clean'>
          <O_ScrollUp initTop={50} showAfter={700}>
            <M_ScrollScreen >
              {renderedTransactions}
            </M_ScrollScreen>
          </O_ScrollUp>
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


// render() {
//   const {entities} = this.props
//   const renderedTransactions = this.getTransactions(entities)
//   return (
//     <div>
//       <A_Container type='section-clean'>
//         <O_ScrollUp initTop={50} showAfter={700}>
//           <M_ScrollScreen >
//             {renderedTransactions}
//           </M_ScrollScreen>
//         </O_ScrollUp>
//       </A_Container>
//     </div>
//
//   )
// }