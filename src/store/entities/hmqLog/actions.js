import { createRequestActions } from 'helpers'
import { HMQ_LOG } from 'constants'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENDPOINT_HMQ_LOG } from 'constants/api'
import {apiDateFormat} from 'utils'
import moment from 'moment'

export function fetchHmqLog (next) {

  let _to

  if(!next){
    _to = moment().utc()
  }else{
    _to = moment.utc(next)
  }

  const toTimestampIso = apiDateFormat(_to)

  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_HMQ_LOG,
      method: 'GET',
      query: {
        toTimestampIso,
        count: 30
      },
      types: createRequestActions(HMQ_LOG),
    }
  })
}
