import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_SimpleForm');
import * as T from "prop-types";
import FormHoc from 'HOC/FormHoc'
import A_H from 'A_H'
import A_P from 'A_P'
import A_InputText from 'A_InputText'
import Header from './Header'
import A_Btn from 'A_Btn'

class SE_SimpleFormJoinForm extends Component {

  static inputs() {
    return ([
      {
        name: 'email',
        type: 'email',
        required: true,
        label: 'Email',
        placeholder: 'your@email.com',
        customErrors: {}
      },
      {
        name: 'companyWebsite',
        type: 'url',
        required: true,
        label: 'Website',
        placeholder: 'your-company-website.com',
        customErrors: {
          ifRequired: 'Please fill website name field'
        }
      },
      {
        name: 'businessDescription',
        type: 'text',
        required: true,
        label: 'Business description',
        placeholder: 'What are you building?',
        customErrors: {
          ifRequired: 'Please fill description field'
        }
      }
    ])
  }

  componentWillMount() {
    const inputsState = SE_SimpleFormJoinForm.inputs().map((input) => (
      {
        name: input.name,
        type: input.type,
        required: input.required || false,
        customErrors: input.customErrors || null
      }
    ));

    this.props.throwHocStateData(inputsState);
  }

  render() {
    const {handleSubmit} = this.props.onSubmit;
    const {errors, submitted,} = this.props;

    const inputs = SE_SimpleFormJoinForm.inputs().map(input => {
      return (
        <A_InputText
          key = {input.name}
          value = {this.props.values[input.name] || ''}
          onChange
          label = {input.label}
          placeholder = {input.placeholder}
          error = {errors[input.name]}
          handleChange = {
            text => this.props.onChange(input.name, text, errors[input.name])
          }
        />
      )
    });

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
            {inputs}
          </div>
        )}
      </form>
    )
  }
}

SE_SimpleFormJoinForm.propTypes = {
  handleSubmit: T.func.isRequired
};

export default FormHoc(SE_SimpleFormJoinForm);