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
}

export default (ComposedComponent, config)  => class FormHoc extends Component {

  state = {
    fields: this.getInitValues(config.fieldNames),
    needValidation: false,
    validations: this.getFormValidationConfig(config.fieldNames, config.validations, config.customErrors),
    formValid: false,
    submited: false
  };

  getInitValues(fieldNamesArray = []){

    if(!fieldNamesArray.length){
      this.throwError('empty config.fieldNames')
    }
    
    const res = {}
    fieldNamesArray.forEach(fieldName => {
      res[fieldName] = {
        value: '',
        error: null,
        valid: false
      }
    })
    return res
  }

  getFormValidationConfig(fieldNamesArray = [], validations = {}, customErrors = {}){
    let res = {}

    fieldNamesArray.forEach( fieldName => {
      const fieldConfig = validations[fieldName]

      res[fieldName] = this.getFieldValidationConfig(fieldConfig, fieldName, customErrors[fieldName])
    })
    return res
  }

  getFieldValidationConfig (fieldConfig, fieldName, customError){
    let type, error, option;

    switch(_typeOf(fieldConfig)){
      case 'array':
        let types = []
        fieldConfig.forEach(config => {
          const type = this.getFieldValidationConfig(config, fieldName)
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
    if(_typeOf(errorConfig) == 'array'){
      return errorConfig[type]
    } else {
      return errorConfig
    }
  }
  
  getInitValType({type, option, error}){
    const errorFunc = _typeOf(error) == 'function'


    return({type, option, errorFunc, error})
  }

  throwError(error){
    console.error('HOC error', error)
  }

  validate(values){
    const res = {}
    const validations = this.state.validations


    for (let fieldName in values) {
      const value = values[fieldName]

      let error, valid;
      const validationsArr = validations[fieldName]
      validationsArr.every( validationOption => {
        const validation = this.getValidation(validationOption)
        const _valObj = validation(value)

        error = _valObj.error
        valid = _valObj.isValid
        return(valid)
      })
      res[fieldName] = {valid, error}
    }

    return (res)
  }

  onFieldChange = (fieldName, value) => {
    let _update
    if(this.state.needValidation){
      const {error, valid} = this.validate({[fieldName]: value})[fieldName]
      _update = {fields:{[fieldName]:{$set: {valid, error, value}}}}
    } else {
      _update = {fields:{[fieldName]:{value:{$set: value}}}}
    }

    const newState = update(this.state, _update)
    this.setState(newState)
  }


  getValidation({type, option, error, errorFunc}){
    const _validationRule = _valFuncObj[type]
    let validationFunc
    if( _typeOf(_validationRule) == 'object'){
      const _option = option || _validationRule.defaultoption
      validationFunc = (value) => _validationRule.val(value, _option)
    } else {
      validationFunc = _validationRule
    }

    return ( value => {
      const isValid = validationFunc(value)
      const _error = (errorFunc ? error(option) : error)
      console.log(_error)
      return({
        isValid,
        error: !isValid ? _error : null
      })
    })
  }

  onSubmit = () => {
    const
      {fields} = this.state,
      values = {}

    config.fieldNames.forEach( name => {
      values[name] = fields[name].value
    })

    const valResults = this.validate(values)

    const fieldUpdates = {}
    for (let name in valResults) {
      const {error, valid} = valResults[name]
      fieldUpdates[name] = {valid:{$set: valid}, error:{$set: error}}
    }

    const
      newState = update(this.state, {fields:fieldUpdates}),
      valid = Object.keys(valResults).every(key => valResults[key].valid)


    newState.needValidation = true

    if(valid){
      newState.formValid = true
      newState.submited = true
      const values = {}
      for (let name in valResults) {
        values[name] = fields[name].value
      }
      this.props.handleSubmit(values)
    }

    this.setState(newState)
  }

  handeSubmit = (e) => {
    e.preventDefault()
    this.onSubmit()
  }

  render() {
    const {fields, formValid, submited} = this.state

    const {...props} = this.props
    delete props.handeSubmit;

    return (
      <ComposedComponent
        {...{
          formValid,
          submited,
          handeSubmit: this.handeSubmit,
          onFieldChange: this.onFieldChange,
          fields
        }}
      />
    )
  }
}


const _typeOf = (v) => {
  if(Array.isArray(v)) return 'array'
  return typeof v
}


// if(error !== oldError || oldValidStatus !== valid){
//   const newState = update(this.state, {fields:{[fieldName]:{valid:{$set: valid}, error:{$set: error}}}})
//   this.setError(newState)
// }