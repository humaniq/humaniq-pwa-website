import { createRequestActions } from 'helpers'
import { HMQ_BLOCK } from 'store/constants'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENDPOINT_HMQ_BLOCK } from 'constants/api'

export function fetchHmqBlock (block) {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_HMQ_BLOCK + block,
      method: 'GET',
      types: createRequestActions(HMQ_BLOCK),
      data: block
    }
  })
}
