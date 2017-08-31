import React, { Component } from "react";
import {validateEmail, validateWebsiteName} from 'utils/validateHelpers'


export default (ComposedComponent) => class FormHoc extends Component {

  state = {
    values: {},
    submitted: false,
    errors: {}
  };

  onStateDataCatch = (inputTypes) => {
    let nextValues, nextErrors;
    inputTypes.forEach(inputType => {
      nextValues = Object.assign({}, nextValues, {
        [inputType]: ''
      });
      nextErrors = Object.assign({}, nextErrors, {
        [inputType]: ''
      });
    });
    this.setState({
      values: nextValues,
      errors: nextErrors
    });
  };

  onChange = (name, value, error) => {
    if (error) {
      this.validate({[name]: value});
    }
    this.setState({values: {...this.state.values, [name]:value}})
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.onSubmit(this.props.handleSubmit)();
  };

  onSubmit = (handleSubmit) => () => {
    const {values} = this.state;
    if (this.validate(values)){
      handleSubmit(values);
      this.setState({submitted: true})
    }
  };

  validate(values) {
    let errors = {};

    for (let valueName in values) {
      if (values.hasOwnProperty(valueName)) {
        const value = values[valueName];
        switch (valueName) {
          case 'bio':
            if (!value) {
              errors[valueName] = 'Please fill bio field'
            } else {
              errors[valueName] = ''
            }
            break;
          case 'businessDescription':
            if (!value) {
              errors[valueName] = 'Please fill description field'
            } else {
              errors[valueName] = ''
            }
            break;
          case 'companyWebsite':
            if (!value) {
              errors[valueName] = 'Please fill website name field'
            } else if (!validateWebsiteName(value)) {
              errors[valueName] = 'Looks like an invalid url address'
            } else {
              errors[valueName] = ''
            }
            break;
          case 'email':
            if (!value) {
              errors[valueName] = 'Please fill out our email form'
            } else if (!validateEmail(value)) {
              errors[valueName] = 'Looks like an invalid email address'
            } else {
              errors[valueName] = ''
            }
            break;
          case 'name':
            if (!value) {
              errors[valueName] = 'Please fill out your full name'
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