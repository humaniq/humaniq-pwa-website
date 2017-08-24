import { createRequestActions } from 'helpers'
import { HMQ_LOG } from 'constants'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENDPOINT_HMQ_LOG } from 'constants/api'
import {apiDateFormat} from 'utils'
import moment from 'moment'

export function fetchHmqLog (fromTimestampIso, toTimestampIso) {

  if(!toTimestampIso){
    const now= moment().utc()
    toTimestampIso = apiDateFormat(now)
  }

  if(!fromTimestampIso){
    const _to = moment.utc(toTimestampIso, 'YYYYMMDDTHHmmss[Z]')
    const from = _to.subtract(4, 'hours')
    fromTimestampIso = apiDateFormat(from)
  }

  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_HMQ_LOG,
      method: 'GET',
      query: {
        toTimestampIso,
        fromTimestampIso
      },
      types: createRequestActions(HMQ_LOG),
    }
  })
}
