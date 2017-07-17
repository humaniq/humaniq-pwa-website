import {BACKEND_CALL} from 'middleware/humaniqBackendApi'
import {ENDPOINT_PARTNERS_LIST} from 'constants/api'
import {START, SUCCESS, FAIL, FETCH, PARTNERS} from 'constants'

export function fetchPartners() {

  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_PARTNERS_LIST,
      method: 'GET',
      types: [
        FETCH + PARTNERS + START,
        FETCH + PARTNERS + SUCCESS,
        FETCH + PARTNERS + FAIL,
      ]
    }
  })
}
