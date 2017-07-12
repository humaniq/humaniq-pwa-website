import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_SimpleForm')
import * as T from "prop-types";
import {validateEmail, validateWebsiteName} from 'utils/validateHelpers'
import A_H from 'A_H'
import A_P from 'A_P'
import A_InputText from 'A_InputText'
import Header from './Header'
import A_Btn from 'A_Btn'

class SE_SimpleFormJoinForm extends Component {

  state = {
    values: {
      email: '',
      website: '',
      description: ''
    },
    submitted: false,
    errors: {
      email: '',
      website: '',
      description: ''
    }
  }


  onSubmit = (handleSubmit) => (e) => {
    e.preventDefault()
    const {email, website, description} = this.state.values
    if (this.validate({email}) && this.validate({website}) && this.validate({description})) {
      handleSubmit({email, website, description})
      this.setState({submitted: true})
    }
  }

  validate = (obj) => {
    const [name, value] = Object.entries(obj)[0]
    console.log(name, value)
    let error
    switch(name){
      case 'email':
        if (!value) {
          error = 'Please fill out our email form'
        } else if (!validateEmail(value)) {
          error = 'Looks like an invalid email address'
        }
        break;
      case 'website':
        if (!value) {
          error = 'Please fill website name field'
        } else if (!validateWebsiteName(value)) {
          error = 'Looks like an invalid url address'
        }
        break;
      case 'description':
        !value && (error = 'Please fill description field')
        break;
    }

    this.setState({errors: {...this.state.errors, [name]:error}})
    const valid = !error
    return valid
  }

  onChange = (name, value, error) => {
    if (error)
      this.validate({[name]: value})

    this.setState({values: {...this.state.values, [name]:value}})
  }

  render() {
    const {handleSubmit} = this.props
    const {
      values: {email, website, description},
      errors,
      submitted,
    } = this.state

    return (
      <form onSubmit={this.onSubmit(handleSubmit)} className={cn('form')}>
        <Header>
          {submitted ||
          <A_Btn
            type='nav-btn'
            btnType="submit"
          >Send</A_Btn>
          }
        </Header>
        {submitted ? (
          <div className={cn('body')}>
            <A_H type='window'>Thank you!</A_H>
            <div className={cn('text')}>
              <A_P type='third'>Your application has been received. We will carefully review your website, and will contact you within the few days. Thank you for your application!</A_P>
            </div>
            <A_Btn type="window" to="/">Go back to Humaniq</A_Btn>
          </div>
        ) : (
          <div className={cn('body')}>
            <A_H type='window'>Apply for Humaniq</A_H>
            <div className={cn('text')}>
              <A_P type='third'>Tell us about what you’re working on and we’ll get back to you.</A_P>
            </div>
            <A_InputText
              value={email}
              onChange
              placeholder="your@email.com"
              error={errors.email}
              handleChange={text => this.onChange('email', text, errors.email)}
            />
            <A_InputText
              value={website}
              onChange
              placeholder="yourwebsite.com"
              error={errors.website}
              handleChange={text => this.onChange('website', text, errors.website)}
            />
            <A_InputText
              value={description}
              onChange
              placeholder="What are you building?"
              error={errors.description}
              handleChange={text => this.onChange('description', text, errors.description)}
            />
          </div>
        )}
      </form>
    )
  }
}

SE_SimpleFormJoinForm.propTypes = {
  handleSubmit: T.func.isRequired
};

export default SE_SimpleFormJoinForm