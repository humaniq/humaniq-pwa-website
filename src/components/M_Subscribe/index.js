import React, {Component} from 'react';
import * as T from "prop-types";
import styles from './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_Subscribe')
import A_Button from 'A_Button'
import {validateEmail} from 'utils/validateHelpers'

class M_Subscribe extends Component {

  state = {
    email: '',
    valid: false,
    validated: false,
    submitted: false
  }

  onSubmit = (e) => {
    e.preventDefault()
    const email = this.state.email
    if (this.validate(email)){
      this.props.onSubmit(email)
      this.setState({submitted: true})
    }
  }

  validate = (value) => {
    const valid = validateEmail(value)
    this.setState({validated: true, valid})
    return valid
  }

  onChange = (e, error) => {
    const email = e.target.value

    if (error)
      this.validate(email)

    this.setState({email})
  }

  render() {
    const {email, valid, validated, submitted} = this.state

    const error = validated && !valid
    return (
      <form onSubmit={this.onSubmit} className={cn('form', {device: 'desktop', submitted})}>
        <input className={cn('input', {error})} type="text" name="name" value={email}
               onChange={(e) => this.onChange(e, error)}/>
        <span className={cn('submit')}>
          <A_Button type="submit">Subscribe</A_Button>
        </span>
      </form>
    )
  }
}

M_Subscribe.propTypes = {
  onSubmit: T.func.isRequired
};

M_Subscribe.defaultProps = {}

export default M_Subscribe
