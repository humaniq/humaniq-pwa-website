import { createRequestActions } from 'helpers'
import { HMQ_STATISTICS } from 'store/constants'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENDPOINT_HMQ_STATISTICS } from 'constants/api'

export function fetchHmqStatistics () {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_HMQ_STATISTICS,
      method: 'GET',
      types: createRequestActions(HMQ_STATISTICS),
    }
  })
}
