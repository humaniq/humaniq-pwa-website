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
  toKebab: str => {
    let newString = str.replace(/(\w(?=[A-Z]))/g, '$1+').replace(/[_-]/g, '+')
    return (newString.split('+').join('-').toLowerCase())
  },
  toCleanKebab: str => str.replace(/[^\w\s_]/g, '').split(/\s+/).join('-').toLowerCase(),
  toCamel: str => str.replace(/[_-]([a-z])/g, g => g[1].toUpperCase()),
  toTitleCase: str => {
    let newString = str.replace(/[_-]/, ' ')
    return (
      newString
        .replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    )},
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

export function getArticleLinks(ids, entities){
  return(
    ids.map( id => {
      const entitie = entities[id]

      return({
        title: entitie.title,
        url: `/wiki/${entitie.level0}/${id}`,
        level1: entitie.level1,
        level0: entitie.level0
      })
    })
  )
}