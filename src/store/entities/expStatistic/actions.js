import { createRequestActions } from 'store/helpers'
import { BLOCKCHAIN_STATISTICS } from 'store/constants'
import { BACKEND_CALL } from 'store/middleware/humaniqBackendApi'
import { ENDPOINT_BLOCKCHAIN_STATISTICS } from 'store/constants/api'

export function fetchHmqStatistics () {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_BLOCKCHAIN_STATISTICS,
      method: 'GET',
      types: createRequestActions(BLOCKCHAIN_STATISTICS),
    }
  })
}
