import { createRequestActions } from 'helpers'
import { HMQ_HOLDERS } from 'constants'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENDPOINT_HMQ_HOLDERS } from 'constants/api'

export function fetchHmqHolders (offset = 0) {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_HMQ_HOLDERS,
      method: 'GET',
      query: {
        offset,
        count: 40
      },
      types: createRequestActions(HMQ_HOLDERS),
      data: offset
    }
  })
}
