import { createRequestActions } from 'helpers'
import { HMQ_HASH } from 'store/constants'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENDPOINT_HMQ_HASH } from 'constants/api'

export function fetchHmqHash (hash) {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_HMQ_HASH + hash,
      method: 'GET',
      types: createRequestActions(HMQ_HASH),
      data: hash
    }
  })
}
