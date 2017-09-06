import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('hmq-card');

class O_TransactionPlug extends Component {

  render() {
    const {onTop} = this.props;
    return (
      <div className={cn({onTop, 'type':'plug'})}>
        <div className={cn('section')}>
          <div className={cn('row')}>
          </div>
          <div className={cn('row')}>
          </div>
        </div>

        <div className={cn('section')}>
          <div className={cn('row')}>
          </div>
          <div className={cn('row')}>
          </div>
        </div>

        <div className={cn('section')}>
          <div className={cn('row')}>
          </div>
          <div className={cn('row')}>
          </div>
        </div>

        <div className={cn('section')}>
          <div className={cn('row')}></div>
        </div>
      </div>
    )
  }
}

export default O_TransactionPlug