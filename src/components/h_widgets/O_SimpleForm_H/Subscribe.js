import React , { Component } from 'react';
import {cssClassName} from 'utils';
import A_InputText_H from '../A_InputText_H';
import A_Title_H from '../A_Title_H';
import A_Btn_H from '../A_Btn_H';
import SimpleForm from 'HOC/SimpleForm';
import './styles.scss';


const cn = cssClassName('O_SimpleForm_H')

const HOC_CONFIG = {
  fieldNames: ['email'],
  validations: {
    email: ['required', 'email'],
  },
}

const FIELDS_CONFIG = [
  {
    fieldName: 'email',
    placeholder: 'Enter email'
  },
]


class O_SubscribeForm extends Component {

  _createInputs = (fieldsConfig) => (
    fieldsConfig.map(({fieldName, placeholder}) => (
      <A_InputText_H
        key = {`${fieldName}_field`}
        value = {this.props.fields[fieldName].value}
        onChange
        placeholder = {placeholder}
        error = {this.props.fields[fieldName].error}
        handleChange = {
          text => this.props.onFieldChange(fieldName, text)
        }
      />
    ))
  )

  render() {
    const { mix, formHasErrors, handleSubmit } = this.props;

    return (
      <form className={cn([mix])} onSubmit={handleSubmit}>
        <A_Title_H
          mix={cn('title')}
        >
          Sign up for<br/>Humaniq Newsletter
        </A_Title_H>

        {this._createInputs(FIELDS_CONFIG)}

        <A_Btn_H
          mix={cn('submit-btn')}
          formHasErrors={formHasErrors}
          type='submit'
        >
          Send
        </A_Btn_H>

      </form>
    )
  }
}

export default SimpleForm(O_SubscribeForm, HOC_CONFIG)