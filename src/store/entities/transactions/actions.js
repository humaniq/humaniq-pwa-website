import { createRequestActions } from 'helpers'
import {
  SUCCESS,
  REQUEST,
  BLOCKCHAIN_TRANSACTIONS,
  BLOCKCHAIN_MARKETS,
} from 'constants'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'

import { ENDPOINT_BLOCKCHAIN_MARKETS } from 'constants/api'

import { rnd } from 'utils'
import LastDate from 'utils/last'

function genTransaction () {
  const lastDate = new LastDate()
  const hmqAmount = Math.round(Math.random() * 1000)
  return ({
    txHash: '0x' + rnd.str(22),
    block: rnd.num(5),
    from: '0x' + rnd.str(41),
    to: '0x' + rnd.str(41),
    time: lastDate.create().format(),
    hmqAmount: Math.round(Math.random() * 1000),
    usdAmount: Math.round(hmqAmount * 16) / 100
  })
}

function genTransactions (number) {
  const _res = []
  for (let i = 0; i < number; i++) {
    _res.push(genTransaction())
  }
  return (_res)
}

export function requestHmqTransactions () {
  return ({
    type: REQUEST + BLOCKCHAIN_TRANSACTIONS + SUCCESS,
    data: genTransactions(20)
  })
}

export function fetchHmqMarkets () {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_BLOCKCHAIN_MARKETS,
      method: 'GET',
      types: createRequestActions(BLOCKCHAIN_MARKETS),
    }
  })
}
