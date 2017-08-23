import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('SE_HmqTest');
import O_Transaction from 'O_Transaction';


class SE_HmqTest extends Component {
  render() {
    return (
      <div>
        <div className={cn('content')}>
          <O_Transaction type="log" {...{txHash: 'txHash', block: 'block', from: 'from', to: 'to', time: 'to', usdAmount: 'usdAmount', hmqAmount: 'hmqAmount'}}/>
          <O_Transaction type="log" {...{txHash: 'txHash', block: 'block', from: 'from', to: 'to', time: 'to', usdAmount: 'usdAmount', hmqAmount: 'hmqAmount'}}/>
          <O_Transaction type="log" {...{txHash: 'txHash', block: 'block', from: 'from', to: 'to', time: 'to', usdAmount: 'usdAmount', hmqAmount: 'hmqAmount'}}/>
        </div>

      </div>
    )
  }
}


SE_HmqTest.propTypes = {};

export default SE_HmqTest
