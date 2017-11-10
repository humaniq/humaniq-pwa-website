import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('hmq-card');

class O_TransactionPlaceholder extends Component {

  render() {
    const {onTop, layout} = this.props;
    return (
      <div className={cn({onTop, 'type': layout}, ['hmq-card_placeholder'])}>
        <div className={cn('section')}>
          <div className={cn('row')} />
          <div className={cn('row')} />
        </div>

        <div className={cn('section')}>
          <div className={cn('row')} />
          <div className={cn('row')} />
        </div>

        <div className={cn('section')}>
          <div className={cn('row')} />
          <div className={cn('row')} />
        </div>

        <div className={cn('section', {'align-content': 'center'})}>
          <div className={cn('row')} />
        </div>
      </div>
    )
  }
}

export default O_TransactionPlaceholder