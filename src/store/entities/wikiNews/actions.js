import {WIKI_NEWS} from 'store/constants'
import {BUTTER_CMS_CALL} from 'middleware/butterCmsApi'

export function fetchWikiNews() {
  return ({
    [BUTTER_CMS_CALL]: {
      butter: WIKI_NEWS,
      data:{
        collection: 'humaniq_news'
      }
    }
  })
}
