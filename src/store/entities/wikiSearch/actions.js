import { BACKEND_CALL } from 'store/middleware/humaniqBackendApi'
import { ENDPOINT_WIKI_SEARCH } from 'store/constants/api'
import { WIKI_SEARCH, START, SUCCESS, FAIL, CLEAN } from 'store/constants'

export function wikiSearch ({searchTerm}) {
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

export function cleanWikiSearch () {
  return ({
    type: CLEAN + WIKI_SEARCH
  })
}