import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_InputText')

class A_InputText extends Component {

  componentDidUpdate(){
    this.props.setFocus && this.input.focus()
  }

  render(){
    const {value, handleChange, placeholder, error, label, onFocus} = this.props
    const nonEmpty = !!value
    return (
      <fieldset className={cn('root')}>
        <div className={cn('inner')}>
          <input
            ref = {node => this.input = node}
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={e => handleChange(e.target.value)}
            onFocus={onFocus}
          />
          <hr />
          <label className={cn('label', {'non-empty': nonEmpty, error: !!error})}>{label}</label>
        </div>
        <div className={cn('error')}>{error}</div>
      </fieldset>
    )
  }
}

A_InputText.propTypes = {
  handleChange: T.func.isRequired,
  value: T.string.isRequired,
  placeHolder: T.string,
  onFocus: T.func,
  setFocus: T.bool
};

A_InputText.defaultProps = {
};

export default A_InputText