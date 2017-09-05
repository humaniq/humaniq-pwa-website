import React, { Component } from "react";
import {validateEmail, validateWebsiteName} from 'utils/validateHelpers'


export default (ComposedComponent) => class FormHoc extends Component {

  state = {
    values: {},
    submitted: false,
    errors: {},
    validationRules: {}
  };

  onStateDataCatch = (fieldsProps) => {

    let values, validationRules;

    fieldsProps.forEach(fieldProp => {
      values = {...values, [fieldProp.name]: ''};
      validationRules = {...validationRules,
        [fieldProp.name]: {...fieldProp.validationRules}}
    });

    this.setState({values, errors: values, validationRules});

  };

  onChange = (name, value) => {
    const {validationRules} = this.state;
    if (this.state.errors[name]) {
      this.validate({[name]: value}, validationRules);
    }
    this.setState({values: {...this.state.values, [name]:value}})
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.onSubmit(this.props.handleSubmit)();
  };

  onSubmit = (handleSubmit) => () => {
    const {values, validationRules} = this.state;
    if (this.validate(values, validationRules)){
      handleSubmit(values);
      this.setState({submitted: true})
    }
  };

  validate(values, valRules) {
    let errors = {};

    for (let valueName in values) {
      if (values.hasOwnProperty(valueName)) {

        const value = values[valueName];
        const validationRules = valRules[valueName];

        for (let ruleName in validationRules) {

          if (validationRules.hasOwnProperty(ruleName)) {

            let customError = validationRules[ruleName] !== 'default error'
              ? validationRules[ruleName]
              : false;

            if (ruleName === 'isEmail' && value) {
              if (!validateEmail(value)) {
                errors[valueName] = customError || 'Looks like an invalid email address';
                break;
              } else {
                errors[valueName] = ''
              }
            }
            else if(ruleName === 'isUrl' && value) {
              if (!validateWebsiteName(value)) {
                errors[valueName] = customError || 'Looks like an invalid url address';
                break;
              } else {
                errors[valueName] = ''
              }
            }
            else if(ruleName === 'ranged' && value) {
              let max = validationRules[ruleName].max;
              let valLength = value.trim().length;
              let overMax = valLength - max;
              if (max < valLength) {
                errors[valueName] = `Maximum length is 500 characters. The text is larger by ${overMax} character${overMax !== 1 ? 's' : ''}`;
                break;
              } else {
                errors[valueName] = ''
              }
            }
            else if(ruleName === 'required') {
              if (!value) {
                errors[valueName] = customError || 'Please fill this field';
                break;
              } else {
                errors[valueName] = ''
              }
            }
          }
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