import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_SimpleForm');
import * as T from "prop-types";
import FormHoc from 'HOC/FormHoc';
import A_H from 'A_H';
import A_P from 'A_P';
import A_InputText from 'A_InputText';
import Header from './Header';
import A_Btn from 'A_Btn';

// "email": "harry@hogwarts.com",
//   "name": "Harry Potter",
//   "country": "England",
//   "bio": "Harry likes selling magic cookies"

const fieldsSettings = [
  {
    name: 'email',
    type: 'email',
    required: true,
    label: 'Email',
    placeholder: 'your@email.com',
    customErrors: {}
  },
  {
    name: 'name',
    type: 'text',
    required: true,
    label: 'Your name',
    placeholder: 'Bob Smith',
    customErrors: {
      ifRequired: 'Please fill out your full name'
    }
  },
  {
    name: 'bio',
    type: 'text',
    required: true,
    label: 'Bio',
    placeholder: 'Tell us about yourself. Why would you like to become an ambassador?',
    customErrors: {
      ifRequired: 'Please fill bio field'
    }
  }
];

class SE_SimpleFormAmbassadorsForm extends Component {

  componentWillMount() {
    this.props.throwHocStateData(fieldsSettings);
  }


  render() {
    const {errors, submitted, onSubmit:{handleSubmit}}  = this.props;

    const fields = fieldsSettings.map(({name, label, placeholder}) => {
      return (
        <A_InputText
          key = {name}
          value = {this.props.values[name] || ''}
          onChange
          label = {label}
          placeholder = {placeholder}
          error = {errors[name]}
          handleChange = {
            text => this.props.onChange(name, text)
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
            {fields}
          </div>
        )}
      </form>
    )
  }
}

SE_SimpleFormAmbassadorsForm.propTypes = {
  handleSubmit: T.func.isRequired
};

export default FormHoc(SE_SimpleFormAmbassadorsForm);