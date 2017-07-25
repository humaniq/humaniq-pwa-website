import React , { Component } from 'react';
import * as T from "prop-types";
import './Holder.scss';
import A_Container from 'A_Container';
import {cssClassName} from 'utils';
const cn = cssClassName('O_TransactionHolder');

class O_TransactionHolder extends Component {

  render() {
    const {address, rank, pecentage, txns, usdAmount, hmqAmount} = this.props
    return (
      <div>
        <A_Container type='wide'>
          <table className={cn('asset-stats')}>
            <tbody>
            <tr className={cn('asset-stats__tr')}>
              <td className={cn('asset-stats__td')}>
                <span className={cn('asset-stats__hash')}>Address:</span>
                <span className={cn('asset-stats__block')}>Rank:</span>
              </td>
              <td className={cn('asset-stats__td')}>
                <a href="javascript:void(0);" className={cn('asset-stats__hash-link')}>{address}</a>
                <a href="javascript:void(0);" className={cn('asset-stats__block-link')}>{rank}</a>
              </td>
              <td className={cn('asset-stats__td')}>
                <span className={cn('asset-stats__from')}>Pecentage:</span>
                <span className={cn('asset-stats__to')}>Txns:</span>
              </td>
              <td className={cn('asset-stats__td')}>
                <a href="javascript:void(0);" className={cn('asset-stats__from-link')}>{pecentage}</a>
                <a href="javascript:void(0);" className={cn('asset-stats__to-link')}>{txns}</a>
              </td>
              <td className={cn('asset-stats__td')}>
                <span className={cn('asset-stats__price-hmq')}>{hmqAmount} HMQ</span>
                <span className={cn('asset-stats__price-usd')}>${usdAmount} USD</span>
              </td>
              <td className={cn('asset-stats__td')}>
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
  address: T.string.isRequired,
  rank: T.number.isRequired,
  pecentage: T.number.isRequired,
  txns: T.string.isRequired,
  usdAmount: T.number.isRequired,
  hmqAmount: T.number.isRequired,
};

export default O_TransactionHolder



