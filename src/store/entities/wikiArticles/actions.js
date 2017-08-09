import {WIKI} from 'store/constants'
import {BUTTER_CMS_CALL} from 'store/middleware/butterCmsApi'

export function fetchWiki() {
  return ({
    [BUTTER_CMS_CALL]: {
      butter: WIKI,
      data:{
        collection: 'technical_mecca,about_humaniq' //all articles
      }
    }
  })
}
