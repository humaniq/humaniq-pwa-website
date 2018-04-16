import { createRequestActions } from 'helpers'
import { USERS_NUMBER } from 'store/constants'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENDPOINT_USERS_NUMBER } from 'constants/api'

export function fetchUserNumber () {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_USERS_NUMBER,
      method: 'GET',
      types: createRequestActions(USERS_NUMBER),
    }
  })
}
