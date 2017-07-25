import React , { Component } from 'react';
import * as T from "prop-types";
import './Log.scss';
import A_Container from 'A_Container';
import {cssClassName} from 'utils';
const cn = cssClassName('O_TransactionLog');

class O_TransactionMarket extends Component {


  render() {
    const {address, rank, price, pair, usdAmount, hmqAmount} = this.props
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
                <span className={cn('asset-stats__from')}>Price:</span>
                <span className={cn('asset-stats__to')}>Pair:</span>
              </td>
              <td className={cn('asset-stats__td')}>
                <a href="javascript:void(0);" className={cn('asset-stats__from-link')}>{price}</a>
                <a href="javascript:void(0);" className={cn('asset-stats__to-link')}>{pair}</a>
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


O_TransactionMarket.propTypes = {
  address: T.string.isRequired,
  rank: T.number.isRequired,
  price: T.string.isRequired,
  pair: T.string.isRequired,
  usdAmount: T.number.isRequired,
  hmqAmount: T.number.isRequired,
};

export default O_TransactionMarket