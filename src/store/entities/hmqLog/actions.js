import { createRequestActions } from 'helpers'
import { HMQ_LOG } from 'constants'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENDPOINT_HMQ_LOG } from 'constants/api'
import {apiDateFormat} from 'utils'
import moment from 'moment'

export function fetchHmqHolders (fromTimestampIso) {

  if(!fromTimestampIso){
    const now = moment()
    const fromTimestampIso = apiDateFormat(now)
  }
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_HMQ_LOG,
      method: 'GET',
      query: {
        fromTimestampIso,
        count: 40
      },
      types: createRequestActions(HMQ_LOG),
    }
  })
}
