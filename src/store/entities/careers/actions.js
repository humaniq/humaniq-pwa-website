import { createFetchActions } from 'helpers'
import { CAREERS } from 'store/constants'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENDPOINT_CAREERS } from 'constants/api'

export function fetchCareers () {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_CAREERS,
      method: 'GET',
      types: createFetchActions(CAREERS),
    }
  })
}
