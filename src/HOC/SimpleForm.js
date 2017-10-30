import React, { Component } from "react";
import {validateEmail, validateWebsiteName, validateMaxLength} from 'utils/validateHelpers'
import update from 'immutability-helper';

const defaultError = {
  email: 'Looks like an invalid email address',
  url: 'Looks like an invalid url address',
  maxLengh: max => `Maximum length is ${max} characters.`,
  required: 'Please fill this field'
}

const _valFuncObj = {
  email: validateEmail,
  url: validateWebsiteName,
  maxLengh: {val: validateMaxLength, defaultoption: 100},
  required: val => val && !!val.length
};

export default (ComposedComponent, config)  => class FormHoc extends Component {

  state = {
    pagination: this.setFormPagination(config.pagination, config.fieldNames),
    fields: this.getInitValues(config.fieldNames),
    needValidation: false,
    validations: this.getFormValidationConfig(config.validations, config.customErrors),
    formValid: false,
    submited: false
  };


  setFormPagination(pagination = false, fieldNamesArray = []) {

    if(!fieldNamesArray.length){
      this.throwError('empty config.fieldNames')
    }

    return ({
      pagesLength: pagination ? fieldNamesArray.length : 1
    });

  }


  getInitValues(fieldNamesArray) {
    let formFields = [];
    const res = {};

    fieldNamesArray.forEach((field) => {
      if(config.pagination) {
        formFields = [...formFields, ...field];
      }
      else {
        formFields = [...formFields, field]
      }
    });

    formFields.forEach((fieldName) => {
      res[fieldName] = {
        value: '',
        error: null,
        valid: false
      }
    });

    return res

  }


  getFormValidationConfig(validations = {}, customErrors = {}) {
    let
      res = {};

    for (let fieldName in validations) {
      if(validations.hasOwnProperty(fieldName)) {
        res[fieldName] = this.getFieldValidationConfig(validations[fieldName], fieldName, customErrors[fieldName])
      }
    }

    return res
  }

  getFieldValidationConfig (fieldConfig, fieldName, customError){
    let type, error, option;

    switch(_typeOf(fieldConfig)){
      case 'array':
        let types = []
        fieldConfig.forEach(config => {
          const type = this.getFieldValidationConfig(config, fieldName);
          types = types.concat(type)
        })
        return types
      case 'object':
        type = fieldConfig.type
        error = customError && customError[type] || defaultError[type]
        option = fieldConfig.option
        return ([this.getInitValType({type, error, option})])
      case 'string':
        type = fieldConfig
        error = customError || defaultError[type]
        return [this.getInitValType({type, error})]
      case 'undefined':
        return []
    }
  }

  getInitError(errorConfig, type){
    if(_typeOf(errorConfig) === 'array'){
      return errorConfig[type]
    } else {
      return errorConfig
    }
  }

  getInitValType({type, option, error}){
    const errorFunc = _typeOf(error) === 'function';


    return({type, option, errorFunc, error})
  }

  throwError(error){
    console.error('HOC error', error)
  }

  validate(values){
    const res = {};
    const validations = this.state.validations;


    for (let fieldName in values) {
      if(values.hasOwnProperty(fieldName)) {
        const value = values[fieldName];

        let error, valid;
        const validationsArr = validations[fieldName];
        validationsArr.every(validationOption => {
          const validation = this.getValidation(validationOption);
          const _valObj = validation(value);

          error = _valObj.error;
          valid = _valObj.isValid;
          return (valid)
        });
        res[fieldName] = {valid, error}
      }
    }

    return (res)
  }

  onFieldChange = (fieldName, value) => {
    let _update
    if(this.state.needValidation){
      const {error, valid} = this.validate({[fieldName]: value})[fieldName];
      _update = {fields:{[fieldName]:{$set: {valid, error, value}}}};

    } else {
      _update = {fields:{[fieldName]:{value:{$set: value}}}};
    }

    const newState = update(this.state, _update);
    this.setState(newState);
  };

  checkCurrentErrors = (formFields) => {
    let currentErrors = [];

    for(let field in formFields) {
      if(formFields.hasOwnProperty(field)) {
        currentErrors = [...currentErrors, formFields[field].error]
      }
    }

    return  !currentErrors.every((error) => (
      error === null
    ));

  };


  getValidation({type, option, error, errorFunc}){
    const _validationRule = _valFuncObj[type];
    let validationFunc;
    if( _typeOf(_validationRule) == 'object'){
      const _option = option || _validationRule.defaultoption;
      validationFunc = (value) => _validationRule.val(value, _option);
    } else {
      validationFunc = _validationRule;
    }

    return ( value => {
      const isValid = validationFunc(value);
      const _error = (errorFunc ? error(option) : error);

      return({
        isValid,
        error: !isValid ? _error : null
      })
    })
  }

  onSubmit = (pagination) => {
    const {fields, pagination:{pagesLength}} = this.state;
    const {formPage, setFormPage} = this.props;


    let values = {};

    for(let field in fields) {
      if (fields.hasOwnProperty(field)) {
        if(pagination) {
          config.fieldNames[formPage - 1].forEach(field =>{
            values[field] = fields[field].value
          })
        }
        else {
          values[field] = fields[field].value
        }
      }
    }
    const valResults = this.validate(values);

    const fieldUpdates = {}

    for (let name in valResults) {
      const {error, valid} = valResults[name]
      fieldUpdates[name] = {valid:{$set: valid}, error:{$set: error}}
    }

    const
      newState = update(this.state, {fields:fieldUpdates}),
      valid = Object.keys(valResults).every(key => valResults[key].valid)

    newState.needValidation = true;

    if(valid){
      newState.formValid = true;
      if(pagination) {
        newState.needValidation = false;
        if(formPage !== pagesLength) {
          return setFormPage(formPage + 1);
        }
      }
      newState.submited = true;
      const values = {};
      for (let name in fields) {
        if(fields.hasOwnProperty(name)) {
          values[name] = fields[name].value
        }
      }
      this.props.handleSubmit(values)
    }

    this.setState(newState)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.onSubmit(config.pagination);
  }

  render() {
    const {fields, formValid, submited, needValidation} = this.state;

    const {...props} = this.props;
    delete props.handeSubmit;

    return (
      <ComposedComponent
        {...{
          fields,
          formValid,
          needValidation,
          formHasErrors: this.checkCurrentErrors(fields),
          submited,
          handleSubmit: this.handleSubmit,
          onFieldChange: this.onFieldChange,
          formPage: this.props.formPage
        }}
      />
    )
  }
}


const _typeOf = (v) => {
  if(Array.isArray(v)) return 'array';
  return typeof v
}


// if(error !== oldError || oldValidStatus !== valid){
//   const newState = update(this.state, {fields:{[fieldName]:{valid:{$set: valid}, error:{$set: error}}}})
//   this.setError(newState)
// }