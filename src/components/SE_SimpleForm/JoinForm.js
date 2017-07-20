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
      companyWebsite: '',
      businessDescription: ''
    },
    submitted: false,
    errors: {
      email: '',
      companyWebsite: '',
      businessDescription: ''
    }
  }


  onSubmit = (handleSubmit) => (e) => {
    e.preventDefault()
    const {values} = this.state
    if (this.validate(values)){
      handleSubmit(values)
      this.setState({submitted: true})
    }
  }

  validate(values){
    let errors = {};

    for (let valueName in values) {
      const value = values[valueName]
      switch(valueName){
        case 'email':
          if (!value) {
            errors[valueName] = 'Please fill out our email form'
          } else if (!validateEmail(value)) {
            errors[valueName] = 'Looks like an invalid email address'
          } else {
            errors[valueName] = ''
          }
          break;
        case 'companyWebsite':
          if (!value) {
            errors[valueName] = 'Please fill website name field'
          } else if (!validateWebsiteName(value)) {
            errors[valueName] = 'Looks like an invalid url address'
          } else {
            errors[valueName] = ''
          }
          break;
        case 'businessDescription':
          if(!value){
            errors[valueName] = 'Please fill description field'
          } else {
            errors[valueName] = ''
          }
          break;
      }
    }

    this.setState({errors: {...this.state.errors, ...errors}})
    const valid = Object.keys(errors).every(key => errors[key] === '')
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
      values: {email, companyWebsite, businessDescription},
      errors,
      submitted,
    } = this.state

    console.log(submitted)
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
              label="Email"
              placeholder="your@email.com"
              error={errors.email}
              handleChange={text => this.onChange('email', text, errors.email)}
            />
            <A_InputText
              value={companyWebsite}
              onChange
              label="Website"
              placeholder="your-company-website.com"
              error={errors.companyWebsite}
              handleChange={text => this.onChange('companyWebsite', text, errors.companyWebsite)}
            />
            <A_InputText
              value={businessDescription}
              onChange
              label="Business description"
              placeholder="What are you building?"
              error={errors.businessDescription}
              handleChange={text => this.onChange('businessDescription', text, errors.businessDescription)}
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