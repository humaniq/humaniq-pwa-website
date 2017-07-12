import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_InputText')

class A_InputText extends Component {

  render(){
    const {value, handleChange, placeholder, error} = this.props
    return (
      <div className={cn('root')}>
        <input
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={e => handleChange(e.target.value)}
        />
        {error &&
          <div className={cn('error')}>{error}</div>
        }
      </div>
    )
  }
}

A_InputText.propTypes = {
  handleChange: T.func.isRequired,
  value: T.string.isRequired,
  placeHolder: T.string,
};

A_InputText.defaultProps = {
}

export default A_InputText

