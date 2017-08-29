import {_isDateValid} from './dateHelpers.js'
import React from 'react';

export const dateString = (function (){
  function validation(props, propName){
    const testValue = props[propName]
    if(!testValue) return null;
    if (!_isDateValid(testValue) || typeof testValue != 'string') {
      return new Error(`wrong format of date string: ${testValue }, check ${propName} `);
    }
    return null
  }
  
  validation.isRequired = function(props, propName, componentName){
    const testValue = props[propName]
    if (!testValue) return new Error(`props ${propName} is required`);
    return validation(props, propName, componentName)
  }
  return validation
})();

export const oneChild = (function (){
  function validation(props, propName){
    const testValue = props[propName]
    if(!testValue) return null;
    if (React.Children.count(testValue) !== 1) {
      return new Error(`Should be only one child`);
    }
    return null
  }

  validation.isRequired = function(props, propName, componentName){
    const testValue = props[propName]
    if (!testValue) return new Error(`props ${propName} is required`);
    return validation(props, propName, componentName)
  }
  return validation
})();

