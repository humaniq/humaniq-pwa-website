import React, { Component } from 'react';
import * as T from "prop-types";
import A_H from 'A_H'
import A_P from 'A_P'
import M_InfoBlock from 'M_InfoBlock'
import O_Сrumbs from 'O_Сrumbs'
import A_Container from 'A_Container';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HmqBlock')

class SE_HmqBlock extends Component {

  render() {
    const {blockNumber, height, fromNow, timeStamp, hash, parentHash, difficulty, gasLimit, gasUsed} = this.props

    return (
      <div>
        <A_Container type='equal'>
          <O_Сrumbs
            path={[
              {name: 'Token Holders', url: `/hmq-explorer/token-holders`},
              {name: blockNumber, url: `/hmq-explorer/blocks/${blockNumber}`}
            ]}
          />
          <M_InfoBlock>
            <A_H type='hmq-e'>Block Height</A_H>
            <A_P type='hmq-e'>{height}</A_P>
            <A_H type='hmq-e'>Time Stamp</A_H>
            <A_P type='hmq-e'><span className={cn('from-now')}>{fromNow} </span>({timeStamp})</A_P>
            <A_H type='hmq-e'>Hash</A_H>
            <A_P type='hmq-e'>{hash}</A_P>
            <A_H type='hmq-e'>Parent Hash</A_H>
            <A_P type='hmq-e'>{parentHash}</A_P>
            <A_H type='hmq-e'>Difficulty</A_H>
            <A_P type='hmq-e'>{difficulty}</A_P>
            <A_H type='hmq-e'>Gas Limit</A_H>
            <A_P type='hmq-e'>{gasLimit}</A_P>
            <A_H type='hmq-e'>Gas Used</A_H>
            <A_P type='hmq-e'>{gasUsed}</A_P>
          </M_InfoBlock>
        </A_Container>
      </div>

    )
  }
}

SE_HmqBlock.propTypes = {
  // totalTransactions: T.number.isRequired,
  // balance: T.string.isRequired,
  // address: T.string.isRequired
}

SE_HmqBlock.defaultProps = {
}

export default SE_HmqBlock
