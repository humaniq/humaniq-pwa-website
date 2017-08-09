import moment from 'moment'
import { createRequestActions } from 'helpers'
import { BLOCKCHAIN_EXCHANGE_RATES } from 'constants'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENDPOINT_BLOCKCHAIN_EXCHANGE_RATES } from 'constants/api'

export function fetchExchangeRates (query, period) {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_BLOCKCHAIN_EXCHANGE_RATES,
      method: 'GET',
      query: query,
      types: createRequestActions(BLOCKCHAIN_EXCHANGE_RATES),
      data: period
    }
  })
}

const apiDateFormat = momentDate => momentDate.format('YYYYMMDDTHHmmss[Z]')

export function fetchGraphicData (period) {
  const now = moment()
  const toTimestampIso = apiDateFormat(now)
  let from, stepSeconds

  switch (period) {
    case '1h':
      stepSeconds = 36
      from = now.subtract(1, 'hour')
      break
    case '1d':
      stepSeconds = 864
      from = now.subtract(1, 'days')
      break
    case '1w':
      stepSeconds = 1500
      from = now.subtract(1, 'week')
      break
    case '1m':
      stepSeconds = 187488
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