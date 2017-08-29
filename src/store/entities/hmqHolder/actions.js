import {createRequestActions} from 'helpers'
import {HMQ_HOLDER, HMQ_HOLDER_T, CLEAN} from 'constants'
import {BACKEND_CALL} from 'middleware/humaniqBackendApi'
import {ENDPOINT_HMQ_HOLDERS} from 'constants/api'
import {COUNT} from './reducer'

export function fetchHmqHolder(holder) {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_HMQ_HOLDERS + '/' + holder,
      method: 'GET',
      types: createRequestActions(HMQ_HOLDER),
      data: holder
    }
  })
}

export function fetchHmqHolderT(holder, offset = 0) {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_HMQ_HOLDERS + '/' + holder + '/transactions',
      method: 'GET',
      types: createRequestActions(HMQ_HOLDER_T),
      data: holder,
      query: {
        offset,
        count: COUNT
      },
    }
  })
}


export function cleanHmqHolderT() {
  return ({
    type: CLEAN + HMQ_HOLDER_T
  })
}