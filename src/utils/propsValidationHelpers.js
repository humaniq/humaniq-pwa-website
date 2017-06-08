import {_isDateValid} from './dateHelpers.js'

export const dateString = (function (){
  function validation(props, propName){
    const testValue = props[propName]
    if(!testValue) return null;
    if (!_isDateValid(testValue) || typeof testValue != 'string') {
      return new Error(`wrong format of date string: ${testValue}, check ${propName} `);
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



