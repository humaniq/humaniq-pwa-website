import { createFetchActions } from 'helpers'
import {BACKEND_CALL} from 'middleware/humaniqBackendApi'
import { ENDPOINT_PARTNERS_LIST } from 'constants/api'
import { PARTNERS } from 'constants'

export function fetchPartners() {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_PARTNERS_LIST,
      method: 'GET',
      types: createFetchActions(PARTNERS),
    }
  })
}
