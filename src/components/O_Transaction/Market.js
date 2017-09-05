import React , { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import A_Container from 'A_Container';
import {cssClassName} from 'utils';
const cn = cssClassName('hmq-card');
import A_Link from 'A_Link'
import moment from 'moment';
import {dateString} from 'utils/propsValidationHelpers'

class O_TransactionMarket extends Component {

  render() {
    const {address, rank, price, pair, usdAmount, hmqAmount, url, time, onTop} = this.props;
    return (
      <A_Container type='wide'>
        <div className={cn({onTop, 'type':'markets'})}>

          <div className={cn('section')}>
            <div className={cn('row')}>
              {address && <div className={cn('label', {'type':'wide'})}>Address:</div>}
              {address && <A_Link to={url} external className={cn('value', {'type': 'link'})}>{address}</A_Link>}
            </div>
            <div className={cn('row')}>
              {rank && <div className={cn('label', {'type':'wide'})}>Rank:</div>}
              {rank && <div className={cn('value')}>{rank}</div>}
            </div>
          </div>

          <div className={cn('section')}>
            <div className={cn('row')}>
              {price && <div className={cn('label')}>Price:</div>}
              {price && <div className={cn('value')}>{price}</div>}
            </div>
            <div className={cn('row')}>
              {pair && <div className={cn('label')}>Pair:</div>}
              {pair && <div className={cn('value')}>{pair}</div>}
            </div>
          </div>

          <div className={cn('section')}>
            <div className={cn('row')}>
              {hmqAmount && <div className={cn('value', {'type': 'hmq'})}>{hmqAmount} HMQ</div>}
            </div>
            <div className={cn('row')}>
              {usdAmount && <div className={cn('value', {'type': 'usd'})}>${usdAmount} USD</div>}
            </div>
          </div>

          <div className={cn('section')}>
            <div className={cn('row')}>
              {time && <div className={cn('time-counter', {confirmed: status === 'confirmed'})}>
                {moment(time).fromNow()}
              </div>}
            </div>
          </div>

        </div>
      </A_Container>
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
  time: dateString
};

O_TransactionMarket.defaultProps = {
  time: moment().format()
};

export default O_TransactionMarket