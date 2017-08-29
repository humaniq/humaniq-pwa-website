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

function toPhone(str){
  let res = str.replace(/\D/g, '')
  if(res.length > 2) res = res.substr(0, 3) + '-' + res.substr(3,20)
  if(res.length > 6) res = res.substr(0, 7) + '-' + res.substr(7,4)

  return res
}

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
  toPhone: toPhone,
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

//save deep access to objects and arrays, ex. of use:   safeDA([{a:{b:10}}], ['0', 'a', 'b'], 0),
// return value or noResult value, if there is no noResult value returns false.
export const safeDA = (object, props, noResult = false) => props.reduce((prefix, val) => (prefix && prefix[val]) ? prefix[val] : noResult, object)


function rndStr(long){
  const n = Math.ceil( long / 5 )
  let string = ''
  for(var i = 0; i < n; i++){
    string += Math.random().toString(36).substring(8)
  }
  return (string.substr(0, long))
}

export const rnd = {
  str: rndStr,
  num: (long) => Math.round(Math.random() * Math.pow(10, long))
}

//number format function ex. of use: numberFormat(100000000000, 2) => '10,000,000.00'
export const numberFormat = function(n, dp){

  if(!n) return '0';
  var e = '', s = e+n, l = s.length, b = n < 0 ? 1 : 0,
    i = s.lastIndexOf('.'), j = i == -1 ? l : i,
    r = e, d = s.substr(j+1, dp);
  while ( (j-=3) > b ) { r = ',' + s.substr(j, 3) + r; }
  return s.substr(0, j + 3) + r +
    (dp ? '.' + d + ( d.length < dp ?
      ('00000').substr(0, dp - d.length):e):e);
};


export function arrayUnique(array) {
  var a = array.concat();
  for(var i=0; i<a.length; ++i) {
    for(var j=i+1; j<a.length; ++j) {
      if(JSON.stringify(a[i]) === JSON.stringify(a[j]))
        a.splice(j--, 1);
    }
  }

  return a;
}

export const apiDateFormat = momentDate => momentDate.format('YYYYMMDDTHHmmss[Z]')
