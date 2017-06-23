import React, {Component} from 'react';
import * as T from "prop-types";
import styles from './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_Subscribe')
import A_Button from 'A_Button'
import {validateEmail} from 'utils/validateHelpers'
import M_Tooltip from 'M_Tooltip'

class M_Subscribe extends Component {

  state = {
    email: '',
    valid: true,
    validated: false,
    submitted: false,
    error: ''
  }

  componentDidMount(){
    this.node.focus();

  }

  onSubmit = (e) => {
    e.preventDefault()
    const email = this.state.email
    if (this.validate(email)) {
      this.props.onSubmit(email)
      this.setState({submitted: true})
    }
  }

  validate = (value) => {
    let error
    if (!value) {
      error = 'Please fill out our email form'
    } else if (!validateEmail(value)) {
      error = 'Looks like an invalid email address'
    }
    const valid = !error
    this.setState({validated: true, valid, error})
    return valid
  }

  onChange = (e, error) => {
    const email = e.target.value

    if (error)
      this.validate(email)

    this.setState({email})
  }

  render() {
    const {email, valid, validated, error, submitted} = this.state

    return (
      <form onSubmit={this.onSubmit} className={cn('form', {submitted})}>
        <div className={cn('wrapper', {submitted})}>
          <M_Tooltip message={error} hide={!validated && !valid}>
            <input
              ref={node => this.node = node}
              placeholder="Enter your email"
              type="text"
              value={email}
              onChange={(e) => this.onChange(e, error)}
            />
          </M_Tooltip>
          <span className={cn('submit')}>
            <A_Button type="submit">Subscribe</A_Button>
          </span>
          <div className={cn('done', {submitted})}>
            <img src="/img/notify-checkmark.svg"/>
          </div>
        </div>
        <p className={cn('tip')}>Want to be informed? Subscribe to our Newsletter.</p>
      </form>
    )
  }
}

M_Subscribe.propTypes = {
  onSubmit: T.func.isRequired
};

M_Subscribe.defaultProps = {}

export default M_Subscribe
