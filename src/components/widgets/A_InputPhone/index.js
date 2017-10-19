import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_InputText')
import {convert} from "utils/index"

class A_InputPhone extends Component {

  onChange = (e) =>{
    const {handleChange} = this.props
    handleChange(convert.toPhone(e.target.value))
  }

  render(){
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
          <hr />
          <label className={cn('label', {'non-empty': nonEmpty, error: !!error})}>{label}</label>
        </div>
        <div className={cn('error')}>{error}</div>
      </fieldset>
    )
  }
}

A_InputPhone.propTypes = {
  handleChange: T.func.isRequired,
  value: T.string.isRequired,
  placeHolder: T.string,
};

A_InputPhone.defaultProps = {
}

export default A_InputPhone

