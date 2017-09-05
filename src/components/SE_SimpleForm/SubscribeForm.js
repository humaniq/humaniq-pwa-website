import React, { Component } from "react";
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_SimpleForm');
import FormHoc from 'HOC/FormHoc'
import A_H from 'A_H'
import A_P from 'A_P'
import A_InputText from 'A_InputText'
import Header from './Header'
import A_Btn from 'A_Btn'

const fieldsSettings = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'your@email.com',
    validationRules: {
      isEmail: 'default error',
      required: 'Please fill out our email form'
    }
  }
];

class SE_SimpleFormSubscribeForm extends Component {

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
      <form  className={cn('form')} onSubmit={this.props.onFormSubmit}>
        <Header>
          {submitted ||
          <A_Btn
            type='nav-btn'
            onClick={this.props.onSubmit(handleSubmit)}
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
            {fields}
          </div>
        )}
      </form>
    )
  }
}

SE_SimpleFormSubscribeForm.propTypes = {
  handleSubmit: T.func.isRequired
};

export default FormHoc(SE_SimpleFormSubscribeForm);