import {START, SUCCESS, REQUEST, FAIL, HMQ_STATISTICS} from 'constants'
import mapper from './mapper'

const hmqStatisticInit = {
  loading: false,
  loaded: false,
  volume24String: 'no data',
  tokenSupplyString: 'no data',
  tokenValueString: 'no data',
  tokenSupply: {
    hmq: 'no data',
    usd: 'no data',
    eth: 'no data',
  },
  totalWallets: 'no data',
  totalTransactions: 'no data',
  totalTransactions24: 'no data',
  tokenValue: {
    hmq: 'no data',
    usd: 'no data',
    eth: 'no data'
  },
  participatingExchanges: 0,
  lastHours24: {
    tradesVolume: {
      hmq: 'no data',
      usd: 'no data',
      eth: 'no data'
    },
    numberTransactions: 'no data'
  }

}

export default (hmqStatistic = hmqStatisticInit, { type, data } ) => {

  switch (type) {
    case REQUEST + HMQ_STATISTICS + START:
      return {...hmqStatistic, loading: true}

    case REQUEST + HMQ_STATISTICS + SUCCESS:
      return {...hmqStatistic, loading: false, loaded: true, ...mapper(data)}
    case REQUEST + HMQ_STATISTICS + FAIL:
      return {...hmqStatistic, loading: false}
  }
  return hmqStatistic;
};
