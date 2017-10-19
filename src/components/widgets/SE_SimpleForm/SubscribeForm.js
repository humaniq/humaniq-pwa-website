import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_SimpleForm')
import {validateEmail} from 'utils/validateHelpers'
import A_H from 'A_H'
import A_P from 'A_P'
import A_InputText from 'A_InputText'
import Header from './Header'
import A_Btn from 'A_Btn'

class SE_SimpleFormSubscribeForm extends Component {

  state = {
    values: {
      email: ''
    },
    submitted: false,
    error: ''
  }

  onSubmit = (handleSubmit) => () => {
    const {email} = this.state.values
    if (this.validate(email)) {
      handleSubmit({email})
      this.setState({submitted: true})
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.onSubmit(this.props.handleSubmit)()
  }

  validate = (value) => {
    let error
    if (!value) {
      error = 'Please fill out our email form'
    } else if (!validateEmail(value)) {
      error = 'Looks like an invalid email address'
    }
    this.setState({error})
    const valid = !error
    return valid
  }

  onChange = (email, error) => {
    if (error)
      this.validate(email)

    this.setState({values: {email}})
  }

  render() {
    const {handleSubmit} = this.props
    const {values: {email}, error, submitted} = this.state

    return (
      <form  className={cn('form')} onSubmit={this.onFormSubmit}>
        <Header>
          {submitted ||
            <A_Btn
              type='nav-btn'
              onClick={this.onSubmit(handleSubmit)}
            >Subscribe me</A_Btn>
          }
        </Header>
        {submitted ? (
          <div className={cn('body')}>
            <A_H type='window'>Thank you!</A_H>
            <div className={cn('text')}>
              <A_P type='third'>You were added to our newsletter list. You should now expect a welcoming email,
                confirming the subscription. Stay tuned, interesting news are on the way.</A_P>
            </div>
            <div className={cn('final-btn')}>
              <A_Btn type="material-r-link-window" to="/">Go back to Humaniq</A_Btn>
            </div>
          </div>
        ) : (
          <div className={cn('body')}>
            <A_H type='window'>Subscribe to our newsletter</A_H>
            <div className={cn('text')}>
              <A_P type='third'>Enter your email and join the community of more than 25,000+ people worldwide. Receive
                only relevant emails about Humaniq and crypto community. </A_P>
            </div>
            <A_InputText
              value={email}
              onChange
              label="Email"
              placeholder="your@email.com"
              error={error}
              handleChange={text => this.onChange(text, error)}
            />
          </div>
        )}
      </form>
    )
  }
}

SE_SimpleFormSubscribeForm.propTypes = {
  handleSubmit: T.func.isRequired
};

export default SE_SimpleFormSubscribeForm