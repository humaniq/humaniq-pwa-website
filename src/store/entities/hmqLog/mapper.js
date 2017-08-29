import {numberFormat} from 'utils'

export default (arr) => {
  return arr.map(({info, amount, blockchain}) =>({
    txHash: info.hash,
    block: blockchain.blockNumber || undefined,
    from: info.senderAddress,
    to: info.receiverAddress,
    time: info.timestampIso,
    usdAmount: numberFormat(+ amount.usd, 2),
    hmqAmount: numberFormat(+ amount.hmq, 2),
    status: info.status
  }))
}