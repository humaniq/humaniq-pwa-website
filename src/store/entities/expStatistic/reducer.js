import {START, SUCCESS, REQUEST, FAIL, BLOCKCHAIN_STATISTICS} from 'store/constants'
import {safeDA, numberFormat} from 'utils'

const expStatisticInit = {
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

export default (expStatistic = expStatisticInit, { type, data } ) => {

  switch (type) {
    case REQUEST + BLOCKCHAIN_STATISTICS + START:
      return {...expStatistic, loading: true}

    case REQUEST + BLOCKCHAIN_STATISTICS + SUCCESS:
      const _tokenSupplyHmq = safeDA(data, ['tokenSupply', 'hmq'], 0)
      const _tokenSupplyUsd = safeDA(data, ['tokenSupply', 'usd'], 0)
      const _lastHours24TradesVolumeUsd = safeDA(data, ['lastHours24', 'tradesVolume', 'usd'], 0)
      const _lastHours24TradesVolumeHmq = safeDA(data, ['lastHours24', 'tradesVolume', 'hmq'], 0)

      const _tokenValueUsd = safeDA(data, ['tokenValue', 'usd'], 0)
      const _tokenValueHmq = safeDA(data, ['tokenSupply', 'hmq'], 0)

      const tokenSupplyString = `${numberFormat(_tokenSupplyHmq)} HMQ $ ${numberFormat(Math.round(_tokenSupplyUsd * 100) / 100)}`
      const volume24String = `$ ${numberFormat(Math.round(_lastHours24TradesVolumeUsd))} HMQ ${numberFormat(Math.round(_lastHours24TradesVolumeHmq *100)/ 100)}`
      const tokenValueString = `$ ${Math.round(_tokenValueUsd * 10000) /10000} HMQ $ ${numberFormat(Math.round(_tokenValueHmq * 1000000)/ 1000000)}`

      return {...expStatistic, ...data, tokenSupplyString, volume24String, tokenValueString}
    case REQUEST + BLOCKCHAIN_STATISTICS + FAIL:
      return {...expStatistic, loading: true}
  }
  return expStatistic;
};
