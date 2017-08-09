import { createRequestActions } from 'helpers'
import { BLOCKCHAIN_STATISTICS } from 'constants'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENDPOINT_BLOCKCHAIN_STATISTICS } from 'constants/api'

export function fetchHmqStatistics () {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_BLOCKCHAIN_STATISTICS,
      method: 'GET',
      types: createRequestActions(BLOCKCHAIN_STATISTICS),
    }
  })
}
