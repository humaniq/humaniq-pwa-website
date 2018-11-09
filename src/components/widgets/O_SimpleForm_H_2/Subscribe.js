import React , { Component } from 'react';
import {cssClassName} from 'utils';
import A_InputText_H from '../A_InputText_H_2';
import A_Btn_H from '../A_Btn_H_2';
import SimpleForm from 'HOC/SimpleForm';
import SocialLinks from '../M_SocialLinks_F';
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
    placeholder: 'Your e-mail'
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
    const { mix, formHasErrors, handleSubmit, submited } = this.props;

    return (
      <div>

        {
          submited ?
            <div className={cn('title')}>
                Great that we are friends now! Thank you for the confidence you have placed in us. Promise no spam.
                <div className={cn('subtitle')}>Keep in touch</div>
                <SocialLinks  mix={cn('social-links')} type="section"/>
            </div>
            : <form className={cn([mix])} onSubmit={handleSubmit}>

                {this._createInputs(FIELDS_CONFIG)}

                <A_Btn_H
                  mix={cn('submit-btn')}
                  formHasErrors={formHasErrors}
                  type='submit'
                >
                  JOIN US
                </A_Btn_H>
              </form>
        }
      </div>

    )
  }
}

export default SimpleForm(O_SubscribeForm, HOC_CONFIG)