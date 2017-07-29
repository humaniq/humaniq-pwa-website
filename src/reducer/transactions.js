import {START, SUCCESS, REQUEST, FAIL, BLOCKCHAIN_TRANSACTIONS, BLOCKCHAIN_MARKETS, BLOCKCHAIN_STATISTICS} from 'constants'

const transactionsInit = {
  loading: false,
  loaded: true,
  entities: [],
  markets:[],
  statistics: {
    tokenSupply: {
      hmq: '184190410',
      usd: '28383742.180999996404',
      eth: '142696.4063194409274'
    },
    totalWallets: 11293,
    totalTransactions: 30063,
    totalTransactions24: 138,
    tokenValue: {
      hmq: '1',
      usd: '0.15409999999999998048',
      eth: '0.00077472223618722021087'
    },
    participatingExchanges: 8,
    lastHours24: {
      tradesVolume: {
        hmq: '232603',
        usd: '35388.967',
        eth: '180.2027163038559827'
      },
      numberTransactions: 138
    }
  }
}

export default (transactions = transactionsInit, { type, data } ) => {

  switch (type) {
    case REQUEST + BLOCKCHAIN_TRANSACTIONS + START:
      return {...transactions, loading: true}
    case REQUEST + BLOCKCHAIN_TRANSACTIONS + SUCCESS:
      return {...transactions, loading: false, loaded: true, entities:[...transactions.entities, ...data]}
    case REQUEST + BLOCKCHAIN_TRANSACTIONS + FAIL:
      return {...transactions, loading: false}
    case REQUEST + BLOCKCHAIN_STATISTICS + SUCCESS:
      return {...transactions, statistics:{...data}}
    case REQUEST + BLOCKCHAIN_MARKETS + SUCCESS:
      return {...transactions, loading: false, loaded: true, makets:[...data]}

  }
  return transactions;
};
