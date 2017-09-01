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

class SE_SimpleFormSubscribeForm extends Component {

  static inputs() {
    return ([
      {
        name: 'email',
        type: 'email',
        required: true,
        label: 'Email',
        placeholder: 'your@email.com',
        customErrors: {
          ifRequired: 'Please fill out our email form'
        }
      }
    ])
  }

  componentWillMount() {
    const inputsState = SE_SimpleFormSubscribeForm.inputs().map((input) => (
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
    const {errors, submitted} = this.props;

    const inputs = SE_SimpleFormSubscribeForm.inputs().map(input => {
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
            {inputs}
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