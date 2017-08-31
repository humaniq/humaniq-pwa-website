import React , { Component } from 'react';
import * as T from "prop-types";
import './Holder.scss';
import A_Container from 'A_Container';
import {cssClassName} from 'utils';
const cn = cssClassName('O_TransactionHolder');
import moment from 'moment';
import {dateString} from 'utils/propsValidationHelpers';
import A_Link from 'A_Link'

class O_TransactionHolder extends Component {

  render() {
    const {address, rank, pecentage, txns, usdAmount, hmqAmount, time, up} = this.props
    return (
      <div>
        <A_Container type='wide'>
          <table className={cn('asset-stats')}>
            <tbody>
            <tr className={cn('asset-stats__tr', {up})}>
              <td className={cn('asset-stats__td')}>
                {address && <span className={cn('asset-stats__hash')}>Address:</span>}
                {rank && <span className={cn('asset-stats__block')}>Rank:</span>}
              </td>
              <td className={cn('asset-stats__td')}>
                {address && <A_Link to={`/hmq-explorer/token-holders/${address}`} className={cn('asset-stats__hash-link')}>{address}</A_Link>}
                {rank && <span className={cn('value')}>{rank}</span>}
              </td>
              <td className={cn('asset-stats__td')}>
                {pecentage && <span className={cn('asset-stats__from')}>Pecentage:</span>}
                {txns && <span className={cn('asset-stats__to')}>Txns:</span>}
              </td>
              <td className={cn('asset-stats__td')}>
                {pecentage && <span className={cn('value')}>{pecentage} %</span>}
                {txns && <span className={cn('value')}>{txns}</span>}
              </td>
              <td className={cn('asset-stats__td')}>
                {hmqAmount && <span className={cn('asset-stats__price-hmq')}>{hmqAmount} HMQ</span>}
                {usdAmount && <span className={cn('asset-stats__price-usd')}>${usdAmount} USD</span>}
              </td>
              <td className={cn('asset-stats__td')}>
                {time && <small className={cn('asset-stats__time asset-stats__time--success')}>
                  <i className={cn('asset-stats__icon o-asset-stats__icon--success')}></i>
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


O_TransactionHolder.propTypes = {
  address: T.string,
  rank: T.number,
  pecentage: T.string,
  txns: T.number,
  usdAmount: T.string,
  hmqAmount: T.string,
  time: dateString,
};

export default O_TransactionHolder



