import {START, SUCCESS, REQUEST, FAIL, BLOCKCHAIN_TRANSACTIONS, BLOCKCHAIN_MARKETS, BLOCKCHAIN_STATISTICS} from 'constants'

const transactionsInit = {
  loading: false,
  loaded: true,
  entities: [],
  markets:[],
  statistics:{
    tokenSupply: {
      hmq: '',
      usd: '',
      eth: ''
    },
    totalWallets: 0,
    totalTransactions: 0,
    totalTransactions24: 0,
    tokenValue: {
      hmq: '',
      usd: '',
      eth: ''
    },
    participatingExchanges: 0,
    lastHours24: {
      tradesVolume: {
        hmq: '',
        usd: '',
        eth: ''
      },
      numberTransactions: 0
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
