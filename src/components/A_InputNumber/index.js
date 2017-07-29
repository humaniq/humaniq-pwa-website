import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'

const cn = cssClassName('A_InputText')

class A_InputNumber extends Component {

  onChange = (e) => {
    const {prefix, handleChange, max} = this.props
    let value = e.target.value.replace(/\D/g, '')
    if (max) {
      value = value.substr(0, max)
    }
    handleChange(prefix + value)
  }

  render() {
    const {value, placeholder, error, label} = this.props
    const nonEmpty = !!value
    return (
      <fieldset className={cn('root')}>
        <div className={cn('inner')}>
          <input
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={this.onChange}
          />
          <hr/>
          <label className={cn('label', {'non-empty': nonEmpty, error: !!error})}>{label}</label>
        </div>
        <div className={cn('error')}>{error}</div>
      </fieldset>
    )
  }
}

A_InputNumber.propTypes = {
  handleChange: T.func.isRequired,
  value: T.string.isRequired,
  placeHolder: T.string,
  prefix: T.string,
  max: T.number
};

A_InputNumber.defaultProps = {
  prefix: ''
}

export default A_InputNumber

