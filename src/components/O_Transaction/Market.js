import React , { Component } from 'react';
import * as T from "prop-types";
import './Market.scss';
import A_Container from 'A_Container';
import {cssClassName} from 'utils';
const cn = cssClassName('O_TransactionMarket');
import A_Link from 'A_Link'
import moment from 'moment';
import {dateString} from 'utils/propsValidationHelpers'

class O_TransactionMarket extends Component {

  render() {
    const {address, rank, price, pair, usdAmount, hmqAmount, url, up, time} = this.props
    return (
      <div>
        <A_Container type='wide'>
          <table className={cn('asset-stats')}>
            <tbody>
            <tr className={cn('asset-stats__tr', {up})}>
              <td className={cn('asset-stats__td')}>
                <span className={cn('title')}>Address:</span>
                <span className={cn('title')}>Rank:</span>
              </td>
              <td className={cn('asset-stats__td')}>
                <A_Link to={url} type="transactions" external>{address}</A_Link>
                <span className={cn('value')}>{rank}</span>
              </td>
              <td className={cn('asset-stats__td')}>
                <span className={cn('title')}>Price:</span>
                <span className={cn('title')}>Pair:</span>
              </td>
              <td className={cn('asset-stats__td')}>
                <span className={cn('value')}>{price}</span>
                <span className={cn('value')}>{pair}</span>
              </td>
              <td className={cn('asset-stats__td')}>
                <span className={cn('value-bold')}>{hmqAmount} HMQ</span>
                <span className={cn('value')}>${usdAmount} USD</span>
              </td>
              <td className={cn('asset-stats__td')}>
                <small className={cn('asset-stats__time asset-stats__time--success')}>
                  <i className={cn('asset-stats__icon', {confirmed: status === 'confirmed'})}></i>
                  {moment(time).fromNow()}
                </small>
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
  usdAmount: T.string.isRequired,
  hmqAmount: T.string.isRequired,
  time: dateString.isRequired,
};

export default O_TransactionMarket