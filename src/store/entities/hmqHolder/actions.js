import { createRequestActions } from 'helpers'
import { HMQ_HOLDER, HMQ_HOLDER_T } from 'constants'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENDPOINT_HMQ_HOLDERS } from 'constants/api'

export function fetchHmqHolder (holder) {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_HMQ_HOLDERS + '/' + holder,
      method: 'GET',
      types: createRequestActions(HMQ_HOLDER),
      data: holder
    }
  })
}

export function fetchHmqHolderT (holder) {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_HMQ_HOLDERS + '/' + holder + '/transactions',
      method: 'GET',
      types: createRequestActions(HMQ_HOLDER_T),
      data: holder
    }
  })
}