import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('O_Stepper');

class O_Stepper extends Component {

  render() {
    return (
      <div>
        <ul className={cn('list')}>
          <li className={`${cn('step')} ${cn('step--done')}`}>
            <div className={cn('bar')}></div>
            <div className={cn('dot')}></div>
            <div className={cn('txt')}>Lorem ipsum dolor.</div>
          </li>
          <li className={`${cn('step')} ${cn('step--next')}`}>
            <div className={cn('bar')}></div>
            <div className={cn('dot')}></div>
            <div className={cn('txt')}>Lorem ipsum dolor.</div>
          </li>
          <li className={cn('step')}>
            <div className={cn('bar')}></div>
            <div className={cn('dot')}></div>
            <div className={cn('txt')}>Lorem ipsum dolor.</div>
          </li>
        </ul>
      </div>
    )
  }
}

O_Stepper.propTypes = {};

export default O_Stepper