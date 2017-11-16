import React , { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('hmq-card');
import moment from 'moment';
import {dateString} from 'utils/propsValidationHelpers';
import A_Link from 'A_Link'

class O_TransactionHolder extends Component {

  render() {
    const {address, rank, pecentage, txns, usdAmount, hmqAmount, time, onTop} = this.props;
    return (
      <div className={cn({onTop, 'type':'holders'})}>

        <div className={cn('section')}>
          <div className={cn('row')}>
            {address && <div className={cn('label', {'type':'wide'})}>Address:</div>}
            {address && <A_Link to={`/hmq-explorer/token-holders/${address}`} type='hmq-card'>{address}</A_Link>}
          </div>
          <div className={cn('row')}>
            {rank && <div className={cn('label', {'type':'wide'})}>Rank:</div>}
            {rank && <div className={cn('value')}>{rank !== 1 ? rank : '1 (Bittrex)'}</div>}
          </div>
        </div>

        <div className={cn('section')}>
          <div className={cn('row')}>
            {pecentage && <div className={cn('label', {'type':'wide'})}>Pecentage:</div>}
            {pecentage && <div className={cn('value')}>{pecentage} %</div>}
          </div>
          <div className={cn('row')}>
            {txns && <div className={cn('label', {'type':'wide'})}>Txns:</div>}
            {txns && <div className={cn('value')}>{txns}</div>}
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

        <div className={cn('section', {'align-content': 'center'})}>
          <div className={cn('row')}>
            {time && <div className={cn('time-counter', {confirmed: status === 'confirmed'})}>
              {moment(time).fromNow()}
            </div>}
          </div>
        </div>

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



