import moment from 'moment'
import { createRequestActions } from 'helpers'
import { HMQ_GRAPH } from 'constants'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENDPOINT_HMQ_GRAPH } from 'constants/api'

export function fetchExchangeRates (query, period) {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_HMQ_GRAPH,
      method: 'GET',
      query: query,
      types: createRequestActions(HMQ_GRAPH),
      data: period
    }
  })
}

const apiDateFormat = momentDate => momentDate.format('YYYYMMDDTHHmmss[Z]')

export function fetchGraphData (period) {
  const now = moment().utc()
  const toTimestampIso = apiDateFormat(now)
  let from, stepSeconds

  switch (period) {
    case '1h':
      stepSeconds = 60
      from = now.subtract(1, 'hour')
      break
    case '1d':
      stepSeconds = 1080
      from = now.subtract(1, 'days')
      break
    case '1w':
      stepSeconds = 7560
      from = now.subtract(1, 'week')
      break
    case '1m':
      stepSeconds = 133920

      from = now.subtract(1, 'month')
      break
    case '1y':
      stepSeconds = 68433120
      from = now.subtract(1, 'year')
      break
  }

  const fromTimestampIso = apiDateFormat(from)
  // const duration = moment.duration(now.diff(from));
  // const stepSeconds = Math.round(duration.get('seconds'));
  return fetchExchangeRates({toTimestampIso, fromTimestampIso, stepSeconds}, period)
}