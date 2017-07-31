import React, {Component} from 'react';
import * as T from "prop-types";
import styles from './subscribe.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HomeSubscribe')
import A_Button from 'A_Button'
import A_Btn from 'A_Btn'

import {validateEmail} from 'utils/validateHelpers'
import M_Tooltip from 'M_Tooltip'

class SE_HomeSubscribe extends Component {

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
      this.node.blur();
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
            {/*<A_Button type="submit">Subscribe</A_Button>*/}
            <button className={cn('button')} type="submit">Subscribe</button>

          </span>
          <div className={cn('done', {submitted})}>
            <img src="/img/white-checkmark.svg"/>
          </div>
        </div>
        <p className={cn('tip')}>Want to be informed? Subscribe to our Newsletter.</p>
      </form>
    )
  }
}

SE_HomeSubscribe.propTypes = {
  onSubmit: T.func.isRequired
};

SE_HomeSubscribe.defaultProps = {}

export default SE_HomeSubscribe
