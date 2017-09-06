import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('hmq-card');

class O_TransactionPlug extends Component {

  render() {
    const {onTop} = this.props;
    return (
      <div className={cn({onTop, 'type':'plug'})} />
    )
  }
}

export default O_TransactionPlug