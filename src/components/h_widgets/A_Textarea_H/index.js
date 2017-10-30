import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Textarea_H')

class A_Textarea_H extends Component {

  render(){
    const {value, handleChange, placeholder, onFocus, error} = this.props

    const hasError = !!error
    return (
      <fieldset className={cn({hasError})}>
        <textarea
          ref = {node => this.input = node}
          className={cn('textarea')}
          placeholder={placeholder}
          value={value}
          onFocus={onFocus}
          onChange={e => handleChange(e.target.value)}
        />
      </fieldset>
    )
  }
}

A_Textarea_H.propTypes = {
  handleChange: T.func.isRequired,
  value: T.string.isRequired,
  placeHolder: T.string
};

A_Textarea_H.defaultProps = {
};

export default A_Textarea_H