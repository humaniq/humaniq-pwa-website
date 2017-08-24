import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENDPOINT_WIKI_SEARCH } from 'constants/api'
import { HMQ_SEARCH, START, SUCCESS, FAIL, CLEAN } from 'constants'

export function hmqSearch ({searchTerm}) {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_WIKI_SEARCH,
      method: 'POST',
      payload: {searchTerm},
      types: [
        HMQ_SEARCH + START,
        HMQ_SEARCH + SUCCESS,
        HMQ_SEARCH + FAIL,
      ],
      data: searchTerm
    }
  })
}

export function cleanHmqSearch () {
  return ({
    type: CLEAN + HMQ_SEARCH
  })
}