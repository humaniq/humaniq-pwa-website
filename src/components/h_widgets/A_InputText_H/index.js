import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_InputText_H')

class A_InputText_H extends Component {

  render(){
    const {value, handleChange, placeholder, error} = this.props
    return (
      <fieldset className={cn()}>
        <input
          ref = {node => this.input = node}
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={e => handleChange(e.target.value)}
        />
        <div className={cn('error')}>{error}</div>
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