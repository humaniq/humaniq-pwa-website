import React, { Component } from "react";
import {validateEmail, validateWebsiteName} from 'utils/validateHelpers'


export default (ComposedComponent) => class FormHoc extends Component {

  state = {
    values: {},
    submitted: false,
    errors: {},
    validateSettings: {}
  };

  onStateDataCatch = (inputProps) => {

    let values, validateSettings;

    inputProps.forEach(inputProp => {
      values = {...values, [inputProp.name]: ''};
      validateSettings = {...validateSettings,
        [inputProp.name]: {
          'type': inputProp.type,
          'required': inputProp.required || false,
          'customErrors': inputProp.customErrors || null
        }}
    });

    this.setState({
      values: values,
      errors: values,
      validateSettings: validateSettings
    });

  };

  onChange = (name, value, error) => {
    const {validateSettings} = this.state;
    if (error) {
      this.validate({[name]: value}, validateSettings);
    }
    this.setState({values: {...this.state.values, [name]:value}})
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.onSubmit(this.props.handleSubmit)();
  };

  onSubmit = (handleSubmit) => () => {
    const {values, validateSettings} = this.state;
    if (this.validate(values, validateSettings)){
      handleSubmit(values);
      this.setState({submitted: true})
    }
  };

  validate(values, settings) {
    let errors = {};
    for (let valueName in values) {
      if (values.hasOwnProperty(valueName)) {
        const value = values[valueName];
        const validateSettings = settings[valueName];
        const required = settings[valueName].required;
        const customErrors = settings[valueName].customErrors;

        switch (validateSettings.type) {
          case 'email':
            if (required && !value) {
              errors[valueName] = customErrors.ifRequired || 'Please fill email field'
            } else if (!validateEmail(value)) {
              errors[valueName] = 'Looks like an invalid email address'
            } else {
              errors[valueName] = ''
            }
            break;
          case 'url':
            if (!value) {
              errors[valueName] = customErrors.ifRequired || 'Please fill url field'
            } else if (!validateWebsiteName(value)) {
              errors[valueName] = 'Looks like an invalid url address'
            } else {
              errors[valueName] = ''
            }
            break;
          case 'text':
            if (!value) {
              errors[valueName] = customErrors.ifRequired || 'Please fill text field'
            } else {
              errors[valueName] = ''
            }
            break;
        }
      }
    }

    this.setState({errors: {...this.state.errors, ...errors}});
    const valid = Object.keys(errors).every(key => errors[key] === '');
    return valid
  }

  render() {
    return <ComposedComponent {...this.props}
                              throwHocStateData = {this.onStateDataCatch}
                              values = {this.state.values}
                              submitted = {this.state.submitted}
                              errors = {this.state.errors}
                              onChange = {this.onChange}
                              onFormSubmit = {this.onFormSubmit}
                              onSubmit = {this.onSubmit}
                              validate = {this.validate}
    />
  }
};