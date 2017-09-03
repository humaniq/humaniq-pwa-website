import React , { Component } from 'react';
import * as T from "prop-types";
import './Log.scss';
import A_Container from 'A_Container';
import {cssClassName} from 'utils';
const cn = cssClassName('O_TransactionLog');
import {dateString} from 'utils/propsValidationHelpers'
import moment from 'moment';
import A_Link from 'A_Link'

class O_TransactionLog extends Component {

  render() {
    const {txHash, block, from, to, time, usdAmount, hmqAmount, status, up} = this.props
    return (
      <div>
        <A_Container type='wide'>
          <table className={cn('asset-stats')}>
            <tbody>
            <tr className={cn('asset-stats__tr', {up})}>
              <td className={cn('asset-stats__td')}>
                <span className={cn('asset-stats__hash')}>TxHash:</span>
                {block && <span className={cn('asset-stats__block')}>Block:</span>}

              </td>
              <td className={cn('asset-stats__td')}>
                <A_Link to={`/hmq-explorer/transaction-log/${txHash}`} className={cn('asset-stats__hash-link')}>{txHash}</A_Link>
                {block && <A_Link to={`/hmq-explorer/block/${block}`} className={cn('asset-stats__hash-link')}>{block}</A_Link>}
              </td>
              <td className={cn('asset-stats__td')}>
                {from && <span className={cn('asset-stats__from')}>From:</span>}
                {to && <span className={cn('asset-stats__to')}>To:</span>}
              </td>
              <td className={cn('asset-stats__td')}>
                {from && <A_Link to={`/hmq-explorer/token-holders/${from}`} className={cn('asset-stats__hash-link')}>{from}</A_Link>}
                {to && <A_Link to={`/hmq-explorer/token-holders/${to}`} className={cn('asset-stats__hash-link')}>{to}</A_Link>}
              </td>
              <td className={cn('asset-stats__td')}>
                {hmqAmount && <span className={cn('asset-stats__price-hmq')}>{hmqAmount} HMQ</span>}
                {usdAmount && <span className={cn('asset-stats__price-usd')}>${usdAmount} USD</span>}
              </td>
              <td className={cn('asset-stats__td')}>
                {time && <small className={cn('asset-stats__time asset-stats__time--success')}>
                  <i className={cn('asset-stats__icon', {confirmed: status === 'confirmed'})}></i>
                  {moment(time).fromNow()}
                </small>}
              </td>
            </tr>
            </tbody>
          </table>
        </A_Container>
      </div>
    )
  }
}


O_TransactionLog.propTypes = {
  txHash: T.string.isRequired,
  block: T.number,
  from: T.string,
  to: T.string,
  time: dateString,
  usdAmount: T.string,
  hmqAmount: T.string,
  status: T.string,
};

export default O_TransactionLog