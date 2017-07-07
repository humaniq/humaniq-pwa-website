import {WIKI} from 'constants'
import {BUTTER_API} from 'middleware/apiButter'


export function fetchWiki() {
  return ({
    [BUTTER_API]: {
      butter: WIKI,
      data:{
        collection: 'technical_mecca,about_humaniq' //all articles
      }
    }
  })
}
