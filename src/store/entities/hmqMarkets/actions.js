import { createRequestActions } from 'helpers'
import { HMQ_MARKETS } from 'store/constants'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENDPOINT_HMQ_MARKETS } from 'constants/api'

export function fetchHmqMarkets () {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_HMQ_MARKETS,
      method: 'GET',
      types: createRequestActions(HMQ_MARKETS),
    }
  })
}
