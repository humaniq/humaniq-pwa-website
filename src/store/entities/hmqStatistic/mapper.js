import {safeDA, numberFormat} from 'utils'

export default (data) => {

  const _tokenSupplyHmq = safeDA(data, ['tokenSupply', 'hmq'], 0)
  const _tokenSupplyUsd = safeDA(data, ['tokenSupply', 'usd'], 0)
  const _lastHours24TradesVolumeUsd = safeDA(data, ['lastHours24', 'tradesVolume', 'usd'], 0)
  const _lastHours24TradesVolumeHmq = safeDA(data, ['lastHours24', 'tradesVolume', 'hmq'], 0)

  const _tokenValueUsd = safeDA(data, ['tokenValue', 'usd'], 0)
  const _tokenValueEth = safeDA(data, ['tokenValue', 'eth'], 0)

  const tokenSupplyString = `${numberFormat(_tokenSupplyHmq)} HMQ $ ${numberFormat(Math.round(_tokenSupplyUsd * 100) / 100)}`
  const volume24String = `$ ${numberFormat(Math.round(_lastHours24TradesVolumeUsd))} HMQ ${numberFormat(Math.round(_lastHours24TradesVolumeHmq *100)/ 100)}`
  const tokenValueString = `$ ${Math.round(_tokenValueUsd * 10000) /10000} (${(+ _tokenValueEth).toFixed(6)} ETH)`

  return ({
    tokenSupplyString,
    volume24String,
    tokenValueString,
    participatingExchanges: data.participatingExchanges,
    lastHours24: data.lastHours24,
    totalWallets: data.totalWallets,
    totalTransactions: data.totalTransactions,
    totalTransactions24: data.totalTransactions24
  })
}


