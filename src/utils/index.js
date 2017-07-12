//default helpers
import catnip from 'catnip';
import camelcaseKeys from 'camelcase-keys';

function cssDecamelize(string) {
  let newString = string.split('_').filter(n => n !== '').join('-')
  newString = newString.replace(/([a-z](?=[A-Z]))/g, '$1+')
  return (newString.split('+').join('-').toLowerCase())
}

export function cssClassName(string){
  return catnip(cssDecamelize(string))
}

export function _isContain(arr, element) {
  return arr.indexOf(element) > -1
}
export const simpleSnakeCase = (str) => str.split(/(?=[A-Z])/).join('_').toLowerCase();

export const convert = {
  toSnake: str => str.split(/(?=[A-Z])/).join('_').toLowerCase(),
  toKebab: (str) => str.split(/\s+/).join('-').toLowerCase(),
  toCamel: str => str.replace(/_([a-z])/g, g => g[1].toUpperCase()),
  obj:{
    toCamel: str => camelcaseKeys(str, {deep: true}),
  }
}

export function isServer() {
  try {
    window === void 0;
    return false
  }
  catch (e) {
    return true
  }
}


export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function deepValueByString(obj, path){
  path=path.split('.')
  const length=path.length
  for (var i=0; i<length; i++){
    obj = obj[path[i]]
  }
  return obj;
}
