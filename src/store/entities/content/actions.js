import {BUTTER_CMS_CALL} from 'middleware/butterCmsApi'
import {CONTENT, STATIC_DATA} from 'store/constants'
import {convert} from 'utils'

export function fetchContent(collection, ...slugs) {
  slugs = slugs.map( str => convert.toSnake(str))

  return ({
    [BUTTER_CMS_CALL]: {
      butter: CONTENT,
      data:{
        collection,
        slugs
      }
    }
  })
}

export const fetchStaticData = (...slugs) =>  fetchContent(STATIC_DATA, ...slugs)