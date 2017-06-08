import {BUTTER_API} from 'middleware/apiButter'
import {CONTENT, STATIC_DATA} from 'constants'
import {convert} from 'utils'

export function fetchContent(collection, ...slugs) {
  slugs = slugs.map( str => convert.toSnake(str))

  return ({
    [BUTTER_API]: {
      butter: CONTENT,
      data:{
        collection,
        slugs
      }
    }
  })
}

export const fetchStaticData = (...slugs) =>  fetchContent(STATIC_DATA, ...slugs)