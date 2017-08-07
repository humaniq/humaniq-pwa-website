import { createFetchActions } from 'store/helpers'
import {BACKEND_CALL} from 'store/middleware/humaniqBackendApi'
import { ENDPOINT_PARTNERS_LIST } from 'store/constants/api'
import { PARTNERS } from 'store/constants'

export function fetchPartners() {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_PARTNERS_LIST,
      method: 'GET',
      types: createFetchActions(PARTNERS),
    }
  })
}
