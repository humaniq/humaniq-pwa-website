import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_InputText_H')

class A_InputText_H extends Component {

  render(){
    const {value, handleChange, placeholder, onFocus, error} = this.props

    const hasError = !!error
    return (
      <fieldset className={cn({hasError})}>
        <input
          ref = {node => this.input = node}
          className={cn('input')}
          placeholder={placeholder}
          type="text"
          value={value}
          onFocus={onFocus}
          onChange={e => handleChange(e.target.value)}
        />
      </fieldset>
    )
  }
}

A_InputText_H.propTypes = {
  handleChange: T.func.isRequired,
  value: T.string.isRequired,
  placeHolder: T.string
};

A_InputText_H.defaultProps = {
};

export default A_InputText_H