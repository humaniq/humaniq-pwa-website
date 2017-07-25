import {WIKI} from 'constants'
import {BUTTER_CMS_CALL} from 'middleware/butterCmsApi'
import {BACKEND_CALL} from 'middleware/humaniqBackendApi'
import {ENDPOINT_WIKI_SEARCH} from 'constants/api'
import {WIKI_SEARCH, START, SUCCESS, FAIL, CLEAN} from 'constants'

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

export function wikiSearch({searchTerm}) {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_WIKI_SEARCH,
      method: 'POST',
      payload: {searchTerm},
      types: [
        WIKI_SEARCH + START,
        WIKI_SEARCH + SUCCESS,
        WIKI_SEARCH + FAIL,
      ],
      data: searchTerm
    }
  })
}

export function cleanWikiSearch() {
  return ({
    type: CLEAN + WIKI_SEARCH
  })
}