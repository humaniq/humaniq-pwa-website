import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_SimpleForm')
import * as T from "prop-types";
import {WithValidation} from 'HOC/WithValidation'
import A_H from 'A_H'
import A_P from 'A_P'
import A_InputText from 'A_InputText'
import Header from './Header'
import A_Btn from 'A_Btn'

// "email": "harry@hogwarts.com",
//   "name": "Harry Potter",
//   "country": "England",
//   "bio": "Harry likes selling magic cookies"


class SE_SimpleFormAmbassadorsForm extends Component {

  render() {
    const {handleSubmit} = this.props;
    const {
      values: {email, name, bio},
      errors,
      submitted,
    } = this.props;

    return (
      <form className={cn('form')} onSubmit={this.props.onFormSubmit}>
        <Header>
          {submitted ||
            <A_Btn
              onClick={this.props.onSubmit(handleSubmit)}
              type='personal-nav-btn'
            >Send</A_Btn>
          }
        </Header>
        {submitted ? (
          <div className={cn('body')}>
            <A_H type='window'>Thank you!</A_H>
            <div className={cn('text')}>
              <A_P type='third'>Your application has been received. We are carefully reviewing your profile, and will contact you within the few days. Thank you for your application!</A_P>
            </div>
            <div className={cn('final-btn')}>
              <A_Btn type="material-r-link-window" to="/">Go back to Humaniq</A_Btn>
            </div>
          </div>
        ) : (
          <div className={cn('body')}>
            <A_H type='window'>Apply for Humaniq</A_H>
            <div className={cn('text')}>
              <A_P type='third'>Tell us about yourself and why you want to become an ambassador, and we'll get back to you.</A_P>
            </div>
            <A_InputText
              value={email}
              onChange
              label="Email"
              placeholder="your@email.com"
              error={errors.email}
              handleChange={text => this.props.onChange('email', text, errors.email)}
            />
            <A_InputText
              value={name}
              onChange
              label="Your name"
              placeholder="Bob Smith"
              error={errors.name}
              handleChange={text => this.props.onChange('name', text, errors.name)}
            />
            <A_InputText
              value={bio}
              onChange
              label="Bio"
              placeholder="Tell us about yourself. Why would you like to become an ambassador?"
              error={errors.bio}
              handleChange={text => this.props.onChange('bio', text, errors.bio)}
            />
          </div>
        )}
      </form>
    )
  }
}

SE_SimpleFormAmbassadorsForm.propTypes = {
  handleSubmit: T.func.isRequired
};

export default WithValidation(SE_SimpleFormAmbassadorsForm);