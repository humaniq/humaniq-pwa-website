import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import Hero from './Hero'
const cn = cssClassName('SE_Hmq')
import Search from './Search';
import O_Transaction from 'O_Transaction'
import Waypoint from 'react-waypoint'

import O_ScrollUp from "O_ScrollUp";

class SE_Hmq extends Component {

  state = {
    stickySearch: false,
  }

  componentDidMount() {
    __CLIENT__ && window.addEventListener('scroll', this.handleScroll);
    this.forceUpdate()
  }

  componentWillUnmount() {
    __CLIENT__ && window.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll = () => {
    if (this.state.stickySearch && (window.pageYOffset < (this.helperNode.offsetTop + 70))) {
      this.setState({stickySearch: false})
    } else if (!this.state.stickySearch && (window.pageYOffset > (this.helperNode.offsetTop + 70))) {
      this.setState({stickySearch: true})
    }
  }

  getTransactions(transactions, requestHmqTransactions){
    return (transactions.map( (props, i) => {
      return (
        <div key ={props.txHash}>
          <O_Transaction {...{...props}} type="log"/>
          {i + 10 === transactions.length &&
            <Waypoint
              scrollableAncestor={'window'}
              onEnter={requestHmqTransactions}
            />
          }
        </div>
      )
    }))

  }
  render() {
    const {chartProps, transactions, requestHmqTransactions} = this.props
    const {stickySearch} = this.state
    const renderedTransactions = this.getTransactions(transactions, requestHmqTransactions)
    return (
      <div>
        <Hero {...{chartProps}}/>
        <div ref={node => this.helperNode = node} style={{height: stickySearch ? 216 : 0}} />
        <div className={cn('search', {stickySearch})} >
          <Search />
        </div>
        <O_ScrollUp initTop={220} showAfter={700}>
          {renderedTransactions}
        </O_ScrollUp>
      </div>

    )
  }
}

SE_Hmq.propTypes = {
  chartProps: T.object.isRequired,
  transactions: T.array.isRequired
}

SE_Hmq.defaultProps = {
}

export default SE_Hmq
