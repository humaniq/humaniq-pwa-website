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

class SE_SimpleFormJoinForm extends Component {

  render() {
    const {handleSubmit} = this.props.onSubmit;
    const {
      values: {email, companyWebsite, businessDescription},
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
              <A_P type='third'>Your application has been received. We will carefully review your website, and will contact you within the few days. Thank you for your application!</A_P>
            </div>
            <div className={cn('final-btn')}>
              <A_Btn type="material-r-link-window" to="/">Go back to Humaniq</A_Btn>
            </div>
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
              handleChange={text => this.props.onChange('email', text, errors.email)}
            />
            <A_InputText
              value={companyWebsite}
              onChange
              label="Website"
              placeholder="your-company-website.com"
              error={errors.companyWebsite}
              handleChange={text => this.props.onChange('companyWebsite', text, errors.companyWebsite)}
            />
            <A_InputText
              value={businessDescription}
              onChange
              label="Business description"
              placeholder="What are you building?"
              error={errors.businessDescription}
              handleChange={text => this.props.onChange('businessDescription', text, errors.businessDescription)}
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

export default WithValidation(SE_SimpleFormJoinForm);