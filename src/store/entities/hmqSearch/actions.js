import {BACKEND_CALL} from 'middleware/humaniqBackendApi'
import {ENDPOINT_HMQ_SEARCH, ENDPOINT_PERSONAL_HEADERS} from 'constants/api'
import {HMQ_SEARCH, CLEAN} from 'constants'
import {typesArray} from 'utils/actionHelpers'

export function hmqSearch({searchTerm}) {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_HMQ_SEARCH,
      method: 'POST',
      headers: ENDPOINT_PERSONAL_HEADERS,
      payload: {searchTerm},
      types: typesArray(HMQ_SEARCH),
      data: searchTerm
    }
  })
}

export function cleanHmqSearch() {
  return ({
    type: CLEAN + HMQ_SEARCH
  })
}