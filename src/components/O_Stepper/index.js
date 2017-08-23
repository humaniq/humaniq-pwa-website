import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('O_Stepper');

class O_Stepper extends Component {
  state = {
    stepsCompleted: [1]
  };

  setStep = (step) => {
    const { stepsCompleted } = this.state;
    this.setState({ stepsCompleted: [...stepsCompleted, step] });
  };

  render() {
    const { stepsCompleted } = this.state;
    return (
      <div>
        <ul className={cn('list')}>
          <li className={cn('step', { step: this.state.stepsCompleted.includes(1)})} onClick={() => this.setStep(1)}>
            <div className={cn('bar')}></div>
            <div className={cn('dot')}></div>
            <div className={cn('txt')}>Шаг первый</div>
          </li>
          <li className={cn('step', { step: this.state.stepsCompleted.includes(2)})} onClick={() => this.setStep(2)}>
            <div className={cn('bar')}></div>
            <div className={cn('dot')}></div>
            <div className={cn('txt')}>Шаг второй</div>
          </li>
          <li className={cn('step', { step: this.state.stepsCompleted.includes(3)})} onClick={() => this.setStep(3)}>
            <div className={cn('bar')}></div>
            <div className={cn('dot')} ></div>
            <div className={cn('txt')}>Шаг третий</div>
          </li>
        </ul>
      </div>
    )
  }
}

O_Stepper.propTypes = {};

export default O_Stepper