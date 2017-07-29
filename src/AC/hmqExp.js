import {SUCCESS, START, FAIL, REQUEST,
  BLOCKCHAIN_STATISTICS,
  BLOCKCHAIN_TRANSACTIONS,
  BLOCKCHAIN_MARKETS,
  BLOCKCHAIN_EXCHANGE_RATES
} from 'constants'
import {BACKEND_CALL} from 'middleware/humaniqBackendApi'
import moment from 'moment'

import {
  ENDPOINT_BLOCKCHAIN_STATISTICS,
  ENDPOINT_BLOCKCHAIN_MARKETS,
  ENDPOINT_BLOCKCHAIN_EXCHANGE_RATES
} from 'constants/api'


import {rnd} from 'utils'
import LastDate from 'utils/last'

function genTransaction(){
  const lastDate = new LastDate()
  const hmqAmount = Math.round(Math.random() * 1000)
  return({
    txHash: '0x' + rnd.str(22),
    block: rnd.num(5),
    from: '0x' + rnd.str(41),
    to: '0x' + rnd.str(41),
    time: lastDate.create().format(),
    hmqAmount: Math.round(Math.random() * 1000),
    usdAmount: Math.round(hmqAmount * 16) / 100
  })
}

function genTransactions(number){
  const _res = []
  for(let i = 0; i< number; i++){
    _res.push(genTransaction())
  }
  return(_res)
}


export function requestHmqTransactions() {
  return ({
    type: REQUEST + BLOCKCHAIN_TRANSACTIONS + SUCCESS,
    data: genTransactions(20)
  })
}

export function fetchHmqStatistics() {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_BLOCKCHAIN_STATISTICS,
      method: 'GET',
      types: [
        REQUEST + BLOCKCHAIN_STATISTICS + START,
        REQUEST + BLOCKCHAIN_STATISTICS + SUCCESS,
        REQUEST + BLOCKCHAIN_STATISTICS + FAIL,
      ]
    }
  })
}

export function fetchHmqMarkets() {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_BLOCKCHAIN_MARKETS,
      method: 'GET',
      types: [
        REQUEST + BLOCKCHAIN_MARKETS + START,
        REQUEST + BLOCKCHAIN_MARKETS + SUCCESS,
        REQUEST + BLOCKCHAIN_MARKETS + FAIL,
      ]
    }
  })
}

export function fetchExchangeRates(query, period) {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_BLOCKCHAIN_EXCHANGE_RATES,
      method: 'GET',
      query: query,
      types: [
        REQUEST + BLOCKCHAIN_EXCHANGE_RATES + START,
        REQUEST + BLOCKCHAIN_EXCHANGE_RATES + SUCCESS,
        REQUEST + BLOCKCHAIN_EXCHANGE_RATES + FAIL,
      ],
      data:period
    }
  })
}


const apiDateFormat = momentDate => momentDate.format('YYYYMMDDTHHmmss[Z]');

export function fetchGraphicData(period) {
  const now = moment()
  const toTimestampIso = apiDateFormat(now)
  let from, stepSeconds


  switch (period){
    case '1h':
      stepSeconds = 36
      from = now.subtract(1, 'hour')
      break;
    case '1d':
      stepSeconds = 864
      from = now.subtract(1, 'days')
      break;
    case '1w':
      stepSeconds = 1500
      from = now.subtract(1, 'week')
      break;
    case '1m':
      stepSeconds = 187488
      from = now.subtract(1, 'month')
      break;
    case '1y':
      stepSeconds = 68433120
      from = now.subtract(1, 'year')
      break;
  }


  const fromTimestampIso = apiDateFormat(from)
  // const duration = moment.duration(now.diff(from));
  // const stepSeconds = Math.round(duration.get('seconds'));
  return fetchExchangeRates({toTimestampIso, fromTimestampIso, stepSeconds}, period)
}