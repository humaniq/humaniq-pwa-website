import {convert} from 'utils'

export default (data) => {

  let _preparedData = {};

  for (let valueName in data) {
    if(data.hasOwnProperty(valueName)) {
      const level0Title =  convert.toTitleCase(valueName);
      const _kebabCaseName = convert.toKebab(valueName);
      _preparedData[_kebabCaseName] = {
        ids: [],
        entities: {},
        level0Title
      };

      data[valueName].forEach(({title, category, article}) => {
        const pseudoId = convert.toCleanKebab(title);

        _preparedData[_kebabCaseName].ids.push(pseudoId);
        _preparedData[_kebabCaseName].entities[pseudoId] = {title, id:pseudoId, level0:_kebabCaseName, level1:category, article}
      })
    }

  }
  return _preparedData
}