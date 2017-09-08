import React, { Component } from "react";
import {validateEmail, validateWebsiteName, validateMaxLength} from 'utils/validateHelpers'
import update from 'immutability-helper';

const defaultError = {
  email: 'Looks like an invalid email address',
  url: 'Looks like an invalid email address',
  maxLengh: (max, overMax) => `Maximum length is ${max} characters. The text is larger by ${overMax} character${overMax !== 1 ? 's' : ''}`,
  required: 'Please fill this field'
}

const _valFuncObj = {
  email: validateEmail,
  url: validateWebsiteName,
  maxLengh: validateMaxLength,
  required: val => val && val.length
}

const config = {
  fieldNames: ['firstName', 'lastName', 'email', 'webSite', 'bio'],
  validations: {
    firstName: 'required',
    lastName: ['lastName', {type: 'maxLengh', options: 3}],
    email: ['required', 'email'],
    webSite: ['url'],
    bio: {type: 'maxLengh', options: 5},
    word: 'required'
  },
  customErrors: {
    lastName: {
      maxLengh: max => `Last name can't be longer then ${max}`
    },
    word: 'type the word'
  }
}


export default (ComposedComponent)  => class FormHoc extends Component {
  state = {
    fields: this.genValues(config.fieldNames),
    needValidation: false,
    validations: this.genInitFormValidationConfig(config.fieldNames, config.validations)
  };

  componentWilMount(){
    this.checkConfig()
  }

  genValues(fieldNamesArray = []){
    const res = []
    fieldNamesArray.forEach(fieldName => {
      res[fieldName] = {
        value: '',
        error: null
      }
    })
    return res
  }

  genInitFormValidationConfig(fieldNamesArray = [], config = {}){
    let res = {}

    fieldNamesArray.forEach( fieldName => {
      const fieldConfig = config.validations[fieldName]
      res[fieldName] = this.setInitOption(fieldConfig, fieldName)
    })
    return res
  }

  setInitOption (fieldConfig, fieldName){
    let type, customError, options;

    switch(_typeOf(fieldConfig)){
      case 'array':
        const types = []
        fieldConfig.forEach(config => {
          const type = this.setInitOption(config, fieldName)
          types.concat(type)
        })
        return types
      case 'object':
        type = fieldConfig.type
        customError = this.getInitError(config.customErrors[fieldName])
        options = fieldConfig.options
        return ([this.setInitType({type, customError, options})])
      case 'string':
        type = fieldConfig
        customError = this.getInitError(config.customErrors[fieldName])
        return [this.setInitType({type, customError})]
      case 'undefined':
        return []
    }
  }

  getInitError = (errorConfig, type) =>{
    if(_typeOf(errorConfig) == 'array'){
      return errorConfig[type]
    } else {
      return errorConfig
    }
  }
  setInitType({type, options, customError}){
    const
      error =  customError || defaultError[type],
      errorFunc = _typeOf(error) == 'function'

    return({type, options, errorFunc, error})
  }

  onFieldChange(fieldName, value){
    if(this.state.needValidation){
      this.validate(fieldName, value)
    }
    const newState = update(this.state, {fields:{[fieldName]:{value:{$set: value}}}})
    this.setState(newState)
  }

  setError(nameField, error){
    const newState = update(this.state, {values: {[nameField]:{error:{$set: error}}}})
    this.setState(newState)
  }

  throwError(error){
    console.error('HOC error', error)
  }

  checkConfig(config){
    if(!config.fieldNames || !config.fieldNames.length){
      this.throwError('empty config.fieldNames')
    }
  }


  render() {
    console.log(this.state)
    return <ComposedComponent{...this.props}/>
  }
}


const _typeOf = (v) => {
  if(Array.isArray(v)) return 'array'
  return typeof v
}