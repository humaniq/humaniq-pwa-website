import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('SE_HmqTest');
import O_Transaction from 'O_Transaction';


class SE_HmqTest extends Component {

  render() {
    return (
      <div>
        <div className={cn('content')}>
          <O_Transaction type="log" />
          <O_Transaction type="log" />
          <O_Transaction type="log" />
        </div>

      </div>
    )
  }
}


SE_HmqTest.propTypes = {};

export default SE_HmqTest
